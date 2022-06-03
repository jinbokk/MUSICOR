// API Key: c86ba179640ade3c2fa8346ff63f5dc6

// Shared Secret: -

// image api
//https://www.contentful.com/developers/docs/references/images-api/#/reference/changing-formats/progressive-jpegs/retrieve-an-image/console/js


// const getToken = async () => {
//   let url = new URL('http://www.last.fm/api/auth/');

//   let headers = new Headers({
//     'api_key': 'c86ba179640ade3c2fa8346ff63f5dc6'
//   });

//   let response = await fetch(url, {
//     headers: header
//   });

//   let data = await response.json();

//   console.log(data);
// }
// getToken()


const bgImgRender = () => {
  let imgs = [
    "/images/freepik/freepik_background_ (1).webp",
    // "/images/freepik/freepik_background_ (2).webp",
    "/images/freepik/freepik_background_ (3).webp",
    "/images/freepik/freepik_background_ (4).webp"
  ];

  let bg_img = imgs[Math.floor(Math.random() * imgs.length)]

  let bg = document.getElementById("background");

  bg.style.backgroundImage = 'url("' + bg_img + '")';
  bg.style.backgroundRepeat = "no-repeat";
  bg.style.backgroundSize = "contain";
}
bgImgRender()