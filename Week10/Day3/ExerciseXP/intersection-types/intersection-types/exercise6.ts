type EmployeePerson = {
    name: string;
    age: number;
  };
  
  type Job = {
    position: string;
    department: string;
  };
  
  type Employee = EmployeePerson & Job;
  
  function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
      return `${employee.name} is a Manager of the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
      return `${employee.name} is a Developer working in the ${employee.department} department.`;
    } else {
      return `${employee.name} works as a ${employee.position} in the ${employee.department} department.`;
    }
  }
  
  const manager: Employee = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Sales"
  };
  
  const developer: Employee = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering"
  };
  
  const designer: Employee = {
    name: "Carol",
    age: 30,
    position: "Designer",
    department: "Creative"
  };
  
  console.log(describeEmployee(manager));
  console.log(describeEmployee(developer));
  console.log(describeEmployee(designer));
  