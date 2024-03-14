var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function scrollSpy(offset = 0, sections) {
    return __awaiter(this, void 0, void 0, function* () {
        const items = [];
        sections.forEach((section) => {
            items.push({ id: section.id, offset });
        });
        const setActiveClass = () => {
            const currentPosition = window.scrollY + offset;
            items.forEach((item) => {
                const element = document.getElementById(item.id);
                if (!element)
                    return;
                const elementTop = element.offsetTop;
                const elementBottom = elementTop + element.clientHeight;
                if (elementTop <= currentPosition && currentPosition < elementBottom) {
                    document
                        .querySelectorAll("a[href='#" + item.id + "']")
                        .forEach((anchor) => {
                        anchor.classList.add("active");
                    });
                }
                else {
                    document
                        .querySelectorAll("a[href='#" + item.id + "']")
                        .forEach((anchor) => {
                        anchor.classList.remove("active");
                    });
                }
            });
        };
        // Initial activation check
        setActiveClass();
        // Add event listener for scrolling
        window.addEventListener("scroll", setActiveClass);
    });
}
