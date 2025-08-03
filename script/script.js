const slides = document.querySelectorAll(".slide");
let counter = 0;

// Dot container
const dotContainer = document.querySelector(".dot-container");

slides.forEach(() => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

const updateDots = () => {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[counter].classList.add("active");
};


// Set initial positions
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  if (counter < 0) counter = slides.length - 1;
  if (counter >= slides.length) counter = 0;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  updateDots();
};

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

// Auto Slide every 4 seconds
setInterval(() => {
  counter++;
  slideImage();
}, 4000);

updateDots();