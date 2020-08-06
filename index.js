//* File System From Node
const fs = require('fs');

//* Read Current Directory
fs.readdir('.', (err, filenames) => {
  if (err) {
    console.log(err);
  }
});
