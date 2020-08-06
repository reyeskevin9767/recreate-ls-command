#!/usr/bin/env node
//* Use Node to execute file
// Developer Reminder -> npm link -> link file

//* File System From Node
const fs = require('fs');

//* Read Current Directory
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
  }
  console.log(filenames);
});
