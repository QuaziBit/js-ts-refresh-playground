import logging from '../components/loggs.js';
import buttonClick from '../components/buttonClick.js';
const demo_1 = (id) => {
    logging('demo_01 initialized.', 'info');
    const handler = () => {
        alert('Click me button works!');
    };
    buttonClick(id, handler);
};
export default demo_1;
