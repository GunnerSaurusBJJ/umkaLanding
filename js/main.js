// Slider

$(function () {
  $(".slider").slick({
    prevArrow: "<img src='../app/img/slider/slider_left.svg' class='prev'>",
    nextArrow: "<img src='../app/img/slider/slider_right.svg' class='next'>",
    dots: true,
    autoplay: true,
    speed: 600,
  });

  // Fancybox

  $(".fancybox").fancybox({
    helpers: {
      thumbs: {
        width: 70,
        height: 70,
      },
    },
  });
});

// Фиксированное меню

window.onscroll = function () {
  onFixedMenu();
};

let navbar = document.querySelector(".intro__top");
let fixed = navbar.offsetTop;

function onFixedMenu() {
  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

// Модальное окно

const categBtn = document.querySelectorAll(".category__btn"),
  modalWindow = document.querySelector(".modal"),
  modalWindowVideo = document.querySelector(".about-modal");
(close = document.querySelector(".close")),
  (modalVideo = document.querySelector(".about__video"));

categBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalWindow.classList.add("modal-active");
    e.preventDefault();
  });
});

close.addEventListener("click", (e) => {
  modalWindow.classList.remove("modal-active");
});

modalWindow.addEventListener("click", (e) => {
  if (e.target.className == "modal modal-active") {
    modalWindow.classList.remove("modal-active");
  }
});

modalVideo.addEventListener("click", () => {
  modalWindowVideo.classList.add("modal-active");
});
modalWindowVideo.addEventListener("click", (e) => {
  if (e.target.className == "about-modal modal-active") {
    modalWindowVideo.classList.remove("modal-active");
  }
});
