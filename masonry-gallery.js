// masonry-gallery.js
// Masonry gallery built on top of TetrisGridCore.

(function () {
  'use strict';

  // ---------------------------
  // CSV parsing
  // ---------------------------

  function parseCSV(csvText) {
    const lines = csvText.trim().split(/\r?\n/);
    if (!lines.length) return [];

    const header = lines[0].split(',').map(h => h.trim().toLowerCase());
    const idxName = header.indexOf('name');
    const idxLink = header.indexOf('link');
    const idxSpan = header.indexOf('span');     // optional
    const idxPin = header.indexOf('pin');       // optional ("center" etc.)
    const idxPinRow = header.indexOf('pinrow'); // optional rowStart for pinned

    const items = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cols = line.split(',');
      const name =
        idxName >= 0 && cols[idxName] != null ? cols[idxName].trim() : '';
      const link =
        idxLink >= 0 && cols[idxLink] != null ? cols[idxLink].trim() : '';

      let span = 1;
      if (idxSpan >= 0 && cols[idxSpan] != null && cols[idxSpan].trim() !== '') {
        const s = parseInt(cols[idxSpan].trim(), 10);
        if (!isNaN(s) && s > 0) span = s;
      }

      let pin = null;
      if (idxPin >= 0 && cols[idxPin] != null && cols[idxPin].trim() !== '') {
        pin = cols[idxPin].trim().toLowerCase(); // e.g. "center"
      }

      let pinRow = null;
      if (
        idxPinRow >= 0 &&
        cols[idxPinRow] != null &&
        cols[idxPinRow].trim() !== ''
      ) {
        const pr = parseInt(cols[idxPinRow].trim(), 10);
        if (!isNaN(pr) && pr > 0) pinRow = pr;
      }

      if (!name && !link) continue;

      items.push({
        name: name,
        link: link,
        span: span,
        pin: pin,
        pinRow: pinRow
      });
    }

    return items;
  }

  // ---------------------------
  // Utility: image dimensions (for placeholder aspect ratio)
  // ---------------------------

  function getImageDimensions(src) {
    return new Promise(resolve => {
      if (!src) {
        resolve({ width: 1, height: 1 });
        return;
      }
      const img = new Image();
      img.onload = function () {
        resolve({ width: img.width || 1, height: img.height || 1 });
      };
      img.onerror = function () {
        resolve({ width: 1, height: 1 });
      };
      img.src = src;
    });
  }

  // ---------------------------
  // Masonry row sizing helpers
  // ---------------------------

  function cssLengthToPx(lengthStr) {
    if (!lengthStr) return 1;
    const match = lengthStr.trim().match(/([\d.]+)\s*([a-z%]+)/i);
    if (!match) return parseFloat(lengthStr) || 1;

    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();

    switch (unit) {
      case 'px':
        return value;
      case 'pt':
        // CSS: 1pt = 1/72in, 1px = 1/96in -> 1pt = 96/72 px
        return value * (96 / 72);
      default:
        return value;
    }
  }

  function resizeMasonryItem(item) {
    const grid = document.querySelector('.gallery.masonry');
    if (!grid || !item) return;

    const rowSize =
      window.getComputedStyle(grid).getPropertyValue('grid-auto-rows') || '1px';

    const rowHeight = cssLengthToPx(rowSize) || 1;

    // Measure the entire brick (including padding and frame)
    const contentHeight = item.getBoundingClientRect().height;
    const rowSpan = Math.ceil(contentHeight / rowHeight) || 1;

    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllMasonryItems() {
    const allItems = document.getElementsByClassName('masonry-brick');
    console.log('Resizing', allItems.length, 'masonry items');
    performance.mark('resize-start');
    const startResize = performance.now();

    const grid = document.querySelector('.gallery.masonry');
    if (!grid) return;
    const rowSize = window.getComputedStyle(grid).getPropertyValue('grid-auto-rows') || '1px';
    const rowHeight = cssLengthToPx(rowSize) || 1;

    // Batch all getBoundingClientRect() reads first
    const heights = [];
    for (let i = 0; i < allItems.length; i++) {
      heights.push(allItems[i].getBoundingClientRect().height);
    }

    // Then apply gridRowEnd styles in a separate loop
    for (let i = 0; i < allItems.length; i++) {
      const item = allItems[i];
      const contentHeight = heights[i];
      const rowSpan = Math.ceil(contentHeight / rowHeight) || 1;
      item.style.gridRowEnd = 'span ' + rowSpan;
    }

    const endResize = performance.now();
    performance.mark('resize-end');
    performance.measure('resize-duration', 'resize-start', 'resize-end');
    console.log('Resize took', endResize - startResize, 'ms');
  }

  // ---------------------------
  // Gallery creation
  // ---------------------------

  async function createGallery(items) {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    // Load dimensions in parallel for aspect ratio placeholders
    console.log('Starting dimension loading for', items.length, 'items');
    const startDim = performance.now();
    const dimensionPromises = items.map(item => getImageDimensions(item.link));
    const dimensionsList = await Promise.all(dimensionPromises);
    const endDim = performance.now();
    console.log('Dimension loading took', endDim - startDim, 'ms');

    // Pinned items first so their grid cells are reserved
    const pinned = [];
    const normal = [];

    for (let i = 0; i < items.length; i++) {
      const base = items[i];
      const dims = dimensionsList[i] || { width: 1, height: 1 };
      const merged = {
        name: base.name,
        link: base.link,
        span: base.span,
        pin: base.pin,
        pinRow: base.pinRow,
        width: dims.width,
        height: dims.height
      };
      if (merged.pin) pinned.push(merged);
      else normal.push(merged);
    }

    const allOrdered = pinned.concat(normal);

    // Cache current column count once
    const initialCols = TetrisGridCore.getCurrentColumnCount();

    // Create DOM elements
    console.log('Starting DOM creation for', allOrdered.length, 'items');
    performance.mark('dom-creation-start');
    const startDom = performance.now();
    for (let i = 0; i < allOrdered.length; i++) {
      const poster = allOrdered[i];
      const aspectRatio = (poster.height / poster.width) * 100 || 100;

      const posterContainer = document.createElement('div');
      posterContainer.className = 'poster-container masonry-brick';

      // Dataset for pinned info (used on resize / orientation change)
      if (poster.pin) {
        posterContainer.dataset.pin = poster.pin;
        posterContainer.dataset.span = String(poster.span || 1);
        if (poster.pinRow) {
          posterContainer.dataset.pinRow = String(poster.pinRow);
        }
      } else {
        // NON-PINNED: apply span horizontally right away
        const effectiveSpan = TetrisGridCore.computeSpan(
          poster.span || 1,
          initialCols
        );
        if (effectiveSpan > 1) {
          posterContainer.style.gridColumnEnd = 'span ' + effectiveSpan;
          posterContainer.classList.add('span-' + effectiveSpan);
        }
      }

      const linkEl = document.createElement('a');

      // Special case kept from your earlier logic
      if (poster.name === 'render') {
        linkEl.href = '/render.html';
        linkEl.setAttribute('aria-label', 'Go to render');
      } else {
        linkEl.href = '/pin/' + Math.floor(Math.random() * 1e16) + '/';
        linkEl.setAttribute('aria-label', 'Página do Pin ' + poster.name);
      }
      linkEl.tabIndex = 0;

      const posterDiv = document.createElement('div');
      posterDiv.className = 'poster masonry-content';
      posterDiv.style.position = 'relative';

      const placeholder = document.createElement('div');
      placeholder.style.paddingBottom = aspectRatio + '%';
      posterDiv.appendChild(placeholder);

      const img = document.createElement('img');
      img.src = poster.link;
      img.alt =
        poster.name === 'render'
          ? 'Link to render'
          : 'Contém uma imagem de: ' + poster.name;
      img.loading = 'lazy';
      img.style.position = 'absolute';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';

      img.addEventListener('load', function () {
        resizeMasonryItem(posterContainer);
      });

      posterDiv.appendChild(img);
      linkEl.appendChild(posterDiv);
      posterContainer.appendChild(linkEl);
      gallery.appendChild(posterContainer);

      // Add hover performance logging
      posterContainer.addEventListener('mouseenter', () => {
        performance.mark('hover-start-' + i);
      });
      posterContainer.addEventListener('mouseleave', () => {
        performance.mark('hover-end-' + i);
        performance.measure('hover-duration-' + i, 'hover-start-' + i, 'hover-end-' + i);
      });
    }
    const endDom = performance.now();
    console.log('DOM creation took', endDom - startDom, 'ms');

    // Initial layout after all items added
    performance.mark('dom-creation-end');
    performance.measure('dom-creation-duration', 'dom-creation-start', 'dom-creation-end');
    handleResizeOrLoad();
  }

  // ---------------------------
  // Global resize / load handling
  // ---------------------------

  function handleResizeOrLoad() {
    console.log('Handling resize or load');
    performance.mark('handle-resize-start');
    const grid = document.querySelector('.gallery.masonry');
    if (!grid) return;

    // Apply columns and get current count
    const cols = TetrisGridCore.applyColumnsToGrid(grid);

    // Recompute pinned placement for current column count
    const pinnedItems = document.querySelectorAll('.masonry-brick[data-pin]');
    pinnedItems.forEach(function (item) {
      const pin = item.dataset.pin;
      const requestedSpan = parseInt(item.dataset.span || '1', 10) || 1;
      const span = TetrisGridCore.computeSpan(requestedSpan, cols);
      const rowStart = parseInt(item.dataset.pinRow || '2', 10) || 1;

      if (pin === 'center') {
        const colStart = TetrisGridCore.computeCenterColStart(span, cols);
        // Example:
        //   cols=6, span=2 → colStart=3 → "3_2" (3–4)
        //   cols=2, span=2 → colStart=1 → "1_2" (1–2)
        item.style.gridColumn = colStart + ' / span ' + span;
        item.style.gridRowStart = String(rowStart);
      } else {
        // Fallback: just respect span horizontally
        item.style.gridColumnEnd = 'span ' + span;
      }
    });

    // Size all bricks vertically for masonry effect
    resizeAllMasonryItems();
    performance.mark('handle-resize-end');
    performance.measure('handle-resize-duration', 'handle-resize-start', 'handle-resize-end');
  }

  window.addEventListener('load', handleResizeOrLoad);
  window.addEventListener('resize', handleResizeOrLoad);

  // ---------------------------
  // Bootstrap: load CSV → gallery
  // ---------------------------

  // posters.csv should be in /public so it's available at /posters.csv in dev + build
  fetch('/posters.csv')
    .then(function (response) {
      return response.text();
    })
    .then(function (csvText) {
      const items = parseCSV(csvText);
      console.log('Parsed items count:', items.length);
      return createGallery(items);
    })
    .catch(function (err) {
      console.error('Error loading posters.csv:', err);
    });

})();
