window.onscroll = () => {
  let nav = document.querySelector(".header__nav-wrapper");
  let logo = document.querySelector(".logo__img");
  if (window.pageYOffset > 450) {
    nav.classList.add("fixed");
    logo.src = "/public/img/header/YourTour.svg";
  } else {
    nav.classList.remove("fixed");
    logo.src = "/public/img/header/YourTour.png";
  }
};

addEventListener("click", (e) => {
  if (e.target.classList.value == "section-1-menu__link") {
    const list = document.querySelector(".section-1__menu");
    for (let i = 0; i < list.childElementCount; i++) {
      list.children.item(i).classList.remove("active");
    }

    e.target.closest(".section-1-menu__item").classList.add("active");
  }
});
