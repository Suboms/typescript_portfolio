var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let workList = document.querySelector(".workdone-list");
const work_list = [];
function addWork(work) {
    work_list.push(work);
    return work_list;
}
const work_done = [
    {
        id: 1,
        title: "Data Generation and Export Tool",
        description: 'The "Data Generation and Export Tool" is a versatile command-line application built with Django and various Python libraries and modules. Its primary objective is to simplify the process of creating a database model, populating it with synthetic data in bulk, and then exporting this data into CSV and Excel files for streamlined data analysis.',
        github_link: "github.com/Suboms/data_analysis",
    },
    {
        id: 2,
        title: "Quote Generator App",
        description: "Random Quote Generator app, a sleek and efficient tool built with HTML, CSS, JavaScript, and Fetch API technology. This application simplifies the process of fetching random quotes, providing users with a seamless and intuitive experience. With just a click, users can generate inspiring quotes instantly. The minimalist design ensures ease of use, while the Fetch API integration ensures real-time updates from external sources",
        github_link: "github.com/Suboms/Random-Quote-Generator",
        live_link: "random-quote-generator-lac.vercel.app/",
    },
];
work_done.forEach((work) => {
    addWork(work);
});
if (work_list.length > 6) {
    let elementsToRemove = work_list.length - 6;
    work_list.splice(0, elementsToRemove);
}
work_list.sort((a, b) => b.id - a.id);
export const addWorkToList = () => __awaiter(void 0, void 0, void 0, function* () {
    let listHtml = "";
    work_list.forEach((work, index) => {
        listHtml += `<li class="workdone-item">
    <div class="work-card">
      <div class="work-name">
        <h3 class="work-title">${work.title}</h3>
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
          class="work-link" id="work-link-one"
          >Github Link</a
        >
        ${work.live_link
            ? `<a href="https://${work.live_link}" target="_blank" rel="noopener" class="work-link" id="work-link-two">Live Link</a>`
            : ""}
      </div>
    </div>
  </li>`;
    });
    workList.innerHTML = listHtml;
});
