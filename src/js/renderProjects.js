import projects from "../data/projects.json";

const container = document.querySelector("#projects-container");

if (container) {
  container.innerHTML = projects
    .map((project, index) => {
      const reverseClass = index % 2 !== 0 ? "project-case-reverse" : "";

      return `
        <article class="project-case ${reverseClass}">
          <div class="project-image">
            <img src="${project.image}" alt="Captura del proyecto ${project.title}">
          </div>

          <div class="project-info">
            <span class="project-badge">${project.badge}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="project-detail">
              <strong>Problema:</strong>
              <p>${project.problem}</p>
            </div>

            <div class="project-detail">
              <strong>Solución:</strong>
              <p>${project.solution}</p>
            </div>

            <div class="project-tech">
              ${project.technologies
                .map((tech) => `<span>${tech}</span>`)
                .join("")}
            </div>

            <div class="project-links">
              <a href="${project.github}" target="_blank" class="btn btn-outline-custom">
                <i class="bi bi-github"></i>
                GitHub
              </a>

              <a href="${project.demo}" target="_blank" class="btn btn-primary-custom">
                Ver demo
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}