const randomImgRender = () => {
  let mainImgs = [
    "/images/freepik/freepik_background_ (1).jpg",
    "/images/freepik/freepik_background_ (2).jpg",
    "/images/freepik/freepik_background_ (3).jpg",
  ];
  let mainImgSelect = mainImgs[Math.floor(Math.random() * mainImgs.length)]

  document.getElementById("subTitle_section").innerHTML +=
  '<img src="'+mainImgSelect+'"/>'
}
randomImgRender()

// ----------------------------------------- swiper 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView : 3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});