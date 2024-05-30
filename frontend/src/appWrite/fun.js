export const menubar=(inputValue)=> {
    const items = document.querySelectorAll(".menu-ul");
    items.forEach((item) => {
        const linkText = item.textContent.toLowerCase();
        if (inputValue.trim() === "") {
            // If input value is empty or contains only whitespace characters, display all items
            item.style.display = "block";
        } else {
            if (linkText.includes(inputValue.toLowerCase())) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}



export const alertfun=(strvalue,string)=>{

var alertfunn=document.getElementById(strvalue);
var alertdiv=document.createElement("div")
alertdiv.classList.add("alertcss");
alertdiv.innerHTML= string;
alertfunn.appendChild(alertdiv);
    


setTimeout(() => {
    alertdiv.classList.add("show");
}, 10); // Delay to ensure the element is appended before adding the class

// Remove the alert after 3 seconds (or any desired time)
setTimeout(() => {
    alertdiv.classList.remove("show");
    // Optionally remove the alert from the DOM after the animation completes
    setTimeout(() => {
        alertfunn.removeChild(alertdiv);
    }, 500); // Match this duration with the CSS transition duration
}, 3000); // Display duration before starting to hide
};
    