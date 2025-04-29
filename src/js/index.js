import '../styles/main.css';

import { greet } from './modules/utils.js';
console.log(greet('Starter!'));

const greetBabel = (name) => {
  console.log(`Hello, ${name}!`);
};

greetBabel('World');
