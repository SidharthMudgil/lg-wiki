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