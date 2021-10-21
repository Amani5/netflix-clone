const API_KEY = "96bb717a98d49e7acf895fac0d93b250";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export default requests;
