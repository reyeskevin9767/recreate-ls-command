#!/usr/bin/env node
//* ^-- Node to execute file
// Developer Reminder -> npm link -> link filename

//* File System From Node
const fs = require('fs');
const util = require('util');
const path = require('path');

const chalk = require('chalk');

// Method #2 with Promise
// const lstat = util.promisify(fs.lstat);

//* Method #3 with Promise
const { lstat } = fs.promises;

//* Sets directory to argument after node-ls or current directory
const targetDir = process.argv[2] || process.cwd();

//* Read Current Directory
fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  // Get information about file and determine type with lstat
  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });

  // Wait for all the promises to be finish
  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    // stats does not have info about file, need index
    const index = allStats.indexOf(stats);

    // Color each type of file
    if (stats.isFile()) {
      if (!imageFile(filenames, index)) {
        console.log(chalk.yellow(filenames[index]));
      } else {
        console.log(chalk.green(filenames[index]));
      }
    } else {
      console.log(chalk.red(filenames[index]));
    }
  }
});

//* Check if file is an image
function imageFile(filenames, index) {
  return (
    filenames[index].includes('.jpg') ||
    filenames[index].includes('.png') ||
    filenames[index].includes('.gif')
  );
}
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
