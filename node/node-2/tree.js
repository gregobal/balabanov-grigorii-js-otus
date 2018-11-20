const tree = require('./fs-walk');

let argvParse;
let params = process.argv.slice(2);

if (typeof params[0] === 'undefined') {
  argvParse = '';
}else if (params[0] === '--') {
  argvParse = params[1];
}else {
  argvParse =  params[0];
}

tree(argvParse)
  .then(result => {
    result.files.sort((a, b) => a.split('/').length > b.split('/').length);
    let output = JSON.stringify(result, null, '\r');
    console.log(output);
  })
  .catch(console.error);
