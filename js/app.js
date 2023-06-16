window.onscroll = () => {
  let nav = document.querySelector(".nav-wrapper");
  let logo = document.querySelector(".header__nav--logo-img");
  if (window.pageYOffset > 450) {
    nav.classList.add("fixed");
    logo.src = "/public/img/YourTour.svg";
  } else {
    nav.classList.remove("fixed");
    logo.src = "/public/img/YourTour.png";
  }
};
