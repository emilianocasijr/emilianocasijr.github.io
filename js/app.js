const sections = document.querySelectorAll("section");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navProjects = document.querySelector(".nav-projects");
const navSkills = document.querySelector(".nav-skills");
const navContactMe = document.querySelector(".nav-contact-me");
const navAboutMe = document.querySelector(".nav-about-me");
const skills = document.querySelectorAll(".skill");

const options = {
    threshold: 0.3,
    rootMargin: "0px"
}

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return
            } else if(entry.target.classList.contains("introduction")){
                body.style.backgroundColor="#151515";
                navProjects.classList.remove("current-page");
                navSkills.classList.remove("current-page");
                navContactMe.classList.remove("current-page");
                navAboutMe.classList.remove("current-page");
                if(window.innerWidth <=1281){
                    nav.style.top="3rem"
                }else if(window.innerWidth <= 641){
                    nav.style.top="1.25rem"
                } else{
                    nav.style.top="70%";
                }
            } else if(entry.target.classList.contains("project1")){
                body.style.backgroundColor="#0F0C00";
                if(window.innerWidth <=1281){
                    nav.style.top="3rem"
                }else if(window.innerWidth <= 641){
                    nav.style.top="1.25rem"
                } else{
                    nav.style.top="30%";
                }
                nav.style.transform="translate(0, -50%)";
                navProjects.classList.add("current-page");
                navSkills.classList.remove("current-page");
                navContactMe.classList.remove("current-page");
                navAboutMe.classList.remove("current-page");
            } else if(entry.target.classList.contains("project2")){
                body.style.backgroundColor="#150D24";
            } else if(entry.target.classList.contains("project3")){
                body.style.backgroundColor="#150D24";
            } else if(entry.target.classList.contains("project4")){
                body.style.backgroundColor="#150D24";
            } else if(entry.target.classList.contains("project5")){
                body.style.backgroundColor="#01060C";
                navSkills.classList.remove("current-page");
                navContactMe.classList.remove("current-page");
                navAboutMe.classList.remove("current-page");
                navProjects.classList.add("current-page");
            } else if(entry.target.classList.contains("skills")){
                body.style.backgroundColor="#151515";
                if(window.innerWidth <=1281){
                    nav.style.top="3rem"
                }else if(window.innerWidth <= 641){
                    nav.style.top="1.25rem"
                } else{
                    nav.style.top="30%";
                }
                navProjects.classList.remove("current-page");
                navContactMe.classList.remove("current-page");
                navAboutMe.classList.remove("current-page");
                navSkills.classList.add("current-page");
                skills.forEach(skill => {
                    skill.classList.add("fade-in");
                })
            } else if(entry.target.classList.contains("contact-me")){
                body.style.backgroundColor="#303E4F";
                if(window.innerWidth <=1281){
                    nav.style.top="3rem"
                }else if(window.innerWidth <= 641){
                    nav.style.top="1.25rem"
                } else{
                    nav.style.top="30%";
                }
                navProjects.classList.remove("current-page");
                navSkills.classList.remove("current-page");
                navAboutMe.classList.remove("current-page");
                navContactMe.classList.add("current-page");
            } else if(entry.target.classList.contains("about-me")){
                body.style.backgroundColor="#151515";
                if(window.innerWidth <=1281){
                    nav.style.top="3rem"
                }else if(window.innerWidth <= 641){
                    nav.style.top="1.25rem"
                } else{
                    nav.style.top="30%";
                }
                navProjects.classList.remove("current-page");
                navSkills.classList.remove("current-page");
                navContactMe.classList.remove("current-page");
                navAboutMe.classList.add("current-page");
            }
        })
    }, options);

sections.forEach(
    section => {
        observer.observe(section);
})



// CONTACT ME FORM from "formspree"
var form = document.getElementById("contact-me-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-me-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Message successfully sent. Thank you!";
    status.classList.add("success")
    form.reset()
  }).catch(error => {
    status.classList.add("error")
    status.innerHTML = "Oops! Message not sent. Please contact me through my email."
  });
}
form.addEventListener("submit", handleSubmit)