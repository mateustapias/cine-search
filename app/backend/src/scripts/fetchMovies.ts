import axios from 'axios';
import { IMovie } from '../interfaces/movie';

async function fetchMovies(): Promise<IMovie[] | undefined> {
  const movies: IMovie[][] = [];
  try {
    for (let page = 1; page <= 20; page += 1) {
      const config = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
          language: 'pt-BR',
          page,
        },
      };
      // eslint-disable-next-line no-await-in-loop
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', config);
      movies.push(response.data.results);
    }

    const flattenedMovies = movies.flat();

    const filteredMovies = flattenedMovies.map((movie: IMovie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    }));
    // console.log(filteredMovies.length)
    // console.log(typeof filteredMovies[0].id);
    // console.log(typeof filteredMovies[0].overview);
    // console.log(typeof filteredMovies[0].poster_path);
    // console.log(typeof filteredMovies[0].release_date);
    // console.log(typeof filteredMovies[0].title);
    // console.log(typeof filteredMovies[0].vote_average);
    return filteredMovies;
  } catch (error) {
    console.log('Error fetching movie data: ', error);
  }
}

export default fetchMovies;
