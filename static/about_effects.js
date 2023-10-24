// Date created: 10/4/2023
// last updated 10/10/2023
// Author: Shantel williams
// File Name:about_effects.js
// Connected to base.html

let pythonLogo = document.querySelectorAll(".logoGroup"); // grabs all elements belonging to the logo group class

// functions to make logo borders larger if mouse hovers over them
pythonLogo.forEach(function (img) {

    // setting dictionary/object to store each example of a tech by logo 
    langaugeExmple = {
        // { logo html element ID : list of projects utilizing it}
        pythonLogo: ["Pack Track", "Under Pressure"],
        CLogo: ["Just Escape", "Telly's Driver Ed"],
        jsLogo: ["Pack Track"],
        cssLogo: ["Pack Track"],
        htmlLogo: ["Pack Track"]
    }

    langauge = {
        // { logo html element ID : translated}
        pythonLogo: "Python",
        CLogo: "C-Sharp",
        jsLogo: "Javascript",
        cssLogo: "CSS",
        htmlLogo: "HTML"
    }

    // adding event listener to each logo img for mouse enter event
    img.addEventListener("mouseenter", function () {
        img.style.border = "Thick solid black"; // Changing border, border width and getting that particular image id
        img.style.borderWidth = "6px";
        let define_logo = img.getAttribute('id');

        const pList = langaugeExmple[define_logo]; // setting an variable to the value of the key matching the id
        const summary = document.getElementById("photo_col") // getting photo column

        //////////////////// Create row div //////////////////////////////////////////
        let newRow = document.createElement("div"); // create row for summary
        newRow.className ="row"; // set row class name
        newRow.id ="summary_row"; // set thw row id
        summary.append(newRow); // append row to my photo column

         //////////////////////////////////////create title for table ////////////////////////
         const table_title = document.createElement("h6");
         table_title.innerText = `Projects utilizing ${langauge[define_logo]}`;
         newRow.append(table_title);

        /////////////////////////// Create table /////////////////////////////////////////////
        const table = document.createElement("table"); // create a table for my project examples
        table.id ="project_table";// table id
        const assigned_row = document.getElementById("summary_row")
        assigned_row.append(table); //append our table to the row

        const project_table = document.getElementById("project_table"); //  grabs table
        
        //////////////////////// create table row ////////////////////////////////////
        const table_row = document.createElement("tr"); // create a table row
        table_row.id ="the_row";

        //////////////////////// Create header ///////////////////////////////////////
        const header = document.createElement("th"); // create a table header
        header.innerText ="Name";
        header.id ="header"

        ////////////////////////////// add the elements //////////////////////////////
        project_table.append(table_row);
        table_row.append(header);

        ////////////////// loop thorugh info//////////////////////////////////////////////
        let i = 0
        while (i < pList.length) { // grabbing each project in the list 
            let another_row = document.createElement("tr");
            let example = document.createElement("td"); // create a list element
            example.innerHTML = pList[i]; // display the project in the list element
            another_row.append(example) ; //Append to the row
            project_table.append(another_row);
            i++;
        }
    });

    //hides the bullet points of projects once user removes mouse off the video
    img.addEventListener("mouseout", function () {
        img.style.borderWidth = "2px"; // border returns to normal 
        const remove_summary = document.getElementById("summary_row") // grabbing list under picture
        remove_summary.remove(); // remove list
    });
});