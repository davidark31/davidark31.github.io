import { frontendSkills, backendSkills, others } from 'skills.js';

const h3Conocimiento = document.getElementById("conocimientos")
const divConocimiento = document.getElementById("divConocimientos")

h3Conocimiento.addEventListener("click", () => {
    divConocimiento.style.display = (divConocimiento.style.display === "none") ? "block" : "none";
});


frontendSkills.forEach(front => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${front.nombre}</h3>
    <img src="${front.imagen}" alt="${front.nombre}" width="150">`;
    divConocimiento.appendChild(div);
});