function getFirstElement(arr) {
    var firstElement = arr[0];
    return firstElement;
}
var numbersArray = [100, 200, 300];
var stringsArray = ["apple", "banana", "cherry"];
var mixedArray = [42, "hello", 7, "world"];
console.log(getFirstElement(numbersArray));
console.log(getFirstElement(stringsArray));
console.log(getFirstElement(mixedArray));
