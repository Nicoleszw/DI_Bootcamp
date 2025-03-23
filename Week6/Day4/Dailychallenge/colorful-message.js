const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.blue.bold('Success!') + ' ' + chalk.green('You are progressing well in Node.js!'));
}

module.exports = showColorfulMessage;
