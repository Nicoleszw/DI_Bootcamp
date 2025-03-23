const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();

  if (searchTerm === "") return;

  const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&rating=g&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url; 

    const gifDiv = document.createElement("div");
    gifDiv.style.marginBottom = "10px";

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = searchTerm;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      gifDiv.remove();
    });

    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);
    gifContainer.appendChild(gifDiv);

  } catch (error) {
    console.error("Fetch Error:", error);
  }

  input.value = ""; 
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
