// Functional component that is designed for handling a click for any given button!

import logging from './loggs.js';

const buttonClick = (id: string, handler: () => void): void => {
    const componentName = 'buttonClick';

    const elm = document.getElementById(id);

    if (!elm) {
        logging(`In - ${componentName} - component --> no elemnt found with id: ${id}`, 'info');
        return;
    }

    elm.addEventListener('click', handler);
}

export default buttonClick;
