// write a function to retrieve a blob of json
// make an ajax request! Use the 'fetch' function.

// function fetchAlbums() {
//   fetch('http://rallycoding.herokuapp.com/api/music_albums');
//     .then(res =>res.json())
//     .then(json => console.log(json));
// }

async function fetchAlbum() {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json);
}

fetchAlbums();
