// Main app entry!
import logging from './components/loggs.js';
import demo_01 from './sections/demo_01.js';
import demo_02 from './sections/demo_02.js';
const app = () => {
    logging('App initialized.', 'info');
    // demo_01
    const id = 'click-me';
    //////////////////////////////
    //// RUN PROJECT SECTIONS ////
    //////////////////////////////
    demo_01(id);
    demo_02.clickToSearch('sci-fi', 'search-book-sci-fi');
};
// Ensures DOM is ready before binding events (no race conditions)
document.addEventListener('DOMContentLoaded', app);
export default app;
