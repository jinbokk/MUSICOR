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

  const genres_black = [data.genres[52]];
  const genres_gray = [data.genres[2], data.genres[16], data.genres[103]];
  const genres_violet = [data.genres[12], data.genres[95]];
  const genres_yellow = [data.genres[21], data.genres[47]];
  const genres_white = [data.genres[4], data.genres[85]];
  const genres_orange = [data.genres[18], data.genres[31], data.genres[124]];
  const genres_red = [data.genres[8], data.genres[66], data.genres[102]];
  const genres_blue = [data.genres[67], data.genres[94], data.genres[100]];
  const genres_green = [data.genres[0], data.genres[9], data.genres[110], data.genres[115]];

  const colorContainer = document.querySelector(".colorPick_container");

  colorContainer.addEventListener("click", (e) => {
    const color = e.target
    if (color.classList.contains('colorContainer')) {
      
      const genresByColor = eval(`genres_${color.id}`);
      const num = (Math.floor(Math.random() * genresByColor.length));
      const genreIdByColor = genresByColor[num];
      console.log(genreIdByColor)

      const getTrackByGenre = async () => {

        const token = await getToken();
        const genreId = genreIdByColor;
        const limit = 1;
      

        const result = await fetch(`https://api.spotify.com/v1/search?type=track&q=genre:${genreId}&q=year:2022&limit=${limit}&include_external=audio`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        // const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        //   method: 'GET',
        //   headers: {
        //     'Authorization': 'Bearer ' + token
        //   }
        // });
      
        const data = await result.json();
        console.log(data)
        console.log(data.tracks.items)
        const num = (Math.floor(Math.random() * data.tracks.items.length));
        console.log(data.tracks.items[num].preview_url)
        return data;
      }
      getTrackByGenre();
      
    } else {
      return;
    }
  })
}
giveGenreToColor();



// Get Track By Genre

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