const randomImgRender = () => {
  let mainImgs = [
    "/images/freepik/freepik_background_ (1).jpg",
    "/images/freepik/freepik_background_ (2).jpg",
    "/images/freepik/freepik_background_ (3).jpg",
  ];
  let mainImgSelect = mainImgs[Math.floor(Math.random() * mainImgs.length)]

  document.getElementById("subTitle_section").innerHTML +=
    '<img src="' + mainImgSelect + '"/>'

  // 아래는 colorPick section 이미지 랜더링이다
  // 1. 먼저 이미지 가져오고
  let blackImgs = [
    "/images/Pexels/black/pexels_black.jpg",
  ];
  let grayImgs = [
    "/images/Pexels/gray/pexels_gray_ (1).jpg",
    "/images/Pexels/gray/pexels_gray_ (2).jpg",
    "/images/Pexels/gray/pexels_gray_ (3).jpg",
    "/images/Pexels/gray/pexels_gray_ (4).jpg",
    "/images/freepik/gray/freepik_gray_ (1).jpg",
    "/images/freepik/gray/freepik_gray_ (2).jpg"
  ];
  let violetImgs = [
    "/images/Pexels/violet/pexels_violet.jpg",
    "/images/freepik/violet/freepik_violet_ (1).jpg",
    "/images/freepik/violet/freepik_violet_ (2).jpg"
  ];
  let yellowImgs = [
    "/images/Pexels/yellow/pexels_yellow.jpg",
    "/images/freepik/yellow/freepik_yellow_(1).jpg"
  ];
  let whiteImgs = [
    "/images/Pexels/white/pexels_white_ (1).jpg",
    "/images/Pexels/white/pexels_white_ (2).jpg",
    "/images/freepik/white/freepik_white_ (1).jpg",
    "/images/freepik/white/freepik_white_ (2).jpg"
  ];
  let orangeImgs = [
    "/images/Pexels/orange/pexels_orange_ (1).jpg",
    "/images/Pexels/orange/pexels_orange_ (2).jpg",
    "/images/Pexels/orange/pexels_orange_ (3).jpg",
  ];
  let redImgs = [
    "/images/freepik/red/freepik_red_ (1).jpg",
    "/images/freepik/red/freepik_red_ (2).jpg"
  ];
  let blueImgs = [
    "/images/Pexels/blue/pexels_blue_ (1).jpg",
    "/images/Pexels/blue/pexels_blue_ (2).jpg",
    "/images/freepik/blue/freepik_blue_ (1).jpg",
    "/images/freepik/blue/freepik_blue_ (2).jpg"
  ];
  let greenImgs = [
    "/images/Pexels/green/pexels_green.jpg",
    "/images/freepik/green/freepik_green_ (1).jpg",
    "/images/freepik/green/freepik_green_ (2).jpg"
  ];

  let blackImgSelect = blackImgs[Math.floor(Math.random() * blackImgs.length)]
  let grayImgSelect = grayImgs[Math.floor(Math.random() * grayImgs.length)]
  let violetImgSelect = violetImgs[Math.floor(Math.random() * violetImgs.length)]
  let yellowImgSelect = yellowImgs[Math.floor(Math.random() * yellowImgs.length)]
  let whiteImgSelect = whiteImgs[Math.floor(Math.random() * whiteImgs.length)]
  let orangeImgSelect = orangeImgs[Math.floor(Math.random() * orangeImgs.length)]
  let redImgSelect = redImgs[Math.floor(Math.random() * redImgs.length)]
  let blueSelect = blueImgs[Math.floor(Math.random() * blueImgs.length)]
  let greenSelect = greenImgs[Math.floor(Math.random() * greenImgs.length)]

  document.getElementsByClassName("black").innerHTML +=
    '<img src="' + blackImgSelect + '"/>'
  document.getElementsByClassName("gray").innerHTML +=
    '<img src="' + grayImgSelect + '"/>'
  document.getElementsByClassName("violet").innerHTML +=
    '<img src="' + violetImgSelect + '"/>'
  document.getElementsByClassName("yellow").innerHTML +=
    '<img src="' + yellowImgSelect + '"/>'
  document.getElementsByClassName("white").innerHTML +=
    '<img src="' + whiteImgSelect + '"/>'
  document.getElementsByClassName("orange").innerHTML +=
    '<img src="' + orangeImgSelect + '"/>'
  document.getElementsByClassName("red").innerHTML +=
    '<img src="' + redImgSelect + '"/>'
  document.getElementsByClassName("blue").innerHTML +=
    '<img src="' + blueSelect + '"/>'
  document.getElementsByClassName("green").innerHTML +=
    '<img src="' + greenSelect + '"/>'

  // 2. 각각의 컬러 클래스 이름에 맞게 이미지 들어갈 수 있도록 하고
  // 3. 그 이미지는 백그라운드 스타일 처리 한다
}
randomImgRender()
