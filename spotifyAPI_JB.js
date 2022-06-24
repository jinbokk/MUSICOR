// Get Access Token value
const getToken = async () => {
  const clientId = 'f5d847d6012d455ab5e1c80a3011f215';
  const clientSecret = 'a5fbc11da2cf4878a5bdd9998a14c64a';

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  const token = data.access_token;

  return token;
}
getToken();


// Get Available Genre Seeds to give genre to color
const getAvailableGenreSeeds = async () => {

  const token = await getToken();

  const result = await fetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const data = await result.json();
  return data;
};


// Give genre to color from genre seeds
const giveGenreToColor = async () => {

  const data = await getAvailableGenreSeeds();
  console.log(data);

  const genres_black = [data.genres[52]];
  const genres_gray = [data.genres[2], data.genres[16], data.genres[103]];
  const genres_violet = [data.genres[12], data.genres[95]];
  const genres_yellow = [data.genres[21], data.genres[47]];
  const genres_white = [data.genres[4], data.genres[85]];
  const genres_orange = [data.genres[18], data.genres[31], data.genres[124]];
  const genres_red = [data.genres[8], data.genres[66], data.genres[102]];
  const genres_blue = [data.genres[67], data.genres[94], data.genres[100]];
  const genres_green = [data.genres[0], data.genres[9], data.genres[110], data.genres[115]];

  console.log(genres_black);
  console.log(genres_gray);
  console.log(genres_violet);
  console.log(genres_yellow);
  console.log(genres_white);
  console.log(genres_orange);
  console.log(genres_red);
  console.log(genres_blue);
  console.log(genres_green);

  const DOMElements = {
    black: '#black',
    gray: '#gray',
    violet: '#violet',
    yellow: '#yellow',
    white: '#white',
    orange: '#orange',
    red: '#red',
    blue: '#blue',
    green: '#green'
  }
  console.log(DOMElements);


  // Select specific genreId by colorContainer's colorId
  // const colorContainer = document.querySelectorAll("div .colorContainer");
  // console.log(colorContainer);

  // colorContainer.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     const genresByColor = eval(`genres_${e.id}`);
  //     console.log(genresByColor);
  //     const num = (Math.floor(Math.random() * genresByColor.length));
  //     console.log(num);
  //     const genreIdByColor = genresByColor[num];
  //     console.log(genresByColor[num]);
  //     return genreIdByColor;
  //   });
  // });

  // // const genreId = aa
  // // return genreId;
  // 위 방식을 이벤트 위임 방식으로 처리하는 것이 옳다고 답변을 받았다.

  const colorContainer = document.querySelectorAll("div .colorContainer");
  console.log(colorContainer)

  // colorContainer.addEventListener("click", (e) => {
  //   console.log(e.target);
    // const genresByColor = eval(`genres_${e.id}`);
    // console.log(genresByColor);
    // const num = (Math.floor(Math.random() * genresByColor.length));
    // console.log(num);
    // const genreIdByColor = genresByColor[num];
    // console.log(genresByColor[num]);
    // return genreIdByColor;
  // })

}
giveGenreToColor();



// let testing = async () => {
//   let test = await giveGenreToColor();
//   console.log(test)
// }
// testing()



// // Get Track By Genre
// const getTrackByGenre = async () => {

//   const token = await getToken();
//   const genreId = await giveGenreToColor();
//   console.log(genreId)
//   const limit = 10;

//   const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + token
//     }
//   });

//   const data = await result.json();
//   console.log(data)
//   return data.playlists.items;

// }
// getTrackByGenre();

// Get Track
// const getTrack = async () => {

//   const token = await getToken();

//   const result = await fetch(`${trackEndPoint}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + token
//     }
//   });

//   const data = await result.json();
//   return data;
// }
// getTrack();