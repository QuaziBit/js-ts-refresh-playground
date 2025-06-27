// Main app entry!

import logging from './components/loggs.js';
import coreConcepts from './sections/01_coreConcepts.js';
import eventLoop from './sections/06_eventLoop.js';
// ...
import buttonEvent from './sections/buttonEvent.js';
// ...
import apiDemo from './sections/apiDemo.js';
// ...
import puzzles from './sections/puzzles_1000.js';

const app = (): void => {
  logging('App initialized.', 'info');


  //////////////////////////////
  //// RUN PROJECT SECTIONS ////
  //////////////////////////////

  coreConcepts.runSubSection('coreConcepts-1');
  coreConcepts.runSubSection('coreConcepts-2');
  coreConcepts.runSubSection('coreConcepts-3');
  coreConcepts.runSubSection('coreConcepts-4');

  eventLoop.run('eventLoop-1');

  const id = 'click-me';
  buttonEvent(id);

  apiDemo.clickToSearch('sci-fi', 'search-book-sci-fi');

  // programming puzzels
  puzzles.runPuzzles('puzzle-1');
}

// Ensures DOM is ready before binding events (no race conditions)
document.addEventListener('DOMContentLoaded', app);

export default app;