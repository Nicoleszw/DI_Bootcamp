function formatInput<T extends { toString(): string }>(input: T): string {
    const formattedInput = (input.toString() as string).toUpperCase();
  
    return `Formatted Input: ${formattedInput}`;
  }
  
  console.log(formatInput(123));           
  console.log(formatInput(true));          
  console.log(formatInput("hello world")); 
  
  const customObject = {
    toString() {
      return "custom object";
    }
  };
  
  console.log(formatInput(customObject));
  