import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../css/style.css";

import "./renderProjects.js";
import "./renderBlog.js";

/*---------Hero--------*/

const hero = document.querySelector(".hero-section");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 3;
  const rotateX = ((centerY - y) / centerY) * 3;

  hero.style.transform = `
    perspective(1500px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-5px)
  `;
});

hero.addEventListener("mouseleave", () => {
  hero.style.transform = `
    perspective(1500px)
    rotateX(0deg)
    rotateY(0deg)
    translateY(0px)
  `;
});