import { WorldCore } from './src/WorldCore.js';
import { MaterialFactory } from './src/components/materialFactory.js';

async function main() {
  const container = document.querySelector('#scene-container');
  if (!container) {
    console.error('Error: #scene-container not found in the DOM');
    return;
  }
  MaterialFactory.materialCache.clear(); // Clear cache to ensure fresh materials
  const world = new WorldCore(container);
  await world.init();
  world.loop.setupInteractionListeners();
  world.start();
}

document.addEventListener('DOMContentLoaded', () => {
  main().catch((err) => {
    console.error(err);
  });
});