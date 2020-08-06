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
  const statPromises = filenames.map((filename) => {
    return lstat(filename);
  });

  // Wait for all the promises to be finish
  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    // stats does not have info about file, need file at index
    const index = allStats.indexOf(stats);

    console.log(filenames[index], stats.isFile());
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
