import { Modal } from "bootstrap";
import blogs from "../data/blog.json";

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.querySelector("#blog-container");
  const modalElement = document.querySelector("#blogModal");

  if (!blogContainer || !modalElement) return;

  // Instancia del modal Bootstrap
  const blogModal = new Modal(modalElement);

  // Evita el warning de accesibilidad al cerrar
  modalElement.addEventListener("hide.bs.modal", () => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  });

  // Renderizar tarjetas del blog
  blogContainer.innerHTML = blogs
    .map(
      (blog) => `
        <article class="col-lg-4 col-md-6">
          <div class="blog-card h-100">

            <span class="blog-tag">${blog.tag}</span>

            <h3>${blog.title}</h3>

            <p>${blog.description}</p>

            <div class="blog-footer">
              <small>${blog.date}</small>

              <button
                type="button"
                class="blog-read-more"
                data-id="${blog.id}">
                Leer más →
              </button>
            </div>

          </div>
        </article>
      `
    )
    .join("");

  // Abrir modal
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".blog-read-more");

    if (!button) return;

    const blogId = Number(button.dataset.id);

    const selectedBlog = blogs.find(
      (blog) => Number(blog.id) === blogId
    );

    if (!selectedBlog) return;

    document.querySelector("#blogModalTitle").textContent =
      selectedBlog.title;

    document.querySelector("#blogModalDate").textContent =
      selectedBlog.date;

    document.querySelector("#blogModalContent").textContent =
      selectedBlog.content;

    blogModal.show();
  });
});