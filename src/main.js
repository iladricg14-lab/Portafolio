import '../src/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

fetch("./src/data/data.json")
  .then(response => response.json())
  .then(data => {

    renderProjects(data.projects);
    renderSkills(data.skills);

  })
  .catch(error => console.error(error));


/*Proyectos destacados*/

function renderProjects(projects) {

  const container = document.getElementById("featured-projects-container");

  container.innerHTML = "";

  projects.forEach(project => {

    container.innerHTML += `
      <div class="project-card">

        <img src="${project.image}" alt="${project.title}">

        <h3>${project.title}</h3>

        <p>${project.description}</p>

      </div>
    `;

  });

}


/*Habilidades */

function renderSkills(skills) {

  const container = document.getElementById("skills-container");

  container.innerHTML = "";

  skills.forEach(skill => {

    container.innerHTML += `
      <div class="skill-card">
        ${skill.name}
      </div>
    `;

  });

}