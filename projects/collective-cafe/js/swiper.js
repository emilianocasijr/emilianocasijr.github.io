const nav = document.querySelector("nav");
const bodySection = document.querySelector(".products");
const heroImage = document.querySelector('.hero-image')

const intersectionOptions = {
  rootMargin: "100000px 0px 0px 0px",
};

const bodyObserver = new IntersectionObserver(function (entries, bodyObserver) {
  entries.forEach((entry) => {
    console.log("body section");
    if (entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      heroImage.classList.remove('hero-blur')
    } else {
      nav.classList.remove("nav-scrolled");
      heroImage.classList.add('hero-blur')
    }
  });
}, intersectionOptions);

bodyObserver.observe(bodySection);

const swiper = new Swiper(".swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  speed: 1400,
  autoplay: {
    delay: 3000,
  },
});
