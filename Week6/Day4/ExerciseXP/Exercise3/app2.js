const { readFile, writeFile } = require('./fileManager');

const helloContent = readFile('HelloWorld.txt');
if (helloContent !== null) {
  console.log(`Content of HelloWorld.txt: ${helloContent}`);
}

writeFile('ByeWorld.txt', 'Writing to the file');
