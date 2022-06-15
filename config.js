let request = require('request');
let client_id = 'f5d847d6012d455ab5e1c80a3011f215';
let client_secret = 'a5fbc11da2cf4878a5bdd9998a14c64a';

let authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    let token = body.access_token;
    console.log(token)
  }
});