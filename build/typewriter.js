const nameSection = document.querySelector(".name-section");
const textHeader = document.querySelector(".text-header");
const textPara = document.querySelector(".text-para");
const contactButtons = document.querySelector(".contact-button");
let nameNum = 0;
let headerNum = 0;
let paraNum = 0;
let nameText = `Hello! I'm <em>Oladunjoye <br>Olasubomi</em>`;
let headerText = "A Web Developer based in <br>Lagos, Nigeria.";
let paraText = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed = 25;
let displayNameText = "";
let displayHeaderText = "";
export function typeWriterName() {
    if (nameNum < nameText.length) {
        displayNameText += nameText[nameNum];
        nameSection.innerHTML = displayNameText;
        nameNum++;
        setTimeout(typeWriterName, speed);
    }
    else {
        setTimeout(typeWriterHeader, speed);
    }
}
function typeWriterHeader() {
    if (headerNum < headerText.length) {
        displayHeaderText += headerText[headerNum];
        textHeader.innerHTML = displayHeaderText;
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
