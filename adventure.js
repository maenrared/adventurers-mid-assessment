
//menu-icon
function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
}

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

