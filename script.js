// Load popup.html dynamically
fetch("popup.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("popup-container").innerHTML = data;
  });

// --------------------
// Typing Effect
// --------------------
const roles = [
  "Entrepreneur",
  "Web Developer",
  "Digital Marketing Manager",
  "Operations Specialist",
  "QA Engineer"
];

let roleIndex = 0;      // which role
let charIndex = 0;      // which character
let isDeleting = false;
const roleElement = document.querySelector(".role");

function typeEffect() {
  if (roleIndex >= roles.length) roleIndex = 0;
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex++;
    }
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200); // pause before deleting
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// --------------------
// Autoplay Image Slider
// --------------------
const scrollContainer = document.querySelector(".image-scroll");
const images = document.querySelectorAll(".image-scroll img");

let slideIndex = 0;

function showSlide(i) {
  slideIndex = (i + images.length) % images.length;
  scrollContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// autoplay every 3 seconds
setInterval(() => {
  showSlide(slideIndex + 1);
}, 3000);
