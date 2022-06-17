const randomImgRender = (function () {
  let mainImgs = [
    "/images/freepik/freepik_background_ (1).jpg",
    "/images/freepik/freepik_background_ (2).jpg",
    "/images/freepik/freepik_background_ (3).jpg",
  ];
  let mainImgSelect = mainImgs[Math.floor(Math.random() * mainImgs.length)]

  document.getElementById("subTitle_section").innerHTML +=
    '<img src="' + mainImgSelect + '" class="scrolled fade-in"/>'
})();

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});


let CPSP2Render = () => {
  
}


let CPS = document.querySelectorAll("div.colorContainer")
CPS.forEach((ele) => {
  ele.addEventListener("click", () => {
    console.log(ele.id)

    if (ele.id == "black") {
      document.getElementById("colorPick_section").innerHTML = 
      '<div id="select_genre">`${ele.id}`</div>'
    } else if (ele.id == "gray") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "violet") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "yellow") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "white") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "orange") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "red") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "blue") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    } else if (ele.id == "green") {
      //function 구현 해야 함 > 컬러에 맞는 태그 불러오기
    }
  })
});