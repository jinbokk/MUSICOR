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


const getAvailableGenreSeeds = async () => {

  const token = await getToken();

  const result = await fetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const data = await result.json();
  console.log(data)
  console.log(data.genres[2])
};
getAvailableGenreSeeds();


// const giveGenreToColor = async () => {
//   let DOMElements = {
//     black: '#black',
//     gray: '#gray',
//     violet: '#violet',
//     yellow: '#yellow',
//     white: '#white',
//     orange: '#orange',
//     red: '#red',
//     blue: '#blue',
//     green: '#green'
//   }
//   console.log(DOMElements)


// }
// giveGenreToColor()