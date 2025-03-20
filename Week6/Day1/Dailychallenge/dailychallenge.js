// Exercise 1 

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === "string")) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject("Error: Not all items in the array are strings.");
      }
    });
  }

  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sorted = words.sort();
        resolve(sorted);
      } else {
        reject("Error: Array length is less than or equal to 4.");
      }
    });
  }


