"use strict";
const nameSection = document.querySelector(".name-section");
const textHeader = document.querySelector(".text-header");
const textPara = document.querySelector(".text-para");
const contactButtons = document.querySelector(".contact-button");
const linkList = document.querySelectorAll(".nav-item");
let tabLinks = Array.from(document.getElementsByClassName("tablinks"));
let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
let navBar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-icon");
let closeBtn = document.getElementById("closeBtn");
let divContainer = document.querySelector(".container");
let workButtonContainer = document.querySelector(".my-work");
let contactButtonContainer = document.querySelector(".contact-page");
let workButton = document.querySelector(".my-work-button");
let contactButton = document.querySelector(".contact-me");
let nameNum = 0;
let headerNum = 0;
let paraNum = 0;
let nameText = "Hello! I'm Oladunjoye Olasubomi";
let headerText = "A Web Developer based in Lagos, Nigeria.";
let paraText = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed = 25;
let animationPlayed = false;
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
tabLinks.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveSection(index);
    });
});
function hideSection() {
    tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
    tabcontents.forEach((element, index, tabcontentsArray) => {
        tabcontentsArray[index].style.display = "none";
    });
}
let activeIndex = 0;
function setActiveSection(index) {
    activeIndex = index;
    tabcontents.forEach((content, contentindex) => {
        content.style.display = contentindex === index ? "block" : "none";
        tabLinks[contentindex].classList.toggle("active", contentindex === index);
    });
}
function hideNav() {
    let navBarr = navBar;
    window.onscroll = () => {
        let currentScrollPos = window.scrollY;
        if (currentScrollPos > 0) {
            navBarr.classList.add("hide-nav");
        }
        else {
            navBarr.classList.remove("hide-nav");
        }
        currentScrollPos;
    };
}
function responsiveWin() {
    const navbar = navBar;
    navbar.classList.add("navbar-open");
    tabcontents.forEach((element) => {
        element.classList.toggle("responsive-tabcontent");
    });
}
function closeMenu() {
    const navbar = navBar;
    navbar.classList.remove("navbar-open");
    tabcontents.forEach((element) => {
        element.style.marginLeft = "0";
    });
}
menuIcon.addEventListener("click", () => {
    responsiveWin();
});
closeBtn.addEventListener("click", () => {
    closeMenu();
});
workButton.addEventListener("click", () => {
    tabLinks[2].click();
});
contactButton.addEventListener("click", () => {
    tabLinks[3].click();
});
//tabLinks[1].addEventListener("click", () => {
//   divContainer.classList.add("flex-container");
// } else {
//   divContainer.classList.remove("flex-container");
// }
// });
document.addEventListener("DOMContentLoaded", () => {
    typeWriterName();
    hideSection();
    tabLinks[0].click();
    hideNav();
    // addClass();
});
