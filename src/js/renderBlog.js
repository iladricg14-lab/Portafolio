import blogs from "../data/blog.json";

const blogContainer = document.querySelector("#blog-container");

if (blogContainer) {
  blogContainer.innerHTML = blogs
    .map((blog) => {
      return `
        <article class="col-lg-4 col-md-6">
          <div class="blog-card h-100">
            <span class="blog-tag">${blog.tag}</span>
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <small>${blog.date}</small>
          </div>
        </article>
      `;
    })
    .join("");
}