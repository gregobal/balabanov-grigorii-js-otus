const fs = require('fs');
const path = require('path');

function setPosixSep(fsObjPath) {
  return fsObjPath.split(path.sep).join('/')
}

function getFsObjects(fsObjPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(fsObjPath, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function isDirectory(fsObjPath) {
  return new Promise((resolve, reject) => {
    fs.stat(fsObjPath, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.isDirectory());
      }
    });
  });
}

async function getFsTree(inRoot, treeObjects = {files: [], dirs: []}) {
  try {
    let root = path.normalize(inRoot);

    if (treeObjects.dirs.length === 0 && root !== '.') {
      treeObjects.dirs.push(setPosixSep(root));
    }

    let fsObjects = await getFsObjects(root);

    for (let fsObj of fsObjects) {
      let objPath = path.join(root, fsObj);

      if (await isDirectory(objPath)) {
        treeObjects.dirs.push(setPosixSep(objPath));

        await getFsTree(objPath, treeObjects);

      } else {
        treeObjects.files.push(setPosixSep(objPath))
      }
    }

  } catch (err) {
    throw err;
  }
  return treeObjects;
}

module.exports = getFsTree;
