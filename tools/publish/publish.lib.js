const glob = require('glob');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
try {
  const folders = glob.sync('./dist/libs/**/package.json');
  folders.forEach((pathPackage) => {
    const folderPath = path.join(pathPackage, '../');
    if (fs.existsSync(pathPackage)) {
      exec(
        'npm publish',
        { cwd: folderPath },
        (error, stdout, stderr) => {
          if (error) {
            console.error(`error: ${error.message}`, error);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`, stderr);
            return;
          }
          console.log(`stdout: ${stdout}`);
        }
      );
    }
  });
} catch (error) {
  console.error('Error occurred:', error);
}
