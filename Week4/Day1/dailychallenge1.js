//Daily Challenge 1 

// Create the sentence variable
let sentence = "The movie is not that bad, I like it";

// Find the first occurrence of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
  // Replace the substring from "not" to the end of "bad" with "good"
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}
