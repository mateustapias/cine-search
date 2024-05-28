/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { IMovie } from '../interfaces/movie';
import SequelizeMovie from '../database/models/SequelizeMovie';

function filterMovies(movies: IMovie[]): IMovie[] {
  return movies
    .filter((movie: IMovie) => (movie.overview))
    .map((movie: IMovie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: Number(movie.vote_average.toFixed(1)),
    }));
}

export async function fetchMovies(initialPage = 1): Promise<IMovie[] | undefined> {
  const movies: IMovie[][] = [];
  try {
    for (let page = initialPage; page < initialPage + 20; page += 1) {
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
    const filteredMovies = filterMovies(flattenedMovies);

    return filteredMovies;
  } catch (error) {
    console.log('Error fetching movie data: ', error);
  }
}

export async function insertMovies(initialRequest: number): Promise<void> {
  const maxRequests = 20;
  for (let requests = initialRequest; requests < initialRequest + maxRequests; requests += 1) {
    const moviesToInsert = await fetchMovies(requests * 20);
    if (moviesToInsert) {
      SequelizeMovie.bulkCreate(moviesToInsert, {});
    }
    await new Promise((resolve) => { setTimeout(resolve, 1000); });
  }
}

// insertMovies(1);
// insertMovies(21);
