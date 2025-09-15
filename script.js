

// Hamburguer Menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");
const reveals = document.querySelectorAll('.reveal');


// Efeito de revelação das secções

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.5 });

reveals.forEach(reveal => observer.observe(reveal));

// Alternar menu hamburguer
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fechar menu ao clicar num link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    dropdowns.forEach(dd => dd.classList.remove("show"));
  });
});

// Alternar dropdown no mobile
dropdowns.forEach(dd => {
  dd.querySelector(".dropbtn").addEventListener("click", e => {
    if(window.innerWidth <= 768){
      e.preventDefault(); // impede link principal
      dd.classList.toggle("show");
    }
  });
});

// Fechar menu ao clicar fora
document.addEventListener("click", e => {
  if(!navLinks.contains(e.target) && !hamburger.contains(e.target)){
    navLinks.classList.remove("show");
    dropdowns.forEach(dd => dd.classList.remove("show"));
  }
});
