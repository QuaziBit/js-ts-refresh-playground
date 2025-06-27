// Functional component that is designed for handling a click for any given button!
import logging from './loggs.js';
const buttonClick = (id, handler) => {
    const componentName = 'demo_1';
    const elm = document.getElementById(id);
    if (!elm) {
        logging(`In - ${componentName} - component --> no elemnt found with id: ${id}`, 'info');
        return;
    }
    elm.addEventListener('click', handler);
};
export default buttonClick;
