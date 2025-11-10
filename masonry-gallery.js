// masonry-gallery.js
// Masonry gallery built on top of TetrisGridCore.
// Modules are "poster" cards now, but the same pattern can work for any card content.

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
    const idxSpan = header.indexOf('span'); // optional third column

    const items = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cols = line.split(',');
      const name = (idxName >= 0 && cols[idxName] != null) ? cols[idxName].trim() : '';
      const link = (idxLink >= 0 && cols[idxLink] != null) ? cols[idxLink].trim() : '';
      let span = 1;
      if (idxSpan >= 0 && cols[idxSpan] != null && cols[idxSpan].trim() !== '') {
        span = parseInt(cols[idxSpan].trim(), 10);
        if (isNaN(span) || span < 1) span = 1;
      }

      if (!name && !link) continue;

      items.push({ name, link, span });
    }

    return items;
  }

  // ---------------------------
  // Utility: image dimensions (for placeholder aspect ratio)
  // ---------------------------

  function getImageDimensions(src) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = () => resolve({ width: 1, height: 1 }); // avoid zero
      img.src = src;
    });
  }

  // ---------------------------
  // Masonry row sizing helpers
  // ---------------------------

  // Convert CSS length (e.g. "0.75pt" or "1px") to px
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
        // CSS: 1pt = 1/72in, 1px = 1/96in → 1pt = 96/72 px ≈ 1.3333
        return value * (96 / 72);
      default:
        return value; // fallback: treat as px-like
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
    for (let i = 0; i < allItems.length; i++) {
      resizeMasonryItem(allItems[i]);
    }
  }

  // ---------------------------
  // Gallery creation
  // ---------------------------

  async function createGallery(items) {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    // Load dimensions in parallel for aspect ratio placeholders
    const dimensionPromises = items.map(item => getImageDimensions(item.link));
    const dimensionsList = await Promise.all(dimensionPromises);

    for (let i = 0; i < items.length; i++) {
      const poster = items[i];
      const dims = dimensionsList[i];
      const aspectRatio = (dims.height / dims.width) * 100 || 100;

      const posterContainer = document.createElement('div');
      posterContainer.className = 'poster-container masonry-brick';

      // Column-span from CSV (default 1)
      const cols = TetrisGridCore.getCurrentColumnCount();
      const actualSpan = TetrisGridCore.computeSpan(poster.span, cols);
      if (actualSpan > 1) {
        posterContainer.style.gridColumnEnd = 'span ' + actualSpan;
        posterContainer.classList.add('span-' + actualSpan);
      }

      const link = document.createElement('a');

      // Special case for "render" if you still want that behaviour
      if (poster.name === 'render') {
        link.href = '/render.html';
        link.setAttribute('aria-label', 'Go to render');
      } else {
        // Random-ish pin URL
        link.href = '/pin/' + Math.floor(Math.random() * 1e16) + '/';
        link.setAttribute('aria-label', 'Página do Pin ' + poster.name);
      }
      link.tabIndex = 0;

      const posterDiv = document.createElement('div');
      posterDiv.className = 'poster masonry-content';
      posterDiv.style.position = 'relative';

      // Aspect-ratio placeholder (so layout doesn't jump while image loads)
      const placeholder = document.createElement('div');
      placeholder.style.paddingBottom = aspectRatio + '%';
      posterDiv.appendChild(placeholder);

      // Actual image
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

      // When image finishes loading, resize its masonry brick
      img.addEventListener('load', function () {
        resizeMasonryItem(posterContainer);
      });

      posterDiv.appendChild(img);
      link.appendChild(posterDiv);
      posterContainer.appendChild(link);
      gallery.appendChild(posterContainer);
    }

    // Initial layout
    TetrisGridCore.applyColumnsToGrid(gallery);
    resizeAllMasonryItems();
  }

  // ---------------------------
  // Global load / resize handling
  // ---------------------------

  function handleResizeOrLoad() {
    const grid = document.querySelector('.gallery.masonry');
    if (!grid) return;
    TetrisGridCore.applyColumnsToGrid(grid);
    resizeAllMasonryItems();
  }

  window.addEventListener('load', handleResizeOrLoad);
  window.addEventListener('resize', handleResizeOrLoad);

  // ---------------------------
  // Bootstrap: load CSV → gallery
  // ---------------------------

  fetch('posters.csv')
    .then(response => response.text())
    .then(csvText => {
      const items = parseCSV(csvText);
      return createGallery(items);
    })
    .catch(err => {
      console.error('Error loading posters.csv:', err);
    });
})();
