import { addWorkToList } from "./works.js";
import { scrollSpy } from "./scrollspy.js";
import { typeWriterName } from "./typewriter.js";
let tabLinks = Array.from(document.getElementsByClassName("tablinks"));
let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
let navBar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-icon");
let closeBtn = document.getElementById("closeBtn");
let workButton = document.querySelector(".my-work-button");
let expandBtn = document.querySelector(".expand");
let workList = document.querySelector(".workdone-list");
tabLinks.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const link = element.getAttribute("href");
        if (link) {
            const targetSection = document.querySelector(link);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});
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
if (workList.childElementCount > 3) {
    expandBtn.style.display = "inline-block";
}
else {
    expandBtn.style.display = "none";
}
let expanded = false;
expandBtn.addEventListener("click", () => {
    const listItems = workList.querySelectorAll("li:nth-child(n+4");
    if (!expanded) {
        listItems.forEach((item) => {
            item.style.display = "list-item";
        });
        expandBtn.textContent = "Show Less";
        expanded = true;
    }
    else {
        listItems.forEach((item) => {
            item.style.display = "none";
        });
        expandBtn.textContent = "Show More";
        expanded = false;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    tabLinks[0].click();
    typeWriterName();
    addWorkToList();
    scrollSpy(250, tabcontents);
});
