/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

// var request = require('request'); // "Request" library

// var client_id = 'f5d847d6012d455ab5e1c80a3011f215'; // Your client id
// var client_secret = 'a5fbc11da2cf4878a5bdd9998a14c64a'; // Your secret

// // your application requests authorization
// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/users/jmperezperez',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });
//   }
// });


// var SpotifyWebApi = require('spotify-web-api-node');

// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId: 'f5d847d6012d455ab5e1c80a3011f215',
//   clientSecret: 'a5fbc11da2cf4878a5bdd9998a14c64a',
//   redirectUri: 'https://musicor.netlify.app/callback/'
// });

// spotifyApi.setAccessToken(token);

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//   function (data) {
//     console.log('Artist albums', data.body);
//   },
//   function (err) {
//     console.error(err);
//   }
// );


const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const client_id = process.env.f5d847d6012d455ab5e1c80a3011f215; // Your client id
const client_secret = process.env.a5fbc11da2cf4878a5bdd9998a14c64a; // Your secret
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);   
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}

const getAudioFeatures_Track = async (track_id) => {
  //request token using getAuth() function
  const access_token = await getAuth();
  //console.log(access_token);

  const api_url = `https://api.spotify.com/v1/audio-features/${track_id}`;
  //console.log(api_url);
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    //console.log(response.data);
    return response.data;
  }catch(error){
    console.log(error);
  }  
};

console.log(getAudioFeatures_Track('07A0whlnYwfWfLQy4qh3Tq'));