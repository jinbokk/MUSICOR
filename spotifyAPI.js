// let request = require('request');
// let client_id = 'f5d847d6012d455ab5e1c80a3011f215';
// let client_secret = 'a5fbc11da2cf4878a5bdd9998a14c64a';

// let authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// let getToken = request.post(authOptions, function (error, response, body) {
//   if (!error && response.statusCode === 200) {
//     return body.access_token;
//   }
// });

// console.log(getToken)


const APIController = (function() {
    
  const clientId = 'f5d847d6012d455ab5e1c80a3011f215';
  const clientSecret = 'a5fbc11da2cf4878a5bdd9998a14c64a';

  const _getToken = async () => {

      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
      });

      const data = await result.json();
      return data.access_token;
  }
  
  const _getGenres = async (token) => {

      const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.categories.items;
  }

  const _getPlaylistByGenre = async (token, genreId) => {

      const limit = 10;
      
      const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.playlists.items;
  }

  const _getTracks = async (token, tracksEndPoint) => {

      const limit = 10;

      const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data.items;
  }

  const _getTrack = async (token, trackEndPoint) => {

      const result = await fetch(`${trackEndPoint}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const data = await result.json();
      return data;
  }

  return {
      getToken() {
          return _getToken();
      },
      getGenres(token) {
          return _getGenres(token);
      },
      getPlaylistByGenre(token, genreId) {
          return _getPlaylistByGenre(token, genreId);
      },
      getTracks(token, tracksEndPoint) {
          return _getTracks(token, tracksEndPoint);
      },
      getTrack(token, trackEndPoint) {
          return _getTrack(token, trackEndPoint);
      }
  }
})();