// Daily Challenge 2 

for (let i = 1; i <= 6; i++) {
    console.log('* '.repeat(i).trim());
  }

for (let i = 1; i <= 6; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
  
  