function getFirstElement(arr: (number | string)[]): string {
    const firstElement = arr[0];
  
    return firstElement as string;
  }
  
  const numbersArray = [100, 200, 300];
  const stringsArray = ["apple", "banana", "cherry"];
  const mixedArray = [42, "hello", 7, "world"];
  
  console.log(getFirstElement(numbersArray)); 
  console.log(getFirstElement(stringsArray)); 
  console.log(getFirstElement(mixedArray));   
  