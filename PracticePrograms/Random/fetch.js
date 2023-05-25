async function getPopularMovies() {
  let data = [];
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f0da4eeabfc41aacee7225b73da8b902`
    );
    const responseData = await response.json();
    data = responseData;
  } catch (error) {}
  return data;
}
getPopularMovies().then((data) => console.log(data));
