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
  const genreData = await getAvailableGenreSeeds();

  const genreSet = {
    genres_black: [genreData.genres[52]],
    genres_gray: [genreData.genres[52], genreData.genres[2], genreData.genres[94], genreData.genres[16]],
    genres_violet: [genreData.genres[94]],
    genres_yellow: [genreData.genres[94], genreData.genres[100]],
    genres_white: [genreData.genres[4], genreData.genres[85]],
    genres_orange: [genreData.genres[18], genreData.genres[31], genreData.genres[124]],
    genres_red: [genreData.genres[8]],
    genres_blue: [genreData.genres[94]],
    genres_green: [genreData.genres[0], genreData.genres[110], genreData.genres[115]]
  }

  const searchIndexByColor = {
    black: 'target_energy=0.9&target_danceability=0.1&min_tempo=50',
    gray: 'target_energy=0.1&target_danceability=0.1&min_tempo=40',
    violet: 'target_energy=0.5&target_danceability=0.5&min_tempo=60',
    yellow: 'target_energy=0.9&target_danceability=0.9&min_tempo=144',
    white: 'min_instrumentalness=0.9&target_energy=0&target_danceability=0',
    orange: 'target_energy=1&target_danceability=1&min_tempo=80',
    red: 'target_energy=0.2&target_danceability=0.2&max_tempo=60',
    blue: 'target_energy=0.7&target_danceability=0.7&min_tempo=60',
    green: 'target_energy=0&target_danceability=0&man_tempo=70'
  }

  const colorContainer = document.querySelector(".colorPickContainer");

  colorContainer.addEventListener("click", (e) => {

    const color = e.target
    const colorId = color.id

    if (color.classList.contains('colorContainer')) {

      const colorPickSection = document.getElementById("color_container")

      gsap.to(colorPickSection, {
        duration: 1,
        scale: .9,
      }).then(gsap.to(colorPickSection, {
        duration: 2,
        opacity: 0,
        ease: "power4.out",
        x: "-100%",
        delay: .3
      }))

      const searchIndex = eval(`searchIndexByColor.${colorId}`);
      const genresByColor = eval(`genreSet.genres_${colorId}`);
      const num = (Math.floor(Math.random() * genresByColor.length));
      const genreIdByColor = genresByColor[num];

      const getTrackByGenre = async () => {
        const token = await getToken();
        const genreId = genreIdByColor;
        const result = await fetch(`https://api.spotify.com/v1/recommendations/?seed_genres=${genreId}&market=US&${searchIndex}&min-popularity=90?limit=30`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        console.log(result)

        const data = await result.json();
        const num = (Math.floor(Math.random() * data.tracks.length));
        const targetData = data.tracks[num];
        const previewSongURL = targetData.preview_url;
        const previewImgURL = targetData.album.images[1].url;
        const title = targetData.name;
        const artist = targetData.artists[0].name;

        const detailDiv = document.getElementById("song_detail");
        // detailDiv.style.display = "block";

        detailDiv.innerHTML = '';

        const html =
          `
          <div class="musicPlayContainer" id="music_player">
            <div>
              <img class="albumCover" src="${previewImgURL}">\
              <button class="anotherColorBtn"id="anotherColor_btn">ANOTHER COLOR</button>
              <button class="shuffleBtn" id="shuffle_btn">SHUFFLE</button> 
            </div>
            <div class="albumCover_text">
              <h2>${title}</h2>
              <h5>By ${artist}</h5>
            </div>
            <div class="UIContainer">
              <i class="fa-solid fa-backward" id="backward_btn"></i>
              <i class="fa-solid fa-circle-play" id="play_btn"></i>
              <i class="fa-solid fa-circle-pause" id="pause_btn"></i>
              <i class="fa-solid fa-forward" id="forward_btn"></i>
              <i class="fa-solid fa-heart" id="like_song"></i>
            </div>
            <div class="UIComment" id="UI_comment">
              <p>30 seconds of preview will be provided by spotify</p>
            </div>
          </div>
        `;

        console.log(html)

        detailDiv.innerHTML += html


        const backgroundColor = {
          black: "rgba(0, 0, 0, 0.9)",
          gray: "rgba(50, 50, 50, 0.9)",
          violet: "rgba(100, 16, 100, 0.9)",
          yellow: "rgba(230, 211, 0, 0.5)",
          white: "rgba(173, 173, 173, 0.9)",
          orange: "rgb(255, 115, 0, 0.5)",
          red: "rgba(183, 21, 21, 0.5)",
          blue: "rgba(36, 36, 160, 0.9)",
          green: "rgb(0, 83, 8, 0.9)"
        }

        document.getElementById("colorPick_section").style.transition = "1s"
        document.getElementById("colorPick_section").style.backgroundColor = eval(`backgroundColor.${colorId}`)

        gsap.to(detailDiv, {
          duration: .5,
          x: "0",
          scale: .95,
        }).then(gsap.to(detailDiv, {
          duration: .5,
          x: "0",
          opacity: 1,
          ease: "power4.in",
        }))

        let audio = new Audio(previewSongURL)

        const playBtn = document.getElementById("play_btn")
        const pauseBtn = document.getElementById("pause_btn")
        const forwardBtn = document.getElementById("forward_btn")
        const backwardBtn = document.getElementById("backward_btn")
        const likeSongBtn = document.getElementById("like_song")

        const anotherColorBtn = document.getElementById("anotherColor_btn")
        const shuffleBtn = document.getElementById("shuffle_btn")

        anotherColorBtn.addEventListener("click", () => {
          audio.pause()
          document.getElementById("colorPick_section").style.removeProperty("background-color");
          detailDiv.style.display = "";

          gsap.to(detailDiv, {
            duration: .5,
            scale: .95,
          }).then(gsap.to(detailDiv, {
            duration: .5,
            x: "200%",
            opacity: 0,
            ease: "power4.in",
          }))

          gsap.to(colorPickSection, {
            duration: 1,
            scale: .9,
          }).then(gsap.to(colorPickSection, {
            duration: 2,
            opacity: 1,
            ease: "power4.out",
            x: "0",
            delay: .3
          }))
        })

        shuffleBtn.addEventListener("click", () => {
          audio.pause()
          getTrackByGenre()
          return
        })


        playBtn.addEventListener("click", () => {
          if (audio.src == "http://127.0.0.1:5500/null") {
            const alertWindow = document.getElementById("UI_comment")
            alertWindow.innerHTML = `
            <p style="color:red">Sorry, this music does not provide a preview</p>
            <p style="color:red">Please select a different music</p>
            `
            return
          } else {
            audio.volume = 1,
            audio.play()
            return
          }
        })

        pauseBtn.addEventListener("click", () => {
          audio.pause()
          return
        })

        forwardBtn.addEventListener("click", () => {
          audio.pause()
          getTrackByGenre()
          return
        })

        backwardBtn.addEventListener("click", () => {
          audio.pause()
          getTrackByGenre()
          return
        })

        likeSongBtn.addEventListener("click", (e) => {
          if (e.target.style.filter == false) {
            e.target.style.filter = "invert(15%) sepia(81%) saturate(7389%) hue-rotate(358deg) brightness(102%) contrast(116%)"
          } else {
            e.target.style.removeProperty("filter")
          }
        })
      }
      getTrackByGenre();
    } else {
      return;
    }
  })
};
giveGenreToColor();