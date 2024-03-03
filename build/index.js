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
        setTimeout(typeWriterHeader, speed); // Once name is fully typed, start typing the header
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
// Start typing the name first
let anchorElements = document.querySelectorAll("a");
anchorElements.forEach(element2 => {
    linkList.forEach(element1 => {
        if (element2.parentNode === element1) {
            element2.addEventListener("click", (e) => {
                console.log(element1);
                e.preventDefault();
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    typeWriterName();
});
