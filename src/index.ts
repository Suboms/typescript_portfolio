const nameSection = document.querySelector(
  ".name-section"
) as HTMLHeadingElement;
const textHeader = document.querySelector(".text-header") as HTMLHeadingElement;
const textPara = document.querySelector(".text-para") as HTMLParagraphElement;
const contactButtons = document.querySelector(
  ".contact-button"
) as HTMLDivElement;
const linkList: NodeListOf<Element> = document.querySelectorAll(".nav-item");
let tabLinks = Array.from(
  document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>
);
let tabcontents = Array.from(
  document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>
);
let navBar = document.querySelector(".navbar") as HTMLDivElement;
let menuIcon = document.querySelector(".menu-icon") as HTMLDivElement;
let closeBtn = document.getElementById("closeBtn") as HTMLAnchorElement;
let divContainer = document.querySelector(".container") as HTMLDivElement;
let workButtonContainer = document.querySelector(".my-work") as HTMLDivElement;
let contactButtonContainer = document.querySelector(
  ".contact-page"
) as HTMLDivElement;
let workButton = document.querySelector(".my-work-button") as HTMLButtonElement;
let contactButton = document.querySelector(".contact-me") as HTMLButtonElement;

let nameNum: number = 0;
let headerNum: number = 0;
let paraNum: number = 0;
let nameText: string = "Hello! I'm Oladunjoye Olasubomi";
let headerText: string = "A Web Developer based in Lagos, Nigeria.";
let paraText: string = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed: number = 25;
let animationPlayed = false;

function typeWriterName() {
  if (nameNum < nameText.length) {
    nameSection.innerHTML += nameText.charAt(nameNum);
    nameNum++;
    setTimeout(typeWriterName, speed);
  } else {
    setTimeout(typeWriterHeader, speed);
  }
}

function typeWriterHeader() {
  if (headerNum < headerText.length) {
    textHeader.innerHTML += headerText.charAt(headerNum);
    headerNum++;
    setTimeout(typeWriterHeader, speed);
  } else {
    setTimeout(typeWriterPara, speed);
  }
}

function typeWriterPara() {
  if (paraNum < paraText.length) {
    textPara.innerHTML += paraText.charAt(paraNum);
    paraNum++;

    setTimeout(typeWriterPara, speed);
  } else {
    contactButtons.classList.remove("hidden");
  }
}

tabLinks.forEach((element: HTMLElement, index: number) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveSection(index);
  });
});

function hideSection() {
  tabcontents = Array.from(
    document.getElementsByClassName(
      "tabcontent"
    ) as HTMLCollectionOf<HTMLElement>
  );
  tabcontents.forEach(
    (element: HTMLElement, index: number, tabcontentsArray: HTMLElement[]) => {
      tabcontentsArray[index].style.display = "none";
    }
  );
}

let activeIndex = 0;

function setActiveSection(index: number) {
  activeIndex = index;
  tabcontents.forEach((content: HTMLElement, contentindex: number) => {
    content.style.display = contentindex === index ? "block" : "none";
    tabLinks[contentindex].classList.toggle("active", contentindex === index);
  });
}

function hideNav() {
  let navBarr = navBar;

  window.onscroll = () => {
    let currentScrollPos: number = window.scrollY;

    if (currentScrollPos > 0) {
      navBarr.classList.add("hide-nav");
    } else {
      navBarr.classList.remove("hide-nav");
    }
    currentScrollPos;
  };
}

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
