document.addEventListener("DOMContentLoaded", () => {
  
  const links = document.querySelectorAll("[data-target]");
  
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("data-target");
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

const dropdown = document.querySelector(".dropdown");

document.addEventListener("click", (e) => {
  const clickedInside = dropdown.contains(e.target);

  if (!clickedInside) {
    dropdown.classList.remove("active");
  }
});

dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("active");
});
