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
  console.log(token)


  const getAvailableGenreSeeds = async (token) => {

    const result = await fetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    const data = await result.json();
    console.log(data)
  }
  getAvailableGenreSeeds(token)
}
getToken();