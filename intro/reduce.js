// Написать функцию promiseReduce, которая получает на вход массив асинхронных функций asyncFunctions, возвращающих
// Promise, reduce функцию и стартовое значение initialValue. promiseReduce поочередно вызывает переданные асинхронные
// функции и выполняет reduce функцию сразу при получении результата до вызова следующей асинхронной функции. reduce
// должна отрабатывать аналогично Array.prototype.reduce, то есть запоминать результат предыдущей итерации

let fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1)
};

let fn2 = () => new Promise(resolve => {
  console.log('fn2');
  setTimeout(() => resolve(2), 1000)
});

function promiseReduce(asyncFunctions, reduce, initialValue) {

  let chain = Promise.resolve();
  let current = initialValue;

  asyncFunctions.forEach(func => {
    chain = chain
      .then(() => func())
      .then(result => {
        current = reduce(result, current);
        return current;
      })
  });

  return chain;
}

promiseReduce(
  [fn1, fn2],
  function (memo, value) {
    console.log('reduce');
    return memo * value
  },
  1
)
  .then(console.log);
