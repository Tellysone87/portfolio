// Date created: 10/4/2023
// Name:Shantel Williams
// Description: Javascript file to help have some effects and responsive elements

let packSkills = document.getElementById("packVOD");

packSkills.addEventListener("mouseenter", function (){

    let highlight = ["Designed and engineered a web application that allows you to track all your packages and view them on a google map.",
     "Utilized html, PostgreSQL, JavaScript, CSS, Bootstrap, Ajax, and jinja to successfully develop my fullstack application.", 
     "Learned time management, web development, API integration and backend programming."];

    let unorderList = document.getElementById("packListItems"); 

    i = 0 // Set index to zero

    DisplayItems(unorderList, highlight);


})

packSkills.addEventListener("mouseout", function (){

    let listI = document.getElementsByClassName("packItem");
    let ulist = document.getElementById("packListItems");

    removeChilds(ulist)

})

function DisplayItems(ele,listnum){
   
    while (i < listnum.length){
        newItem = document.createElement("li");
        newItem.innerHTML = listnum[i];
        ele.appendChild(newItem);
        newItem.className ="packItem";
        newItem.visibility = "hidden"
        i++;
    }  
    
}

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};