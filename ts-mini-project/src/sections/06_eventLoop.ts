// Using Pattern: Function Object Pattern - Callable Object with Methods - Augmented Function Pattern

/**
 * What Is the JavaScript Event Loop?
 * JavaScript is single-threaded, which means it can only execute one command at a time on the call stack. 
 * But it handles asynchronous tasks (like setTimeout, HTTP requests, etc.) using an internal mechanism called the Event Loop, 
 * which coordinates between:
 * 
 * | Component                        | Description                                                                     |
 * | -------------------------------- | ------------------------------------------------------------------------------- |
 * | Call Stack                       | Where JS runs functions line-by-line (synchronous tasks)                        |
 * | Web APIs                         | Provided by the browser (timers, DOM, fetch, etc.)                              |
 * | Callback Queue (Macrotask Queue) | Where callbacks from `setTimeout`, `setInterval`, etc. go                       |
 * | Microtask Queue                  | Where `Promise.then()`, `queueMicrotask()`, and `MutationObserver` go           |
 * | Event Loop                       | The controller that picks tasks from queues and pushes them onto the call stack |
 * 
 * 
 * How It All Works — Step by Step
 * Synchronous code is pushed to the Call Stack and executed immediately.
 * Async tasks like setTimeout are sent to the Web APIs (by the browser).
 * Once async tasks are finished, their callbacks are queued:
 * Microtasks → Microtask Queue
 * Macrotasks → Callback (Macrotask) Queue
 * Event Loop checks:
 * If the Call Stack is empty, it first handles all Microtasks (in order).
 * Then it handles one Macrotask from the callback queue.
 * This repeats continuously, allowing JavaScript to be responsive and non-blocking.
 * 
 * 
 */

import logging from '../components/loggs.js';
import buttonClick from '../components/buttonClick.js';

const eventLoop = (): void => { }

eventLoop.demo = (): void => {
    logging('\n[Event Loop] Demonstration started\n', 'info');

    logging('\tSynchronous log: Start', 'info');

    setTimeout(() => {
        logging('\t\tsetTimeout callback (macrotask)', 'info');
    });

    Promise.resolve()
    .then(() => {
        logging('\t\tPromise.then() (microtask)', 'info');
    });

    queueMicrotask(() => {
        logging('\t\tqueueMicrotask() (microtask)');
    });

    logging('\tSynchronous log: End', 'info');

    logging('\n[Event Loop] Demonstration complete\n', 'info');
}

eventLoop.run = (id: string): void => {

    const handler = (): void => {
        const subSectionId = parseInt(id.split('-')[1]);

        logging(`eventLoop - subSectionId: ${subSectionId}`, 'info');

        if (subSectionId === 1) eventLoop.demo();
    }

    buttonClick(id, handler);
}

export default eventLoop;


