import fib from './fibbonacci';

import {time} from './watch';
time();

console.time('fibbonacci test');

const fibVariable = fib(-10);
console.log(fibVariable);

console.timeEnd('fibbonacci test')

