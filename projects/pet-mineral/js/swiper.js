const firstClass = document.querySelector(".heading-first-class");
const learnMore = document.querySelector(".heading-footer-learn-more-container")
const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;


var swiper = new Swiper(".mySwiper", {
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
    autoplay:{
        delay: 9000,
    },
});


// Works when colors need to just be alternating,
// will have to manually input slide index otherwise
swiper.on('slideChange', function () {
    if(swiper.activeIndex % 4 === 2 || swiper.activeIndex  % 4 === 0){
        if(width < 641){
            firstClass.classList.add("heading-stroke-grey-thin");
            firstClass.classList.remove("heading-stroke-gold-thin");
            firstClass.classList.remove("heading-stroke-gold");
        } else{
            firstClass.classList.add("heading-stroke-grey");
            firstClass.classList.remove("heading-stroke-gold-thin");
            firstClass.classList.remove("heading-stroke-gold");
        }
        learnMore.style.border = "1px solid #8A8A8A";
    }
    if(swiper.activeIndex  % 4 === 1 || swiper.activeIndex  % 4 === 3){
        if(width < 641){
            firstClass.classList.add("heading-stroke-gold-thin");
            firstClass.classList.remove("heading-stroke-grey-thin");
            firstClass.classList.remove("heading-stroke-grey");
        } else{
            firstClass.classList.add("heading-stroke-gold");
            firstClass.classList.remove("heading-stroke-grey-thin");
            firstClass.classList.remove("heading-stroke-grey");
        }
        learnMore.style.border = "1px solid #FAB847";
    }
    console.log(swiper.activeIndex);
});