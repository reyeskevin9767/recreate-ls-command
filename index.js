#!/usr/bin/env node
//* ^-- Node to execute file
// Developer Reminder -> npm link -> link filename

//* File System From Node
const fs = require('fs');
const util = require('util');

// Method #2 with Promise
// const lstat = util.promisify(fs.lstat);

//* Method #3 with Promise
const { lstat } = fs.promises;

//* Read Current Directory
fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  // Get information about file and determine type
  for (let filename of filenames) {
    const stats = await lstat(filename);
    try {
      console.log(filename, stats.isFile());
    } catch (err) {
      console.log(err);
    }
  }
});

// Method #1 with Promise
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };
