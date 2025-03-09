
//menu-icon
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav");

  if (menuIcon && nav) {
      menuIcon.addEventListener("click", function () {
          nav.classList.toggle("active");
      });
  } else {
      console.error("Menu icon or nav not found!");
  }
});

//pop-images
document.addEventListener("DOMContentLoaded", function() {
  const popImages = document.querySelectorAll('.pop-image');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  popImages.forEach(img => observer.observe(img));
});

