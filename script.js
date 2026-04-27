const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".feature, #missione, #chi-siamo")
  .forEach(el => observer.observe(el));

const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
