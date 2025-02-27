const form = document.getElementById("libform");
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");
const storySpan = document.getElementById("story");

const stories = [
    "{person} went to {place} with a {adjective} {noun}. They decided to {verb} all day!",
    "One day, {person} found a {adjective} {noun} at {place}. It made them {verb} like never before!",
    "{person} was feeling {adjective}, so they took their {noun} and started to {verb} at {place}.",
    "At {place}, {person} met a {adjective} {noun}. Together, they decided to {verb} until sunset!",
];

function generateStory() {
    const noun = nounInput.value.trim();
    const adjective = adjectiveInput.value.trim();
    const person = personInput.value.trim();
    const verb = verbInput.value.trim();
    const place = placeInput.value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields!");
        return;
    }

    const randomStory = stories[Math.floor(Math.random() * stories.length)]
        .replace("{noun}", noun)
        .replace("{adjective}", adjective)
        .replace("{person}", person)
        .replace("{verb}", verb)
        .replace("{place}", place);

    storySpan.textContent = randomStory;
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    generateStory();
});

const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle Story";
shuffleButton.style.marginLeft = "10px";
document.body.appendChild(shuffleButton);

shuffleButton.addEventListener("click", function () {
    if (storySpan.textContent !== "") {
        generateStory(); 
    }
});
