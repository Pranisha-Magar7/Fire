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
const slider = document.querySelector('.book-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});

// // Alert for not filling the required value in login

const loginForm = document.querySelector(".login"); // matches your HTML form class

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Please fill in the required fields!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    alert("Login Successful!");
    window.location.href = "../pages/loggedin.html"; // adjust path as needed

    
  });
}


// This is for signup page 
function signup(event){
  event.preventDefault();
}
const name= document.getElementById("name").value.trim();
const email= document.getElementById("email").value.trim();
const newpassword = document.getElementById("new_password").value;
const confirmpassword = document.getElementById("confirm_password").value;
const role = document.getElementById("role").value;

if(newpassword !== confirmpassword){
  alert("Password do not match!");
  return false;
}

localStorage.setItem("userName", name);
localStorage.setItem("userEmail", email);
localStorage.setItem("userRole", role);

if(role === "admin"){
  window.location.href = "app\pages\admin.html";
} else{
  window.location.href = "app\pages\loggedin.html";
}


