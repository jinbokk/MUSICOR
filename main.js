const APIController = (function () {

  const clientId = 'f5d847d6012d455ab5e1c80a3011f215';
  const clientSecret = 'a5fbc11da2cf4878a5bdd9998a14c64a';

  const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant+type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
  }

})();

const _getGenres = async (token) => {

  const result = await fetch('https://api.spotify.com/v1/brows/categories?locale=sv_US', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer' + token
    }
  });

  const data = await result.json();
  return data.categories.items;
}

console.log(_getGenres())