// Using Pattern: Function Object Pattern - Callable Object with Methods - Augmented Function Pattern

import logging from '../components/loggs.js';
import buttonClick from '../components/buttonClick.js';

const buttonEvent = (id: string) : void => {
  logging('[demo_01] init', 'info');
  
  const handler = () : void => {
    alert('Click me button works!');
  }
  
  buttonClick(id, handler);
}

export default buttonEvent;