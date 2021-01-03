const glob = require('glob');
const parenPackage = require('../../package.json');
const fs = require('fs');

try {
  const version = parenPackage.version;
  console.log('Update version of libs: ' + version);
  const files = glob.sync('./dist/libs/**/package.json');
  files.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileParsed = JSON.parse(fileContent);
    fileParsed.version = version;
    console.log(filePath, version);
    const fileReplaced = JSON.stringify(fileParsed, null, 2);
    fs.writeFileSync(filePath, fileReplaced, {});
  });
} catch (error) {
  console.error('Error occurred:', error);
}
