interface ScrollSpyItem {
  id: string;
  offset: number;
}

export function scrollSpy(offset: number = 0, sections: HTMLElement[]) {
  const items: ScrollSpyItem[] = [];

  sections.forEach((section) => {
    items.push({ id: section.id, offset });
  });

  const setActiveClass = () => {
    const currentPosition = window.scrollY + offset;

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element) return;

      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.clientHeight;

      if (elementTop <= currentPosition && currentPosition < elementBottom) {
        document
          .querySelectorAll("a[href='#" + item.id + "']")
          .forEach((anchor) => {
            anchor.classList.add("active");
          });
      } else {
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
}
