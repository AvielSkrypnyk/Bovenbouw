document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    let totalButtons = 30;
    let colors = ["yellow", "pink", "orange"];

    for (let i = 1; i <= totalButtons; i++) {
        let button = document.createElement("button");
        button.innerText = i;
        button.style.backgroundColor = "green";
        button.classList.add("button");
        button.clickCount = 0;

        button.addEventListener("click", function () {
            button.clickCount++;

            if (button.clickCount <= colors.length) {
                button.style.backgroundColor = colors[button.clickCount - 1];
            } else if (button.clickCount === colors.length + 1) {
                button.style.backgroundColor = "black";
            } else {
                button.remove();
            }
        });

        container.appendChild(button);
    }
}); 
