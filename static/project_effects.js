// // Date created: 10/4/2023
// // last updated 10/10/2023
// // Author: Shantel williams
// // File Name:project_effects.js
// // Connected to project.html

// let packSkills = document.getElementById("packVOD");// grabs pack yt video player

// // display the bullet points of pack track once user hovers the video
// packSkills.addEventListener("mouseenter", function () {

//     let highlight = ["Designed and engineered a web application that allows you to track all your packages and view them on a google map.",
//         "Utilized html, PostgreSQL, JavaScript, CSS, Bootstrap, Ajax, and jinja to successfully develop my fullstack application.",
//         "Learned time management, web development, API integration and backend programming."];

//     let unorderList = document.getElementById("packListItems");

//     i = 0 // Set index to zero

//     DisplayItems(unorderList, highlight);
// })

// // display the bullet points of pack track once user removes mouse off the video
// packSkills.addEventListener("mouseout", function () {

//     let listI = document.getElementsByClassName("packItem");
//     let ulist = document.getElementById("packListItems");

//     removeChilds(ulist)
// })

// // function to take an element and list and create list items in the element
// function DisplayItems(ele, listnum) {

//     while (i < listnum.length) {
//         newItem = document.createElement("li");
//         newItem.innerHTML = listnum[i];
//         ele.appendChild(newItem);
//         newItem.className = "packItem";
//         i++;
//     }

// }

// // Fucntion to remove an elements children
// const removeChilds = (parent) => {
//     while (parent.lastChild) {
//         parent.removeChild(parent.lastChild);
//     }
// };