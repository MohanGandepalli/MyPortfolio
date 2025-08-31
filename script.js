    fetch("popup.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("popup-container").innerHTML = data;
      });

      const roles = [
      "Enterpreneur",
   "Web Developer",
  "Digital Marketing Manager",
  "Operations Specialist",
  "QA Engineer"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const roleElement = document.querySelector(".role");

function typeEffect() {
  if (index >= roles.length) index = 0;
  currentRole = roles[index];

  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
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
