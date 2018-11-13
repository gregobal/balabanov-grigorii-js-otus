const request = require('request');
const hostname = '127.0.0.1';
const port = 3000;

const reqCount = parseInt(process.argv[2], 10);
const reqType = process.argv[3];

function get(url) {
  return new Promise(resolve => {
    const startTime = Date.now();
    request(url, (error, response, body) => {
      if (error) {
        throw error;
      }
      resolve(`Status ${response.statusCode}. Received "${body}" for ${Date.now() - startTime} ms`)
    })
  });
}

function fillUrlsArr() {
  const urls = [];

  for (let i = 0; i < reqCount; i++) {
    urls.push(`http://${hostname}:${port}/${i + 1}`)
  }

  return urls;
}

if (isNaN(reqCount) || reqCount < 1) {
  throw ('Первым аргументом необходимо передать количество запросов, число >= "1"');
}

if (reqType === 'a') {
  Promise.all(fillUrlsArr().map(url => get(url)))
    .then(results => {
      results.forEach(result => console.log(result))
    })
    .catch(console.error)

} else if (reqType === 'c') {
  fillUrlsArr().reduce((memo, url) => {
    return memo
      .then(() => get(url)
        .then(console.log)
        .catch(console.error)
      )
  }, Promise.resolve())

} else {
  throw ('Вторым аргументом необходимо передать тип запросов: "a" - параллельный или "c" - последовательный');
}
