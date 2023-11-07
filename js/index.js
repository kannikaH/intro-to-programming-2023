const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
let copyright = document.createElement('p');

copyright.textContent = "Kannika "+ thisYear;
footer.append(copyright);

const skills = ["HTML", "CSS", "Javascript", "SQL"];
const skillsSection = document.getElementById("skills");
const skillsList =  skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}