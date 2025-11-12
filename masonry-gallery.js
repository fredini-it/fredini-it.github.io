// masonry-gallery.js
// Masonry gallery built on top of TetrisGridCore.
// - Uses CSV `ar` (aspect ratio = width/height) to avoid image probing
// - Lazy-constructs <img> only when visible via IntersectionObserver
// - Throttles resize work
// - Contains off-screen work for paint/size

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
    const idxAr = header.indexOf('ar');       // NEW: width/height (e.g. 1.7778 for 16:9; 0.5625 for 9:16)
    const idxSpan = header.indexOf('span');     // optional
    const idxPin = header.indexOf('pin');      // optional ("center")
    const idxPinRow = header.indexOf('pinrow');   // optional rowStart for pinned

    const items = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cols = line.split(',');
      const name = idxName >= 0 && cols[idxName] != null ? cols[idxName].trim() : '';
      const link = idxLink >= 0 && cols[idxLink] != null ? cols[idxLink].trim() : '';

      let ar = null;
      if (idxAr >= 0 && cols[idxAr] != null && cols[idxAr].trim() !== '') {
        const a = parseFloat(cols[idxAr].trim());
        if (!isNaN(a) && a > 0.01 && a < 100) ar = a; // ar = W/H, sane bounds
      }

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
      if (idxPinRow >= 0 && cols[idxPinRow] != null && cols[idxPinRow].trim() !== '') {
        const pr = parseInt(cols[idxPinRow].trim(), 10);
        if (!isNaN(pr) && pr > 0) pinRow = pr;
      }

      if (!name && !link) continue;

      items.push({ name, link, ar, span, pin, pinRow });
    }

    return items;
  }

  // ---------------------------
  // Utility: image dimensions (fallback only)
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
    for (let i = 0; i < allItems.length; i++) {
      resizeMasonryItem(allItems[i]);
    }
  }

  // ---------------------------
  // Lazy construction of <img> with IntersectionObserver
  // ---------------------------

  let io = null;
  function getObserver() {
    if (io) return io;
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const container = entry.target;
            const data = container.__posterData;
            if (data) {
              ensureImage(container, data);
            }
            io.unobserve(container);
          }
        }
      },
      {
        // Start loading a bit before it becomes visible
        rootMargin: '256px 0px 512px 0px',
        threshold: 0.01
      }
    );
    return io;
  }

  function ensureImage(posterContainer, poster) {
    if (posterContainer.__imgCreated) return;

    const posterDiv = posterContainer.querySelector('.poster.masonry-content');
    if (!posterDiv) return;

    const img = document.createElement('img');
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.alt = poster.name === 'render'
      ? 'Link to render'
      : 'Contém uma imagem de: ' + poster.name;

    // We only set src NOW (no preloads/probes before this moment)
    img.src = poster.link;

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
    posterContainer.__imgCreated = true;
  }

  // ---------------------------
  // Gallery creation
  // ---------------------------

  async function createGallery(items) {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    // Prepare observer once
    const observer = getObserver();

    // Fallback: for rows missing AR we *can* probe (optional).
    // NOTE: To avoid any probes, leave this disabled or only probe a tiny subset.
    const needProbe = items.filter(it => !it.ar);
    let probedMap = new Map();
    if (needProbe.length > 0) {
      // If you truly want zero probes, comment out this block.
      const uniqueToProbe = Array.from(new Set(needProbe.map(it => it.link)));
      const dimsList = await Promise.all(uniqueToProbe.map(src => getImageDimensions(src)));
      for (let i = 0; i < uniqueToProbe.length; i++) {
        const src = uniqueToProbe[i];
        const dims = dimsList[i] || { width: 1, height: 1 };
        probedMap.set(src, dims);
      }
    }

    // Pinned items first so their grid cells are reserved
    const pinned = [];
    const normal = [];

    for (let i = 0; i < items.length; i++) {
      const base = items[i];

      // Decide aspect ratio
      let ar = base.ar; // W/H
      if (!ar) {
        // Fallback from probe if available
        const d = probedMap.get(base.link);
        if (d && d.height > 0) {
          ar = d.width / d.height; // W/H
        }
      }
      if (!ar || !(ar > 0)) ar = 1; // final fallback

      const merged = {
        name: base.name,
        link: base.link,
        span: base.span,
        pin: base.pin,
        pinRow: base.pinRow,
        ar: ar
      };
      if (merged.pin) pinned.push(merged);
      else normal.push(merged);
    }

    const allOrdered = pinned.concat(normal);

    // Cache current column count once
    const initialCols = TetrisGridCore.getCurrentColumnCount();

    // Create DOM elements
    for (let i = 0; i < allOrdered.length; i++) {
      const poster = allOrdered[i];
      const ar = poster.ar; // W/H

      const posterContainer = document.createElement('div');
      posterContainer.className = 'poster-container masonry-brick';

      // Containment for off-screen paint/layout
      posterContainer.style.contain = 'content'; // size+layout+paint composite
      posterContainer.style.willChange = 'contents';

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

      // CSS aspect-ratio expects width/height.
      // Given ar = width/height, set aspectRatio = ar,
      // and for fallback set padding-bottom = (100 / ar)%.
      posterDiv.style.aspectRatio = ar.toFixed(6); // e.g. 1.777778 for 16:9
      const placeholder = document.createElement('div');
      placeholder.style.paddingBottom = (100 / ar) + '%';
      posterDiv.appendChild(placeholder);

      // DO NOT create <img> yet — lazy-construct only when visible.
      posterContainer.__posterData = poster;

      linkEl.appendChild(posterDiv);
      posterContainer.appendChild(linkEl);
      gallery.appendChild(posterContainer);

      // Observe for visibility
      observer.observe(posterContainer);
    }

    // Initial layout after all items added
    handleResizeOrLoad();
  }

  // ---------------------------
  // Global resize / load handling (throttled)
  // ---------------------------

  let resizeRAF = 0;
  let resizeTimer = 0;

  function handleResizeOrLoad() {
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
        item.style.gridColumn = colStart + ' / span ' + span;
        item.style.gridRowStart = String(rowStart);
      } else {
        item.style.gridColumnEnd = 'span ' + span;
      }
    });

    // Size all bricks vertically for masonry effect
    resizeAllMasonryItems();
  }

  function scheduleResize() {
    if (resizeRAF) return;
    resizeRAF = requestAnimationFrame(() => {
      resizeRAF = 0;
      clearTimeout(resizeTimer);
      // Additional safety debounce to coalesce rapid resizes/orientation changes
      resizeTimer = setTimeout(handleResizeOrLoad, 60);
    });
  }

  window.addEventListener('load', handleResizeOrLoad, { passive: true });
  window.addEventListener('resize', scheduleResize, { passive: true });

  // ---------------------------
  // Bootstrap: load CSV → gallery
  // ---------------------------

  // posters.csv should be in /public so it's available at /posters.csv in dev + build
  fetch('/posters.csv', { cache: 'no-store' })
    .then(function (response) { return response.text(); })
    .then(function (csvText) { const items = parseCSV(csvText); return createGallery(items); })
    .catch(function (err) { console.error('Error loading posters.csv:', err); });

})();