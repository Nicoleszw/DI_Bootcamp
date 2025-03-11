function isAnagram(str1, str2) {
    let formattedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let formattedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    if (formattedStr1.length !== formattedStr2.length) {
        return false;
    }

    return formattedStr1.split('').sort().join('') === formattedStr2.split('').sort().join('');
}

console.log(isAnagram("Astronomer", "Moon starer"));  // true
console.log(isAnagram("School master", "The classroom"));  // true
console.log(isAnagram("The Morse Code", "Here come dots"));  // true
console.log(isAnagram("hello", "world"));  // false
console.log(isAnagram("Listen", "Silent"));  // true
console.log(isAnagram("anagram", "nag a ram"));  // true
