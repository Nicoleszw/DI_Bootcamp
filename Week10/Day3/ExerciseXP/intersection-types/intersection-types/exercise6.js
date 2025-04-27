function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return "".concat(employee.name, " is a Manager of the ").concat(employee.department, " department.");
    }
    else if (employee.position === "Developer") {
        return "".concat(employee.name, " is a Developer working in the ").concat(employee.department, " department.");
    }
    else {
        return "".concat(employee.name, " works as a ").concat(employee.position, " in the ").concat(employee.department, " department.");
    }
}
var manager = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Sales"
};
var developer = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering"
};
var designer = {
    name: "Carol",
    age: 30,
    position: "Designer",
    department: "Creative"
};
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
console.log(describeEmployee(designer));
