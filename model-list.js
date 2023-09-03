import { projects } from "./project.js";

//Get all cards
const projectContainer = document.getElementById("projects-container");
const projectCards = Array.from(projectContainer.children);
console.log(projectCards);

const templateProjectCard = projectCards[0];
const baseURL = "./3d-viewer.html";
const string1 = []
for(let project of projects){

    //Create a new card
    const newCard = templateProjectCard.cloneNode(true);

    //Add project name to card
    // const cardTitle = newCard.querySelector('.text-title');
    const cardTitle = newCard.querySelector('h2');
    cardTitle.textContent = project.name;

    //Add project URL to card
    // const button = newCard.querySelector('#viewPort');
    const button = newCard.querySelector('a');
    button.herf =baseURL+`?id=${project.id}`;

    string1.push(button.herf)

    //Add card to container
    projectContainer.appendChild(newCard);
}
console.log(string1[1])

templateProjectCard.remove();