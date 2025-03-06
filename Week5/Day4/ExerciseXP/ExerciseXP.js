// Exercise 1 
// With GET, form data appears in the URL.
// With POST, data is hidden from the URL and sent in the request body, which you can inspect in the Network tab.

// Exercise 2 
const marioGame = {
    detail: "An amazing game!",
    characters: {
      mario: {
        description: "Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser: {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach: {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
    },
  };
  
  // Convert to JSON
  const jsonMarioGame = JSON.stringify(marioGame);
  console.log(jsonMarioGame);

// Pretty Printing the JSON:
const prettyJsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonMarioGame);

  