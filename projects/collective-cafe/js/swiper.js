const nav = document.querySelector("nav");
const bodySection = document.querySelector(".products");
const heroImage = document.querySelector(".hero-image");

const sliders = document.querySelectorAll(".slide-in");

const intersectionOptions = {
  rootMargin: "10000px 0px -50px 0px",
};

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const bodyObserver = new IntersectionObserver(function (entries, bodyObserver) {
  entries.forEach((entry) => {
    console.log("body section");
    if (entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      heroImage.classList.remove("hero-blur");
    } else {
      nav.classList.remove("nav-scrolled");
      heroImage.classList.add("hero-blur");
    }
  });
}, intersectionOptions);

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

bodyObserver.observe(bodySection);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

const noOfSlides = window.innerWidth > 1020 ? 3 : 1;

const swiper = new Swiper(".swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: noOfSlides,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  speed: 1400,
  autoplay: {
    delay: 4000,
  },
});
