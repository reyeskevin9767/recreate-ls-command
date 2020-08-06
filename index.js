#!/usr/bin/env node
//* ^--Use Node to execute file
// Developer Reminder -> npm link -> link filename

//* File System From Node
const fs = require('fs');

//* Read Current Directory
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
  }

  // Get information about file and determine type
  const lstat = (filename) => {
    return new Promise((resolve, reject) => {
      fs.lstat(filename, (err, stats) => {
        if (err) {
          reject(err);
        }

        resolve(stats);
      });
    });
  };
});
