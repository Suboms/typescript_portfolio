var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nameSection = document.querySelector(".name-section");
const textHeader = document.querySelector(".text-header");
const textPara = document.querySelector(".text-para");
const contactButtons = document.querySelector(".contact-buttons");
let nameNum = 0;
let headerNum = 0;
let paraNum = 0;
let nameText = `Hello! I'm <em>Oladunjoye <br>Olasubomi</em>`;
let headerText = "A Web Developer based in <br>Lagos, Nigeria.";
let paraText = `Web developer specializing in front-end and back-end. Available for freelance projects and new opportunities.`;
let speed = 25;
let displayNameText = "";
let displayHeaderText = "";
export function typeWriterName() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
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
