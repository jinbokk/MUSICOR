const randomImgRender = (function () {
  let mainImgs = [
    "/images/freepik/freepik_background_ (1).jpg",
    "/images/freepik/freepik_background_ (2).jpg",
    "/images/freepik/freepik_background_ (3).jpg",
  ];
  let mainImgSelect = mainImgs[Math.floor(Math.random() * mainImgs.length)];

  document.getElementById("subTitle_section").innerHTML +=
    '<img src="' + mainImgSelect + '" class="scrolled fade-in"/>';
})();

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

const page_pointer = document.querySelectorAll(".pagePointer span");

const pages = document.querySelectorAll("section");
const navOffsetTop = document.querySelector("nav").offsetHeight;

const firstTop = pages[0].offsetTop - navOffsetTop;
const secondTop = pages[1].offsetTop - navOffsetTop;
const thirdTop = pages[2].offsetTop - navOffsetTop;

page_pointer[0].addEventListener("click", () => {
  window.scroll({
    top: firstTop,
    behavior: "smooth",
  });
});

page_pointer[1].addEventListener("click", () => {
  window.scroll({
    top: secondTop,
    behavior: "smooth",
  });
});

page_pointer[2].addEventListener("click", () => {
  window.scroll({
    top: thirdTop,
    behavior: "smooth",
  });
});
