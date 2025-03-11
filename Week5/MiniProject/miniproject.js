const robots = [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', image: 'https://robohash.org/new1?200x200' }, 
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', image: 'https://robohash.org/new2?200x200' },  
    { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', image: 'https://robohash.org/new3?200x200' },  
    { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
    { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
    { id: 8, name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' }
];

function displayRobots(filteredRobots) {
    const container = document.getElementById("robotContainer");
    container.innerHTML = ""; 

    filteredRobots.forEach(robot => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${robot.image}" alt="${robot.name}">
            <h2>${robot.name}</h2>
            <p>${robot.email}</p>
        `;
        container.appendChild(card);
    });
}

displayRobots(robots);

document.getElementById("searchBox").addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchTerm));
    displayRobots(filteredRobots);
});
