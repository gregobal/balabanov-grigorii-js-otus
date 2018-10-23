// Написать функцию sum, которая может быть исполнена любое количество раз. Если она исполнена без аргументов,
//   то возвращает значение суммы всех переданных до этого значений.
//
// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

'use strict';

function sum(arg) {
  return (res) => res ? sum(res + arg) : arg;
}

console.log(sum(undefined)()); // undefined
console.log(sum(1)()); // 1
console.log(sum(1)(2)(3)(4)());  // 10
console.log(sum(0)(5)(3)(8)(-2)()); // 14
console.log(sum(1)(1)(1)(1)(1)(1)(1)()); // 7
