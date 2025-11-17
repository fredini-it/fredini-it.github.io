// cards-grid.js
// Card-based screen using TetrisGridCore + masonry-style row sizing.

(function () {
  'use strict';

  // ---------------------------
  // Helpers: fetch & parse JSON
  // ---------------------------

  function loadCardsJson(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error('Failed to load ' + url + ' (' + res.status + ')');
      return res.json();
    });
  }

  // ---------------------------
  // Masonry sizing helpers
  // ---------------------------

  function cssLengthToPx(lengthStr) {
    if (!lengthStr) return 1;
    var match = lengthStr.trim().match(/([\d.]+)\s*([a-z%]+)/i);
    if (!match) return parseFloat(lengthStr) || 1;

    var value = parseFloat(match[1]);
    var unit = match[2].toLowerCase();

    switch (unit) {
      case 'px':
        return value;
      case 'pt':
        // 1pt = 96/72 px ≈ 1.3333
        return value * (96 / 72);
      default:
        return value;
    }
  }

  function resizeMasonryItem(item) {
    var grid = document.querySelector('#cards-grid.gallery.masonry');
    if (!grid || !item) return;

    var rowSize =
      window.getComputedStyle(grid).getPropertyValue('grid-auto-rows') || '1px';

    var rowHeight = cssLengthToPx(rowSize) || 1;
    var contentHeight = item.getBoundingClientRect().height;
    var rowSpan = Math.ceil(contentHeight / rowHeight) || 1;

    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllMasonryItems() {
    var allItems = document.querySelectorAll('#cards-grid .masonry-brick');
    allItems.forEach(resizeMasonryItem);
  }

  // ---------------------------
  // Create one card module DOM
  // ---------------------------

  function createCardElement(cardData) {
    var grid = document.getElementById('cards-grid');
    if (!grid) return null;

    var container = document.createElement('div');
    container.className = 'poster-container masonry-brick card-module';

    // Span from data (default 1)
    var cols = TetrisGridCore.getCurrentColumnCount();
    var actualSpan = TetrisGridCore.computeSpan(cardData.span || 1, cols);
    if (actualSpan > 1) {
      container.style.gridColumnEnd = 'span ' + actualSpan;
      container.classList.add('span-' + actualSpan);
    }

    // Inner "poster" area reused as card bbox
    var poster = document.createElement('div');
    poster.className = 'poster';

    var inner = document.createElement('div');
    inner.className = 'poster-inner';

    // Subtitle (optional)
    if (cardData.subtitle) {
      var subtitleEl = document.createElement('p');
      subtitleEl.className = 'card-subtitle';
      subtitleEl.textContent = cardData.subtitle;
      inner.appendChild(subtitleEl);
    }

    // Title
    if (cardData.title) {
      var titleEl = document.createElement('h2');
      titleEl.className = 'card-title';
      titleEl.textContent = cardData.title;
      inner.appendChild(titleEl);
    }

    // Body
    if (cardData.body) {
      var bodyEl = document.createElement('p');
      bodyEl.className = 'card-body';
      bodyEl.textContent = cardData.body;
      inner.appendChild(bodyEl);
    }

    // Tags (optional array)
    if (Array.isArray(cardData.tags) && cardData.tags.length > 0) {
      var footer = document.createElement('div');
      footer.className = 'card-footer';

      cardData.tags.forEach(function (tag) {
        var tagEl = document.createElement('span');
        tagEl.className = 'card-tag';
        tagEl.textContent = tag;
        footer.appendChild(tagEl);
      });

      inner.appendChild(footer);
    }

    // CTA (optional)
    if (cardData.ctaText && cardData.ctaHref) {
      var cta = document.createElement('a');
      cta.className = 'card-cta';
      cta.href = cardData.ctaHref;
      cta.textContent = cardData.ctaText;
      inner.appendChild(cta);
    }

    poster.appendChild(inner);
    container.appendChild(poster);
    grid.appendChild(container);

    // Initial masonry sizing
    resizeMasonryItem(container);

    return container;
  }

  // ---------------------------
  // Build full cards grid
  // ---------------------------

  function createCardsGrid(cards) {
    var grid = document.getElementById('cards-grid');
    if (!grid) return;

    // Apply initial columns
    TetrisGridCore.applyColumnsToGrid(grid);

    // Create modules
    cards.forEach(createCardElement);

    // Final layout pass
    resizeAllMasonryItems();
  }

  // ---------------------------
  // Resize / orientation handling
  // ---------------------------

  function handleResize() {
    var grid = document.getElementById('cards-grid');
    if (!grid) return;
    TetrisGridCore.applyColumnsToGrid(grid);
    resizeAllMasonryItems();
  }

  window.addEventListener('resize', handleResize);

  // ---------------------------
  // Bootstrap: load cards + init
  // ---------------------------

  window.addEventListener('load', function () {
    var grid = document.getElementById('cards-grid');
    if (!grid) return;

    // Make sure columns are correct before we add cards
    TetrisGridCore.applyColumnsToGrid(grid);

    loadCardsJson('/cards.json')
      .then(function (cards) {
        createCardsGrid(cards);
      })
      .catch(function (err) {
        console.error('Error loading cards.json:', err);
      });
  });
})();
