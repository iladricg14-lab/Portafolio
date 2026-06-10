fetch("../src/data/data.json")
  .then(response => response.json())
  .then(data => {
    renderProjects(data.projects);
  });

function renderProjects(projects) {

  const container = document.getElementById("projects-container");
  projects.forEach(project => {
    container.innerHTML += `
      <article class="project-card">
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
        <span class="project-type">Proyecto web</span>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="tech-container">

            ${project.technologies
              .map(tech => `<span>${tech}</span>`)
              .join("")}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank">
              GitHub
            </a>
            <a href="${project.demo}" target="_blank">
              Ver Proyecto
            </a>
          </div>
        </div>
      </article>
    `;
  });
}