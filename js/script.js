'use strict';

// // modal variables
// const modal = document.querySelector('[data-modal]');
// const modalCloseBtn = document.querySelector('[data-modal-close]');
// const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// // modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// // modal eventListener
// modalCloseOverlay.addEventListener('click', modalCloseFunc);
// modalCloseBtn.addEventListener('click', modalCloseFunc);


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("[data-modal]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const overlay = document.querySelector("[data-modal-overlay]");
  const signupForm = document.getElementById("signupForm");

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Close modal on close button click
  closeBtn.addEventListener("click", closeModal);

  // Close modal on overlay click
  overlay.addEventListener("click", closeModal);

  // Form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const inputs = signupForm.querySelectorAll("input");
    let formData = {};
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
        formData[input.placeholder] = input.value;
      }
    });

    if (!valid) {
      alert("Please fill in all fields.");
      return;
    }

    // Success Notification
    showNotification("🎉 Congratulations! Your account has been created.");

    // Reset form
    signupForm.reset();

    // Optionally close the modal after a delay
    setTimeout(closeModal, 2000);
  });

  // Notification function
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#4BB543";
    notification.style.color = "white";
    notification.style.padding = "15px 25px";
    notification.style.borderRadius = "8px";
    notification.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});







// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

// BANNER

const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
const totalSlides = sliderItems.length;

function slideTo(index) {
  const slideWidth = sliderItems[0].offsetWidth + 10; // +10 for the gap
  sliderContainer.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  slideTo(currentIndex);
}, 3000); // every 3 seconds




