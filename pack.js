// pack.js
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const folder = './WIP';
const zipName = 'package.zip';
const outSrmod = 'package.srmod';

const zipCommand =
  process.platform === 'win32'
    ? `powershell Compress-Archive -Path '${folder}\\*' -DestinationPath '${zipName}' -Force`
    : `zip -r ${zipName} ${folder}`;

exec(zipCommand, (err) => {
  if (err) {
    console.error('Error creating zip:', err);
    return;
  }

  fs.rename(zipName, outSrmod, (err) => {
    if (err) {
      console.error('Error renaming to .srmod:', err);
      return;
    }

    console.log(`Created: ${outSrmod}`);
  });
});
