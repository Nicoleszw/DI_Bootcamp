function logLength<T extends { length: number }>(value: T): void {
    console.log("Length:", value.length);
  }
  
  logLength("Hello World");       
  logLength([1, 2, 3, 4, 5]);     
  logLength({ length: 10 });      
  