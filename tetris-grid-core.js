// tetris-grid-core.js
// Core grid calculation for modular "Tetris" style pages.

(function (global) {
  'use strict';

  const BASE_DESKTOP_WIDTH = 1520;   // px – your "perfect" desktop viewport
  const BASE_DESKTOP_COLUMNS = 6;    // 6 columns at 1520px
  const MIN_COLUMNS = 2;
  const MAX_COLUMNS = 8;             // you said: 2,4,6,8

  /**
   * Compute how many columns we want for a given viewport.
   * Always returns an EVEN number: 2,4,6,8.
   */
  function computeColumnCount(viewportWidth, viewportHeight) {
    const vw = viewportWidth || global.innerWidth || 1024;
    const vh = viewportHeight || global.innerHeight || 768;

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

    // Snap to nearest even
    let evenCols = Math.round(idealCols / 2) * 2;
    if (evenCols < MIN_COLUMNS) evenCols = MIN_COLUMNS;
    if (evenCols > MAX_COLUMNS) evenCols = MAX_COLUMNS;

    return evenCols;
  }

  /**
   * Convenience: compute from current window.
   */
  function getCurrentColumnCount() {
    return computeColumnCount(
      global.innerWidth || document.documentElement.clientWidth,
      global.innerHeight || document.documentElement.clientHeight
    );
  }

  /**
   * Normalize a requested span based on current column count.
   * Right now we only support 1 or 2, but it's future-proof.
   */
  function computeSpan(requestedSpan, colCount) {
    const cols = colCount || getCurrentColumnCount();
    let span = parseInt(requestedSpan, 10);

    if (isNaN(span) || span < 1) span = 1;

    // Don't let span exceed total columns
    if (span > cols) span = cols;

    // If you ever want to demote span on tiny grids, this is where you'd do it.
    return span;
  }

  /**
   * Apply column count to a grid element (CSS Grid).
   */
  function applyColumnsToGrid(gridElement) {
    if (!gridElement) return;
    const cols = getCurrentColumnCount();
    gridElement.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    return cols;
  }

  global.TetrisGridCore = {
    computeColumnCount,
    getCurrentColumnCount,
    computeSpan,
    applyColumnsToGrid,
  };
})(window);
