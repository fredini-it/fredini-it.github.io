// tetris-grid-core.js
// Core grid calculation for modular "Tetris" style pages.

(function (global) {
  'use strict';

  const BASE_DESKTOP_WIDTH = 1520;   // px – your "perfect" desktop viewport
  const BASE_DESKTOP_COLUMNS = 6;    // 6 columns at 1520px
  const MIN_COLUMNS = 2;
  const MAX_COLUMNS = 8;             // allowed: 2,4,6,8

  /**
   * Compute how many columns we want for a given viewport.
   * Always returns an EVEN number: 2,4,6,8.
   */
  function computeColumnCount(viewportWidth, viewportHeight) {
    const doc = global.document;
    const vw =
      viewportWidth ||
      (global.innerWidth ||
        (doc && doc.documentElement && doc.documentElement.clientWidth) ||
        1024);
    const vh =
      viewportHeight ||
      (global.innerHeight ||
        (doc && doc.documentElement && doc.documentElement.clientHeight) ||
        768);

    const isPortrait = vh >= vw;

    // Small portrait phones → lock to 2 columns
    if (isPortrait && vw <= 600) {
      return 2;
    }

    // Base: scale from desktop baseline
    let idealCols = (vw / BASE_DESKTOP_WIDTH) * BASE_DESKTOP_COLUMNS;
    idealCols = Math.round(idealCols);

    if (idealCols < MIN_COLUMNS) idealCols = MIN_COLUMNS;
    if (idealCols > MAX_COLUMNS) idealCols = MAX_COLUMNS;

    // Snap to nearest even number
    let evenCols = Math.round(idealCols / 2) * 2;
    if (evenCols < MIN_COLUMNS) evenCols = MIN_COLUMNS;
    if (evenCols > MAX_COLUMNS) evenCols = MAX_COLUMNS;

    return evenCols;
  }

  /**
   * Convenience: compute based on current window size.
   */
  function getCurrentColumnCount() {
    const doc = global.document;
    const vw =
      global.innerWidth ||
      (doc && doc.documentElement && doc.documentElement.clientWidth);
    const vh =
      global.innerHeight ||
      (doc && doc.documentElement && doc.documentElement.clientHeight);
    return computeColumnCount(vw, vh);
  }

  /**
   * Normalize a requested span based on current column count.
   * Ensures 1 <= span <= cols.
   */
  function computeSpan(requestedSpan, colCount) {
    const cols = colCount || getCurrentColumnCount();
    let span = parseInt(requestedSpan, 10);
    if (isNaN(span) || span < 1) span = 1;
    if (span > cols) span = cols;
    return span;
  }

  /**
   * Apply column count to a CSS Grid element.
   */
  function applyColumnsToGrid(gridElement) {
    const cols = getCurrentColumnCount();
    if (gridElement) {
      gridElement.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    }
    return cols;
  }

  /**
   * Compute the starting column for a centered block of given colSpan.
   * Designed for even column counts and small spans (e.g. span=2).
   *
   * Example (span=2):
   *   cols=2 → colStart=1 (1–2)
   *   cols=4 → colStart=2 (2–3)
   *   cols=6 → colStart=3 (3–4)
   *   cols=8 → colStart=4 (4–5)
   */
  function computeCenterColStart(colSpan, cols) {
    const C = cols || getCurrentColumnCount();
    let span = parseInt(colSpan, 10);
    if (isNaN(span) || span < 1) span = 1;

    // If the span fills or exceeds the grid, start at 1
    if (span >= C) return 1;

    // Special-case: our main scenario → even C, span=2
    if (C % 2 === 0 && span === 2) {
      if (C === 2) return 1; // pair (1–2)
      return C / 2;          // e.g. 4→2, 6→3, 8→4
    }

    // Generic "center-ish" fallback
    const start = Math.floor((C - span) / 2) + 1;
    return start < 1 ? 1 : start;
  }

  // Expose API
  global.TetrisGridCore = {
    computeColumnCount,
    getCurrentColumnCount,
    computeSpan,
    applyColumnsToGrid,
    computeCenterColStart
  };

})(window);
