document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    let totalButtons = 30;
    let colors = ["green", "red", "violet", "blue"];

    for (let i = 1; i <= totalButtons; i++) {
        let button = document.createElement("button");
        button.innerText = i;
        button.style.backgroundColor = "green";
        button.classList.add("button");
        button.clickCount = 0;

        button.addEventListener("click", function () {
            button.clickCount++;

            if (button.clickCount < colors.length) {
                button.style.backgroundColor = colors[button.clickCount];
            } else if (button.clickCount === colors.length) {
                button.style.backgroundColor = "black";
            } else {
                button.remove();
            }
        });

        container.appendChild(button);
    }
});
