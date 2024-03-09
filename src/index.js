import { addWork } from "./works";
import { work_list } from "./works";
const nameSection = document.querySelector(".name-section");
const textHeader = document.querySelector(".text-header");
const textPara = document.querySelector(".text-para");
const contactButtons = document.querySelector(".contact-button");
let tabLinks = Array.from(document.getElementsByClassName("tablinks"));
let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
let navBar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-icon");
let closeBtn = document.getElementById("closeBtn");
let workButton = document.querySelector(".my-work-button");
let workList = document.querySelector(".workdone-list");
let nameNum = 0;
let headerNum = 0;
let paraNum = 0;
let nameText = "Hello! I'm Oladunjoye Olasubomi";
let headerText = "A Web Developer based in Lagos, Nigeria.";
let paraText = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed = 25;
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
let sections = {};
tabcontents.forEach((element) => {
    sections[element.id] = element.offsetTop;
});
window.onscroll = () => {
    var _a, _b;
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i in sections) {
        if (sections[i] <= scrollPosition) {
            (_a = document.querySelector(".active")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", "");
            (_b = document
                .querySelector("a[href*=" + i + "]")) === null || _b === void 0 ? void 0 : _b.setAttribute("class", "active");
        }
    }
};
tabLinks.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
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
const work_done = [
    {
        id: 1,
        title: "My First Work",
        description: "This is my first work",
        github_link: "edwesd.com",
        live_link: "edwesd.com",
    },
    {
        id: 2,
        title: "My Second Work",
        description: "This is my second work",
        github_link: "",
        live_link: "",
    },
    {
        id: 3,
        title: "My Third Work",
        description: "This is my third work",
        github_link: "",
        live_link: "",
    },
    {
        id: 4,
        title: "My Fourth Work",
        description: "This is my fourth work",
        github_link: "",
        live_link: "",
    },
    {
        id: 5,
        title: "My Fifth Work",
        description: "This is my fifth work",
        github_link: "",
        live_link: "",
    },
];
work_done.forEach((work) => {
    addWork(work);
});
const addWorkToList = () => {
    let listHtml = "";
    work_list.forEach((work, index) => {
        listHtml += `<li class="workdone-item">
    <div class="card">
      <div class="title">
        <h3 class="work-title>">${work.title}</h3>
      </div>
      <div class="description">
        <p class="work-description">
          ${work.description}
        </p>
      </div>
      <div class="work-links">
        <a
          href="https://${work.github_link}"
          target="_blank"
          rel="noopener"
          class="work-link"
          >Github Link</a
        >
        ${work.live_link ? `<a href="https://${work.live_link}" target="_blank" rel="noopener" class="work-link">Live Link</a>` : ""}
      </div>
    </div>
  </li>`;
    });
    workList.innerHTML = listHtml;
};
addWorkToList();
document.addEventListener("DOMContentLoaded", () => {
    typeWriterName();
});
