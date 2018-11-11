const request = require('request');
const hostname = '127.0.0.1';
const port = 3000;

let reqCount = parseInt(process.argv[2]);
let reqType = process.argv[3];
let req = [];

let get = (url) => new Promise(resolve => {
  let startTime = Date.now();
  request(url, (error, response, body) => {
    if (error) {
      throw error;
    }
    resolve(`Status ${response.statusCode}. Received "${body}" for ${Date.now() - startTime} ms`)
  })
});

if (isNaN(reqCount) || reqCount < 1) {
  throw ('Первым аргументом необходимо передать количество запросов, число >= "1"');
}

for (let i = 0; i < reqCount; i++) {
  req.push(get(`http://${hostname}:${port}/${i + 1}`))
}

if (reqType === 'a') {
  Promise.all(req)
    .then(results => {
      results.forEach(result => console.log(result));
    });
} else if (reqType === 'c') {
  let chain = Promise.resolve();

  req.forEach(func => {
    chain = chain
      .then(() => func)
      .then(result => {
        console.log(result)
      })
  });
} else {
  throw ('Вторым аргументом необходимо передать тип запросов: "a" - параллельный или "c" - последовательный');
}
