const button = document.getElementById("fetch-btn");
const box = document.getElementById("character-box");

async function getCharacter(id) {
  const url = `https://www.swapi.tech/api/people/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Character not found");
    }
    const data = await response.json();
    return data.result.properties;
  } catch (error) {
    throw error;
  }
}

async function getHomeWorld(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Homeworld not found");
    }
    const data = await response.json();
    return data.result.properties.name;
  } catch (error) {
    return "Unknown";
  }
}

async function displayCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  box.innerHTML = `<div class="spinner"><i class="fas fa-spinner fa-spin"></i></div><p>Loading...</p>`;

  try {
    const character = await getCharacter(randomId);
    const homeWorld = await getHomeWorld(character.homeworld);

    box.innerHTML = `
      <h2>${character.name}</h2>
      <p>Height: ${character.height}</p>
      <p>Gender: ${character.gender}</p>
      <p>Birth Year: ${character.birth_year}</p>
      <p>Home World: ${homeWorld}</p>
    `;
  } catch (error) {
    box.innerHTML = `<p>Oh No! That person isn't available.</p>`;
  }
}

button.addEventListener("click", displayCharacter);
