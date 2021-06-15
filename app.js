console.log("This is index file");
let body = document.getElementsByTagName("BODY")[0];
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.classList.contains("yellow"));
        if (e.target.classList.contains("grey")) 
        {
            body.style.backgroundColor = "grey";
        } else if(e.target.classList.contains("white")) 
        {
            body.style.backgroundColor = "white";
        } else if(e.target.classList.contains("blue")) 
        {
            body.style.backgroundColor = "blue";
        } else if(e.target.classList.contains("yellow"))
         {
            body.style.backgroundColor = "yellow";
        }

    })
})