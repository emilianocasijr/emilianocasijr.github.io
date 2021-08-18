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
            } else if(entry.target.classList.contains("project1")){
                body.style.backgroundColor="#0F0C00";
                nav.style.transform="translate(0, -50%)";
                navProjects.classList.add("current-page");
            } else if(entry.target.classList.contains("project2")){
                body.style.backgroundColor="#150D24";
            } else if(entry.target.classList.contains("project3")){
                body.style.backgroundColor="#01060C";
                navSkills.classList.remove("current-page");
                navProjects.classList.add("current-page");
            } else if(entry.target.classList.contains("skills")){
                body.style.backgroundColor="#151515";
                navProjects.classList.remove("current-page");
                navSkills.classList.add("current-page");
                navContactMe.classList.remove("current-page");
                skills.forEach(skill => {
                    skill.classList.add("fade-in");
                })
            } else if(entry.target.classList.contains("contact-me")){
                body.style.backgroundColor="#303E4F";
                navSkills.classList.remove("current-page");
                navContactMe.classList.add("current-page");
            }
        })
    }, options);

sections.forEach(
    section => {
        observer.observe(section);
})