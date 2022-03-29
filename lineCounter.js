const fs = require('fs');
const os = require('os');
const path = require('path');

// consts arguments
const pathArg = '--path';
const fileTypesArg = '--fileTypes';
const helpArg = '--help';
const excludeArg = '--exclude';

(async function init() {
  if (hasHelpArgument()) {
    console.log(`
    --path - String, path to a folder - Optional, must be valid and existing path if passed 
        Default: current location
    --fileTypes - String, comma separated file type extensions - Optional, must be valid extensions in the .ts, .txt, .js type
        Default: .js
    --exclude - String, comma separated file and folder names that must be excluded - Optional, must be valid file and folder names if passed
        Default: node_modules
    --help - No value needed - Optional
    `);
    return;
  }

  const filesPath = getArgument(pathArg, __dirname);

  try {
    const files = await getFileNamesFromDirectory(filesPath);
    const filesData = await getFilesData(files, filesPath);
    const lineCount = await getLinesCountFromFilesData(filesData);
    console.log(lineCount);
  } catch (error) {
    console.log(error);
  }
})();

async function getFileNamesFromDirectory(dir = __dirname) {
  return await fs.readdirSync(path.resolve(__dirname, dir));
}

async function getFilesData(files, filesPath) {
  const fileTypes = getArgument(fileTypesArg, '.js');
  const excludes = getArgument(excludeArg, 'node_modules');

  return files.reduce((filesData, file) => {
    if (
      fileTypes.includes(path.extname(file)) &&
      !excludes.includes(file) &&
      !fs.lstatSync(file).isDirectory()
    ) {
      return [
        ...filesData,
        fs.readFileSync(path.resolve(filesPath, file), 'utf8'),
      ];
    }

    return filesData;
  }, []);
}

function getLinesCountFromFilesData(filesData) {
  return filesData.reduce((lineCount, data) => {
    lineCount += data.split(os.EOL).filter((line) => line !== '').length;

    return lineCount;
  }, 0);
}

function getArgument(argumentString, fallbackValue) {
  const argument = process.argv.find((arg) => arg.includes(argumentString));
  return argument ? argument.split('=')[1] : fallbackValue;
}

function hasHelpArgument() {
  return (
    process.argv.slice(2).length === 0 ||
    process.argv.some((arg) => arg.includes(helpArg))
  );
}
