document.addEventListener("DOMContentLoaded", () => {
  // menuicon
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.querySelector(".menu-list");

  menuIcon.addEventListener("click", () => {
    const isClosed = menuIcon.getAttribute("data-state") === "closed";

    if (isClosed) {
      menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Change to "close" icon
      menuIcon.setAttribute("data-state", "open");
      menuList.style.display = "block"; // Show menu
    } else {
      menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change back to "bars" icon
      menuIcon.setAttribute("data-state", "closed");
      menuList.style.display = "none"; // Hide menu
    }
  });

  // carousel
  const slides = document.querySelectorAll(".carousel .slide");
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // Change slide every 10 seconds

  // form validation
  const nameInput = document.getElementById("formName");
  const emailInput = document.getElementById("formEmail");
  const packageSelect = document.getElementById("packageSelect");
  const nameAlert = document.getElementById("nameAlert");
  const emailAlert = document.getElementById("emailAlert");
  const packageAlert = document.getElementById("packageAlert");
  const form = document.getElementById("contactForm");

  // Name validation
  nameInput.addEventListener("input", function () {
    if (!nameInput.value.trim()) {
      nameAlert.textContent = "Name is required.";
    } else {
      nameAlert.textContent = "";
    }
  });

  // Email validation
  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (!email) {
      emailAlert.textContent = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailAlert.textContent = "Please enter a valid email address.";
    } else {
      emailAlert.textContent = "";
    }
  });

  // Package validation
  packageSelect.addEventListener("change", function () {
    if (!packageSelect.value) {
      packageAlert.textContent = "Please select a package.";
    } else {
      packageAlert.textContent = "";
    }
  });

  // Prevent submit if invalid
  form.addEventListener("submit", function (e) {
    let valid = true;

    if (!nameInput.value.trim()) {
      nameAlert.textContent = "Name is required.";
      valid = false;
    }
    if (!emailInput.value.trim()) {
      emailAlert.textContent = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailAlert.textContent = "Please enter a valid email address.";
      valid = false;
    }
    if (!packageSelect.value) {
      packageAlert.textContent = "Please select a package.";
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

  // navbar bg invisibility
  const navbar = document.querySelector("nav");
  const homeSection = document.getElementById("home"); // Make sure your home section has id="home"

  window.addEventListener("scroll", () => {
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    if (window.scrollY >= homeBottom) {
      navbar.classList.add("bg-colored"); // Add your custom class
      navbar.classList.remove("bg-invisible");
    } else {
      navbar.classList.add("bg-invisible");
      navbar.classList.remove("bg-colored");
    }
  });
});
