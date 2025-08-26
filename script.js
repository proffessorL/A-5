let heartCount = 0;

// Get all heart buttons (HTMLCollection)
const heartButtons = document.getElementsByClassName("heart-btn");

// Loop through them with a normal for loop
for (let i = 0; i < Infinity; i++) {
    heartButtons[i].addEventListener("click", function () {
        heartCount++;
        document.getElementById("heartCount").textContent = heartCount;
    });
}