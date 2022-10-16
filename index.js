// Hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const mainMenu = document.querySelector(".main-menu");
const mediaQueryLaptop = window.matchMedia("(max-width: 1300px)");
const main = document.querySelector("main");

let menuOpen = false;

menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    mainMenu.style.opacity = "1";
    main.style.opacity = "0.3";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    mainMenu.style.opacity = "0";
    main.style.opacity = "1";
    menuOpen = false;
  }
});

function myFunction(mediaQuery) {
  if (!mediaQuery.matches) {
    mainMenu.style.opacity = "1";
    main.style.opacity = "1";
    menuBtn.classList.remove("open");
  } else {
    mainMenu.style.opacity = "0";
  }
}

myFunction(mediaQueryLaptop); // Call listener function at run time
mediaQueryLaptop.addListener(myFunction); // Attach listener function on state changes

// Testimonials Carousel

const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    // Select it this way to make sure it's working even if we have more carousels.
    // console.log(offset);
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const dots = document.querySelector("[data-pagination]");

    const activeSlide = slides.querySelector("[data-active]");
    const activeDot = dots.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    let newIndexDot = [...dots.children].indexOf(activeDot) + offset;

    console.log(activeDot);

    // Make sure it is working OK for first and last.
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    if (newIndexDot < 0) newIndexDot = dots.children.length - 1;
    if (newIndexDot >= dots.children.length) newIndexDot = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    dots.children[newIndex].dataset.active = true;
    delete activeDot.dataset.active;

    dots.children[newIndex].classList.add("dot-active");
    activeDot.classList.remove("dot-active");
  });
});

// All links to my Github

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.setAttribute("target", "blank");
  link.href = "https://github.com/straktormedia";
});
