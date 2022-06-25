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
  const genres_gray = [data.genres[52], data.genres[2], data.genres[94], data.genres[16]];
  const genres_violet = [data.genres[94]];
  const genres_yellow = [data.genres[94], data.genres[100]];
  const genres_white = [data.genres[4], data.genres[85]];
  const genres_orange = [data.genres[18], data.genres[31], data.genres[124]];
  const genres_red = [data.genres[8]];
  const genres_blue = [data.genres[94]];
  const genres_green = [data.genres[0], data.genres[110], data.genres[115]];

  const colorContainer = document.querySelector(".colorPick_container");

  colorContainer.addEventListener("click", (e) => {
    const color = e.target
    if (color.classList.contains('colorContainer')) {

      const genresByColor = eval(`genres_${color.id}`);
      const num = (Math.floor(Math.random() * genresByColor.length));
      const genreIdByColor = genresByColor[num];

      const getTrackByGenre = async () => {

        const token = await getToken();
        const genreId = genreIdByColor;


        if (color.id == "black") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0.9&target_danceability=0.1&min_tempo=50&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)



//img,title,artist 등 전역변수로 빼서 코드리펙토링 해야겠다..

          const detailDiv = document.getElementById("song_detail");
          // any time user clicks a new song, we need to clear out the song detail div
          detailDiv.innerHTML = '';
          const html =
            `
      <div>
          <img class="albumCover" src="${previewImgURL}" alt="">
          <div class="albumCover_text">
              <h2><label for="Genre">${title}</label></h2>
              <p><label for="artist">By ${artist}</label></p>
          </div>        
      </div>
  `;






          detailDiv.innerHTML += html
        } else if (color.id == "gray") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0.1&target_danceability=0.1&min_tempo=40&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          console.log(num)
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "violet") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0.5&target_danceability=0.5&min_tempo=60&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "yellow") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0.9&target_danceability=0.9&min_tempo=144&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "white") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&min_instrumentalness=0.9&target_energy=0&target_danceability=0&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "orange") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=1&target_danceability=1&min_tempo=80&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "red") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0.2&target_danceability=0.2&max_tempo=60&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "blue") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0.7&target_danceability=0.7&min_tempo=60&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        } else if (color.id == "green") {
          console.log(genreId)
          const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&target_energy=0&target_danceability=0&man_tempo=70&min-popularity=80`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          const data = await result.json();
          console.log(data)
          const num = (Math.floor(Math.random() * data.tracks.length));
          const previewURL = data.tracks[num].preview_url
          const previewImgURL = data.tracks[num].album.images[0].url
          console.log(previewImgURL)
          console.log(previewURL)
        }
      }
      getTrackByGenre();
    } else {
      return;
    }
  })
}
giveGenreToColor();


// const renderHTML = async () => {

//   let data = await giveGenreToColor()
//   console.log(data)

// }
// renderHTML()