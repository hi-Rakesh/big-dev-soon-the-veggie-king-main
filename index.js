/* This is an example JavaScript file, feel free to remove/edit it anytime */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("foodSlider");
  let currentIndex = 0;

  const foodImages = [
    "assets/images/hero-section-slide-food-1.png",
    "assets/images/hero-section-slide-food-2.png",
    "assets/images/hero-section-slide-food-3.png",
    "assets/images/hero-section-slide-food-4.png",
    // Add more image URLs here
  ];

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % foodImages.length;
    updateSlider();
  }

  function updateSlider() {
    const nextSlide = document.createElement("div");
    nextSlide.className = "slide";
    nextSlide.innerHTML = `<img src="${foodImages[currentIndex]}" alt="Food">`;

    slider.appendChild(nextSlide);

    // Remove the first slide to maintain a fixed number of slides
    if (slider.children.length > 2) {
      slider.removeChild(slider.children[0]);
    }
  }

  setInterval(showNextSlide, getRandomInterval());

  function getRandomInterval() {
    return Math.floor(Math.random() * (5000 - 3000 + 1) + 3000);
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

console.log(
  "%cProject by BigDevSoon",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");
