import { projects } from "./project.js";

//Get the current project ID from the URL parameter
const currentUrl = window.location.href;
console.log(currentUrl);
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");
console.log(currentProjectID);

//Get the current project
const currentProject = projects.find(project=> project.id === currentProjectID);

//Add the project URL to the iframe
const iframe = document.getElementById('box-3') ;
iframe.src = currentProject.url;
// console.log(currentProject.url);