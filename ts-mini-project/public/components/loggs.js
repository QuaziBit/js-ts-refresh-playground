// Functional component that is designed for handling loggs!
const logging = (message, level = 'info') => {
    const componentName = 'loggs';
    if (!message) {
        console.warn(`In - ${componentName} - component --> no message provided.`);
        return;
    }
    switch (level) {
        case 'warn':
            console.warn(message);
            break;
        case 'error':
            console.error(message);
            break;
        case 'info':
            console.log(message);
            break;
        default:
            console.log(message);
    }
};
logging.logData = (data) => {
    console.log(data);
};
export default logging;
