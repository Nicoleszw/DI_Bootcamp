function formatInput(input) {
    var formattedInput = input.toString().toUpperCase();
    return "Formatted Input: ".concat(formattedInput);
}
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput("hello world"));
var customObject = {
    toString: function () {
        return "custom object";
    }
};
console.log(formatInput(customObject));
