// function to make logo bigger when user hovers over them
let pythonLogo = document.querySelectorAll(".logoGroup");


// functions to make logo borders larger if mouse hovers over them
pythonLogo.forEach(function(img) {
    

        // setting dictionary/object to store each example of a tech by logo { logo html element ID : list of projects utilizing it}
    langaugeExmple = {
        pythonLogo: ["pack Track","Under Pressure"],
        CLogo: ["Just Escape","Telly's Driver Ed"],
        jsLogo: ["pack Track"],
        cssLogo: ["pack Track"],
        htmlLogo: ["pack Track"]
}

// adding event listener to each logo img for mouse enter event
    img.addEventListener("mouseenter", function (){
        img.style.border = "Thick solid black"; // Changing border, border width and getting that particular image id
        img.style.borderWidth = "6px";
        let define_logo = img.getAttribute('id');

        const pList = langaugeExmple[define_logo]; // setting an variable to the value of the key matching the id
        let projectHolder = document.createElement("ul"); // creating list to hold the item of the value list 
        projectHolder.id ="hold_project" // setting list id 
        img.parentNode.append(projectHolder) // appending that list to the image parent node or column
        
        let i = 0
        while(i < pList.length){ // grabbing each project in the list 
            let example = document.createElement("li"); // create a list element
            example.innerHTML = pList[i] // displat the project in the list element
            projectHolder.append(example) // appending the list object ot the unordered list 
            i++

        }
 
    });
    
    //hides the bullet points of projects once user removes mouse off the video
    img.addEventListener("mouseout", function (){
        img.style.borderWidth ="2px"; // border returns to normal 
        projectHolder.style.visibility = "hidden" // list is hidden
      
    });

});