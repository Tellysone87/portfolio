// Date created: 10/4/2023
// Name:Shantel Williams
// Description: Javascript file to help have some effects and responsive elements

const title = document.getElementById("#Shantel");


title.addEventListener(onmouseover, function (){
    const skill = document.getElementById("SkillSet");
    skill.style.visibility = "Visible";
    // const skills = document.createElement("div")
    // skills.className = "row"
    // skills.innerHTML = "Software Engineer | Python | SQL | JavaScript | HTML | CSS | PostgreSQL"
    // skills.id = "SkillSet"
    // title.appendChild(skills);
})

title.addEventListener(mouseout, function (){
    const skills = document.getElementById("SkillSet")
    skills.visibility = "hidden";
})

