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

  // Get information about file
  const allStats = Array(filenames.length).fill(null);
  for (let filename of filenames) {
    const index = filenames.indexOf(filename);
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      allStats[index] = stats;

      const ready = allStats.every((stats) => {
        return stats;
      });

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
});
