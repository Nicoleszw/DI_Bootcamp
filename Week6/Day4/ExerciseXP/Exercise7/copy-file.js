const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading source.txt:', err.message);
  }

  fs.writeFile('destination.txt', data, 'utf8', (err) => {
    if (err) {
      return console.error('Error writing to destination.txt:', err.message);
    }
    console.log('Content successfully copied to destination.txt');
  });
});
