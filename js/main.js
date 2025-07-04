import { frontendSkills, backendSkills, others} from './skills.js';

const divConocimiento = document.getElementById("divConocimientos")
const h3Conocimiento = document.getElementById("conocimientos");

h3Conocimiento.addEventListener("click", () => {
    divConocimiento.classList.toggle("visible");
    divConocimiento.classList.toggle("oculto");
});


function crearSkill(skill) {
    const div = document.createElement("div");
    div.classList.add("icono"); 

    const nombre = document.createElement("span");
    nombre.classList.add("skill");
    nombre.textContent = skill.nombre;

    const img = document.createElement("img");
    img.src = skill.imagen;
    img.alt = skill.nombre;
    img.title = skill.nombre;

    const estrellas = document.createElement("div");
    estrellas.classList.add("estrellas");

    // Generar estrellas (rellenas y vacías)
    for (let i = 1; i <= 5; i++) {
        const estrella = document.createElement("span");
        estrella.textContent = i <= skill.estrellas ? "★" : "☆";
        estrellas.appendChild(estrella);
    }

    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(estrellas);

    return div;
}

// agrega el contenido al html
function mostrarSkills(skills, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";
    skills.forEach(skill => {
        const elemento = crearSkill(skill);
        contenedor.appendChild(elemento);
    });
}

// mostrar
mostrarSkills(frontendSkills, "frontend");
mostrarSkills(backendSkills, "backend");
mostrarSkills(others, "others");