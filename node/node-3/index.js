const stream = require('stream');

class MyReadable extends stream.Readable {
  constructor(options) {
    super(options);
    console.log('objectMode:', this._readableState.objectMode);
    console.log('highWaterMark:', this._readableState.highWaterMark)
  }

  _read() {
    let randNum = Math.floor(Math.random() * 10);
    this.push(randNum.toString());
  }
}

class MyWritable extends stream.Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString());
    if (typeof callback === 'function') callback();
  }
}

class MyTransform extends stream.Transform {
  _transform(chunk, encodind, callback) {
    setTimeout(() => {
      let randNum = Math.floor(Math.random() * 10);
      this.push(`${chunk}${randNum.toString()}`);
      if (typeof callback === 'function') callback();
    }, 1000);
  }
}

const readable = new MyReadable({objectMode: false, highWaterMark: 1});
const writable = new MyWritable;
const transform = new MyTransform;

readable
  .pipe(transform)
  .pipe(writable);
