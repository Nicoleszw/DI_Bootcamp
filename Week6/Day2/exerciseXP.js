// Exercise 1 : Giphy API

const giphyURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();  
  })
  .then(data => {
    console.log(data);  
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

// Exercise 2 : Giphy API

  const giphyURL2 = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  fetch(giphyURL2)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();  
    })
    .then(data => {
      console.log(data);  
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
  
// Exercise 3 : Async function

async function fetchStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.result.properties);  
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  fetchStarshipData();


// Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000); // Delays resolution for 2 seconds
    });
}
// Immediate log: calling
// After 2 seconds: resolved