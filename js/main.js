const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper__button_next",
    prevEl: ".swiper__button_prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const tabsBtn = document.querySelectorAll(".tabs__btn");
  const tabsContent = document.querySelectorAll(".tabs__content");

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs__btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove("tabs__btn_active");
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add("tabs__btn_active");
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains("tabs__arrow_prev")) {
        let activeBtn = document.querySelector(".tabs__btn_active");
        let activeParent = activeBtn.closest(".tabs__item");
        let previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          let prevActive = previousParent.querySelector(".tabs__btn");
          tabsBtn.forEach((el) => {
            el.classList.remove("tabs__btn_active");
          });
          prevActive.classList.add("tabs__btn_active");

          let path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains("tabs__arrow_next")) {
        let activeBtn = document.querySelector(".tabs__btn_active");
        let activeParent = activeBtn.closest(".tabs__item");
        let nextParent = activeParent.nextElementSibling;

        if (nextParent) {
          let nextActive = nextParent.querySelector(".tabs__btn");
          tabsBtn.forEach((el) => {
            el.classList.remove("tabs__btn_active");
          });
          nextActive.classList.add("tabs__btn_active");

          let path = nextActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove("tabs__content_active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content_active");
  };
});
