import { addWorkToList } from "./works.js";
import { scrollSpy } from "./scrollspy.js";
import { typeWriterName } from "./typewriter.js";

let tabLinks = Array.from(
  document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>
);
let tabcontents = Array.from(
  document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>
);
let navBar = document.querySelector(".navbar") as HTMLDivElement;
let menuIcon = document.querySelector(".menu-icon") as HTMLDivElement;
let closeBtn = document.getElementById("closeBtn") as HTMLAnchorElement;
let workButton = document.querySelector(
  ".check-work-button"
) as HTMLButtonElement;
let contactMeBtn = document.querySelector(".contact-me") as HTMLButtonElement;
let expandBtn = document.querySelector(".expand") as HTMLButtonElement;
let workList = document.querySelector(".workdone-list") as HTMLOListElement;

tabLinks.forEach((element: HTMLElement) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const link: string | null = element.getAttribute("href");
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
  tabcontents.forEach((element: HTMLElement) => {
    element.classList.toggle("responsive-tabcontent");
  });
}

function closeMenu() {
  const navbar = navBar;
  navbar.classList.remove("navbar-open");
  tabcontents.forEach((element: HTMLElement) => {
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
contactMeBtn.addEventListener("click", () => {
  tabLinks[3].click();
});
if (workList.childElementCount > 3) {
  expandBtn.style.display = "inline-block";
} else {
  expandBtn.style.display = "none";
}
let expanded = false;
expandBtn.addEventListener("click", () => {
  const listItems = workList.querySelectorAll(
    "li:nth-child(n+4"
  ) as NodeListOf<HTMLElement>;
  if (!expanded) {
    listItems.forEach((item) => {
      item.style.display = "list-item";
    });
    expandBtn.textContent = "Show Less";
    expanded = true;
  } else {
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



let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0; i<num.length; i++){
 num[i] = num[i]*2;
}
console.log(num);
// num.forEach((n) => {
//   console.log(n*2);
// });