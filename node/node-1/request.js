const request = require('request');
const hostname = '127.0.0.1';
const port = 3000;

let reqCount = parseInt(process.argv[2], radix = 10);
let reqType = process.argv[3];

function get(url) {
  return new Promise(resolve => {
    let startTime = Date.now();
    request(url, (error, response, body) => {
      if (error) {
        throw error;
      }
      resolve(`Status ${response.statusCode}. Received "${body}" for ${Date.now() - startTime} ms`)
    })
  });
}

if (isNaN(reqCount) || reqCount < 1) {
  throw ('Первым аргументом необходимо передать количество запросов, число >= "1"');
}

if (reqType === 'a') {
  const req = [];

  for (let i = 0; i < reqCount; i++) {
    req.push(get(`http://${hostname}:${port}/${i + 1}`))
  }

  Promise.all(req)
    .then(results => {
      results.forEach(result => console.log(result))
    })
    .catch(error => {
      console.error(error)
    })
} else if (reqType === 'c') {
  const urls = [];

  for (let i = 0; i < reqCount; i++) {
    urls.push(`http://${hostname}:${port}/${i + 1}`)
  }

  urls.reduce((memo, url) => {
    return memo
      .then(() => get(url)
        .then(result => console.log(result))
        .catch(error => {
          console.error(error)
        })
      )
  }, Promise.resolve())
} else {
  throw ('Вторым аргументом необходимо передать тип запросов: "a" - параллельный или "c" - последовательный');
}
