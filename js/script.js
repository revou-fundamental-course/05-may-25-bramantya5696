document.addEventListener("DOMContentLoaded", () => {
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

  const slides = document.querySelectorAll(".carousel .slide");
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // Change slide every 10 seconds
});
