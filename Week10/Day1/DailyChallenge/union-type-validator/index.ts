function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (let type of allowedTypes) {
      if (typeof value === type) {
        return true;
      }
    }
    return false;
  }
  
  const stringVar = "Hello";
  const numberVar = 42;
  const boolVar = true;
  const objVar = { name: "TypeScript" };
  
  console.log(validateUnionType(stringVar, ["string", "number"])); 
  console.log(validateUnionType(numberVar, ["boolean", "object"])); 
  console.log(validateUnionType(boolVar, ["boolean"])); 
  console.log(validateUnionType(objVar, ["object"])); 
  console.log(validateUnionType(objVar, ["string"])); 
  