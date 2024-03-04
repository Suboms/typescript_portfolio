const nameSection = document.querySelector(
  ".name-section"
) as HTMLHeadingElement;
const textHeader = document.querySelector(".text-header") as HTMLHeadingElement;
const textPara = document.querySelector(".text-para") as HTMLParagraphElement;
const contactButtons = document.querySelector(
  ".contact-button"
) as HTMLDivElement;

const linkList: NodeListOf<Element> = document.querySelectorAll(".nav-item");

let nameNum: number = 0;
let headerNum: number = 0;
let paraNum: number = 0;
let nameText: string = "Hello! I'm Oladunjoye Olasubomi";
let headerText: string = "A Web Developer based in Lagos, Nigeria.";
let paraText: string = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed: number = 100;

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

let anchorElements = Array.from(
  document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>
);
linkList.forEach((element) => {
  anchorElements.forEach((anchorElement) => {
    if (anchorElement.parentNode === element) {
      anchorElement.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  });
});

let tabcontents = Array.from(
  document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>
);

tabcontents.forEach((element) => {
  element.style.display = "none";
});
anchorElements.forEach((element)=>{
  element.className = element.className.replace("active", "")
})


document.addEventListener("DOMContentLoaded", () => {
  typeWriterName();
});
