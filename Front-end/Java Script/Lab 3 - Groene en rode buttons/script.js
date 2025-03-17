document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    let totalButtons = 30;

    for (let i = 1; i <= totalButtons; i++) {
        let button = document.createElement("button");
        button.innerText = i;
        button.classList.add("button");

        // Click event listener to toggle the class "red" on the button
        button.addEventListener("click", function () {
            button.classList.toggle("red");
        });

        container.appendChild(button);
    }
});
