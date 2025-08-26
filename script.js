let heartCount = 0;


const heartButtons = document.getElementsByClassName("heart-btn");


for (let i = 0; i < Infinity; i++) {
    heartButtons[i].addEventListener("click", function () {
        heartCount++;
        document.getElementById("heartCount").textContent = heartCount;
    });
}


