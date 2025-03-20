// Exercise 1 : Comparison

function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
  
  // Test 1: Should reject
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test 2: Should resolve
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Exercise 2 : Promises

let delayedSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000); 
  });
  
  delayedSuccess
    .then(result => console.log(result))  
    .catch(error => console.log(error));


//  Exercise 3 : Resolve & Reject


let resolvedPromise = Promise.resolve(3);

resolvedPromise
  .then(value => console.log(value))  
  .catch(error => console.log(error));

let rejectedPromise = Promise.reject("Boo!");

rejectedPromise
  .then(value => console.log(value))
  .catch(error => console.log(error));  


