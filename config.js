var request = require('request');
var client_id = 'f5d847d6012d455ab5e1c80a3011f215';
var client_secret = 'a5fbc11da2cf4878a5bdd9998a14c64a';

var authOptions = {
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
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});