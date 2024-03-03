const nameSection = document.querySelector(
  ".name-section"
) as HTMLHeadingElement;
const textHeader = document.querySelector(".text-header") as HTMLHeadingElement;
const textPara = document.querySelector(".text-para") as HTMLParagraphElement;
const contactButtons = document.querySelector(
  ".contact-button"
) as HTMLDivElement;

const linkList:NodeListOf<Element> = document.querySelectorAll(".nav-item")

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
    setTimeout(typeWriterHeader, speed); // Once name is fully typed, start typing the header
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
    contactButtons.classList.remove("hidden")
  }
}
// Start typing the name first





let anchorElements:NodeListOf<Element> = document.querySelectorAll("a") ;

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
