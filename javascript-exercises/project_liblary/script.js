const myBtn = document.querySelector("#myBtn");
const modalBtn = document.querySelector("#modalBtn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");


myBtn.addEventListener("click", () => {
    openModal(modal);
});

modalBtn.addEventListener("click", () => {
    closeModal(modal);
});

overlay.addEventListener("click", () => {
    closeModal(modal);
});

function openModal(x) {
    x.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(x) {
    x.classList.remove("active");
    overlay.classList.remove("active");
}

/* */

const submit = document.querySelector("#submit");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pagenumber = document.querySelector("#pagenumber");
const genre = document.querySelector("#genre");
const booklistContainer = document.querySelector(".bottom");
const booklistDiv = booklistContainer.getElementsByTagName("div");


submit.addEventListener("click", (e) => {
    e.preventDefault();

    let tempArr = [];
    tempArr.push(author.value, title.value, pagenumber.value, genre.value);
    
    console.log(tempArr);

    for (let i = 0; i < booklistDiv.length; i++) {

        console.log(booklistDiv[i].firstElementChild == null);

        if (booklistDiv[i].firstElementChild === null) {
            let tempDiv = document.createElement("p");

            for (let tempValue in tempArr) {
                let tempDivDiv = document.createElement("p");
                tempDivDiv.textContent = tempArr[tempValue];
                tempDiv.appendChild(tempDivDiv);
            }

            booklistDiv[i].appendChild(tempDiv);
            break;
        }

    } 
    

    closeModal(modal);
})
