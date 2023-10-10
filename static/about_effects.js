// function to make logo bigger when user hovers over them
let pythonLogo = document.querySelectorAll(".logoGroup");


// functions to make logo borders larger if mouse hovers over them
pythonLogo.forEach(function(img) {
    

        // setting dictionary to store each example of a tech
    langaugeExmple = {
        pythonLogo: ["pack Track","Under Pressure"],
        CLogo: ["Just Escape","Telly's Driver Ed"],
        jsLogo: ["pack Track"],
        cssLogo: ["pack Track"],
        htmlLogo: ["pack Track"]
}

    img.addEventListener("mouseenter", function (){
        img.style.border = "Thick solid black";
        img.style.borderWidth = "6px";
        let define_logo = img.getAttribute('id');
        console.log(define_logo)

        const pList = langaugeExmple[define_logo];
        console.log(pList)
        let i = 0
        let projectHolder = document.createElement("ul");
        projectHolder.id ="hold_project"
        img.parentNode.append(projectHolder)
       
        while(i < pList.length){
            let example = document.createElement("li");
            example.innerHTML = pList[i]
            example.class = "projects"
            projectHolder.append(example)
            console.log(pList[i])
            i++

        }
 
    });
    
    // display the bullet points of pack track once user removes mouse off the video
    img.addEventListener("mouseout", function (){
        img.style.borderWidth ="2px";
        let holder = document.getElementById("hold_project")
        holder.remove()
      
    });

});

// Fucntion to remove an elements children
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};