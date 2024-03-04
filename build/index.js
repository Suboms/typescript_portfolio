"use strict";
const nameSection = document.querySelector(".name-section");
const textHeader = document.querySelector(".text-header");
const textPara = document.querySelector(".text-para");
const contactButtons = document.querySelector(".contact-button");
const linkList = document.querySelectorAll(".nav-item");
let nameNum = 0;
let headerNum = 0;
let paraNum = 0;
let nameText = "Hello! I'm Oladunjoye Olasubomi";
let headerText = "A Web Developer based in Lagos, Nigeria.";
let paraText = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed = 100;
function typeWriterName() {
    if (nameNum < nameText.length) {
        nameSection.innerHTML += nameText.charAt(nameNum);
        nameNum++;
        setTimeout(typeWriterName, speed);
    }
    else {
        setTimeout(typeWriterHeader, speed);
    }
}
function typeWriterHeader() {
    if (headerNum < headerText.length) {
        textHeader.innerHTML += headerText.charAt(headerNum);
        headerNum++;
        setTimeout(typeWriterHeader, speed);
    }
    else {
        setTimeout(typeWriterPara, speed);
    }
}
function typeWriterPara() {
    if (paraNum < paraText.length) {
        textPara.innerHTML += paraText.charAt(paraNum);
        paraNum++;
        setTimeout(typeWriterPara, speed);
    }
    else {
        contactButtons.classList.remove("hidden");
    }
}
let anchorElements = Array.from(document.getElementsByClassName("tablinks"));
linkList.forEach((element) => {
    anchorElements.forEach((anchorElement) => {
        if (anchorElement.parentNode === element) {
            anchorElement.addEventListener("click", (e) => {
                e.preventDefault();
            });
        }
    });
});
let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
tabcontents.forEach((element) => {
    element.style.display = "none";
});
anchorElements.forEach((element) => {
    element.className = element.className.replace("active", "");
});
document.addEventListener("DOMContentLoaded", () => {
    typeWriterName();
});
