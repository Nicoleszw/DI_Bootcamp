const form = document.querySelector("form");
console.log(form);

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log(firstNameInput, lastNameInput);

const firstNameByName = document.querySelector("[name='firstname']");
const lastNameByName = document.querySelector("[name='lastname']");
console.log(firstNameByName, lastNameByName);

const usersAnswerList = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please fill in both fields!");
        return;
    }

    usersAnswerList.innerHTML = "";

    const firstNameLi = document.createElement("li");
    firstNameLi.textContent = firstName;

    const lastNameLi = document.createElement("li");
    lastNameLi.textContent = lastName;

    usersAnswerList.appendChild(firstNameLi);
    usersAnswerList.appendChild(lastNameLi);

    firstNameInput.value = "";
    lastNameInput.value = "";
});
