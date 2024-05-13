const myBtn = document.querySelector("#myBtn");
const modalBtn = document.querySelector("#modalBtn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");


myBtn.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});

modalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
})