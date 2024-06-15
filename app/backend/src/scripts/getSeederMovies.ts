/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { IMovie } from '../interfaces/movie';
import requestAPI from '../utils/requestAPI';

function filterMovies(movies: IMovie[]): IMovie[] {
  const uniqueMoviesMap: { [id: string]: IMovie; } = {};

  movies.forEach((movie: IMovie) => {
    if (movie.overview && !uniqueMoviesMap[movie.id]) {
      const {
        id, title, tagline, adult, overview, popularity, release_date,
        vote_average, runtime = 0, poster_path, backdrop_path,
      } = movie;

      uniqueMoviesMap[movie.id] = {
        id,
        title,
        tagline,
        adult,
        overview,
        popularity,
        release_date,
        vote_average: Number(vote_average.toFixed(1)),
        runtime: Number(runtime),
        poster_path,
        backdrop_path,
      };
    }
  });

  return Object.values(uniqueMoviesMap);
}

async function addDetailColumns(movie: IMovie): Promise<IMovie> {
  const { runtime, tagline } = await requestAPI(movie.id);

  return { ...movie, runtime: Number(runtime), tagline };
}

export default async function getSeederMovies(initialPage = 1): Promise<IMovie[] | undefined> {
  const movies: IMovie[][] = [];
  try {
    for (let page = initialPage; page < initialPage + 2; page += 1) {
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
      const popularMovies = await axios.get('https://api.themoviedb.org/3/movie/popular', config);
      movies.push(popularMovies.data.results);
      const topRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated', config);
      movies.push(topRatedMovies.data.results);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const flattenedMovies = movies.flat();
    const moviesWithRuntime = await Promise.all(flattenedMovies.map(addDetailColumns));
    const filteredMovies = filterMovies(moviesWithRuntime);

    return filteredMovies;
  } catch (error) {
    console.log('Error fetching movie data: ', error);
  }
}
