const API_KEY = '93580a7f0ca5f935ad0b81c9ee349049';
export const fetchTrendingMovies = () =>
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
`).then(r => r.json());
