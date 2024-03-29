var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addWorkToList } from "./works.js";
import { scrollSpy } from "./scrollspy.js";
import { typeWriterName } from "./typewriter.js";
let tabLinks = Array.from(document.getElementsByClassName("tablinks"));
let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
let navBar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-icon");
let closeBtn = document.getElementById("closeBtn");
let workButton = document.querySelector(".check-work-button");
let contactMeBtn = document.querySelector(".contact-me");
let expandBtn = document.querySelector(".expand");
let workList = document.querySelector(".workdone-list");
let selectOption = document.querySelectorAll(".select-option");
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
function buttonClick() {
    return __awaiter(this, void 0, void 0, function* () {
        workButton.addEventListener("click", () => {
            tabLinks[2].click();
        });
        contactMeBtn.addEventListener("click", () => {
            tabLinks[3].click();
        });
    });
}
const toggleExpandBtn = () => {
    if (workList.childElementCount > 3) {
        expandBtn.style.display = "block";
    }
    else {
        expandBtn.style.display = "none";
    }
};
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
selectOption.forEach((element) => {
    element.addEventListener("change", () => {
        if (element.selectedIndex !== 0) {
            element.style.color = "#212529";
        }
        else {
            element.style.color = "#4f5255ad";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    window.onload = () => {
        tabLinks[0].click();
    };
    buttonClick();
    typeWriterName();
    addWorkToList();
    toggleExpandBtn();
    scrollSpy(250, tabcontents);
});
