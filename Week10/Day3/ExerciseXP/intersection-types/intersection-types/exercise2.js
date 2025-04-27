function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    else if (typeof value === "string") {
        return "This is a string";
    }
    return "Unknown type";
}
console.log(describeValue(42));
console.log(describeValue("hello"));
