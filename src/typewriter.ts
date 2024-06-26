const nameSection = document.querySelector(
  ".name-section"
) as HTMLHeadingElement;
const textHeader = document.querySelector(".text-header") as HTMLHeadingElement;
const textPara = document.querySelector(".text-para") as HTMLParagraphElement;
const contactButtons = document.querySelector(
  ".contact-buttons"
) as HTMLDivElement;

let nameNum: number = 0;
let headerNum: number = 0;
let paraNum: number = 0;
let nameText: string = `Hello! I'm <em>Oladunjoye <br>Olasubomi</em>`;
let headerText: string = "A Web Developer based in <br>Lagos, Nigeria.";
let paraText: string = `Web developer specializing in front-end and back-end. Available for freelance projects and new opportunities.`
let speed: number = 25;
let displayNameText: string = "";
let displayHeaderText:string = "";

export async function typeWriterName() {
  nameSection.innerHTML = nameText;
  textHeader.innerHTML = headerText;
  textPara.innerHTML = paraText;
  contactButtons.style.display = "flex";
  // if (nameNum < nameText.length) {
  //   displayNameText += nameText[nameNum];
  //   nameSection.innerHTML = displayNameText;
  //   nameNum++;
  //   setTimeout(typeWriterName, speed);
  // } else {
  //   setTimeout(typeWriterHeader, speed);
  // }
}

// async function typeWriterHeader() {
//   if (headerNum < headerText.length) {
//     displayHeaderText += headerText[headerNum]
//     textHeader.innerHTML = displayHeaderText;
//     headerNum++;
//     setTimeout(typeWriterHeader, speed);
//   } else {
//     setTimeout(typeWriterPara, speed);
//   }
// }

// async function typeWriterPara() {
//   if (paraNum < paraText.length) {
//     textPara.innerHTML += paraText.charAt(paraNum);
//     paraNum++;

//     setTimeout(typeWriterPara, speed);
//   } else {
    
//   }
// }
