import { addWork } from "./works.js";
import { work_list } from "./works.js";
import { Work } from "./works.js";

const nameSection = document.querySelector(
  ".name-section"
) as HTMLHeadingElement;
const textHeader = document.querySelector(".text-header") as HTMLHeadingElement;
const textPara = document.querySelector(".text-para") as HTMLParagraphElement;
const contactButtons = document.querySelector(
  ".contact-button"
) as HTMLDivElement;
let tabLinks = Array.from(
  document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>
);
let tabcontents = Array.from(
  document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>
);
let navBar = document.querySelector(".navbar") as HTMLDivElement;
let menuIcon = document.querySelector(".menu-icon") as HTMLDivElement;
let closeBtn = document.getElementById("closeBtn") as HTMLAnchorElement;
let workButton = document.querySelector(".my-work-button") as HTMLButtonElement;
let workList = document.querySelector(".workdone-list") as HTMLOListElement;
let nameNum: number = 0;
let headerNum: number = 0;
let paraNum: number = 0;
let nameText: string = `Hello! I'm <em>Oladunjoye Olasubomi</em>`;
let headerText: string = "A Web Developer based in Lagos, Nigeria.";
let paraText: string = `Passionate web developer specializing in both front-end and
back-end technologies. Available for freelance projects and eager
for new opportunities.`;
let speed: number = 25;
let displayText: string = "";

function typeWriterName() {
  if (nameNum < nameText.length) {
    displayText += nameText[nameNum];
    nameSection.innerHTML = displayText;
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

// let sections: { [key: string]: number } = {};
// tabcontents.forEach((element: HTMLElement) => {
//   sections[element.id] = element.offsetTop;
// });
// window.onscroll = () => {
//   let scrollPosition =
//     document.documentElement.scrollTop || document.body.scrollTop;
//   for (let i in sections) {
//     if (sections[i] <= scrollPosition) {
//       document.querySelector(".active")?.setAttribute("class", "");
//       document
//         .querySelector("a[href*=" + i + "]")
//         ?.setAttribute("class", "active");
//     }
//   }
// };

interface ScrollSpyItem {
  id: string;
  offset: number;
}

function scrollSpy(offset: number = 0, sections: HTMLElement[]) {
  const items: ScrollSpyItem[] = [];

  sections.forEach((section) => {
    items.push({ id: section.id, offset });
  });

  window.addEventListener("scroll", () => {
    const currentPosition = window.scrollY + offset;

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element) return;

      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.clientHeight;

      if (currentPosition >= elementTop && currentPosition <= elementBottom) {
        console.log(`Element ${item.id} is in view.`);
        document.querySelector(".active")?.setAttribute("class", "");
        document
          .querySelector("a[href*=" + item.id + "]")
          ?.setAttribute("class", "active");
      }
    });
  });
}

scrollSpy(100, tabcontents);

tabLinks.forEach((element: HTMLElement) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
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

const work_done: Array<{
  id: number;
  title: string;
  description: string;
  github_link: string;
  live_link?: string;
}> = [
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

work_done.forEach((work: Work) => {
  addWork(work);
});
const addWorkToList = () => {
  let listHtml = "";
  work_list.forEach((work: Work, index: number) => {
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
        ${
          work.live_link
            ? `<a href="https://${work.live_link}" target="_blank" rel="noopener" class="work-link">Live Link</a>`
            : ""
        }
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
