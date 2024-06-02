/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { IMovie } from '../interfaces/movie';
import requestAPI from '../utils/requestAPI';

function filterMovies(movies: IMovie[]): IMovie[] {
  return movies
    .filter((movie: IMovie) => (movie.overview))
    .map(({
      id, title, tagline, adult, overview, popularity, release_date,
      vote_average, runtime, poster_path, backdrop_path,
    }: IMovie) => ({
      id,
      title,
      tagline,
      adult,
      overview,
      popularity,
      release_date,
      vote_average: Number(vote_average.toFixed(1)),
      runtime,
      poster_path,
      backdrop_path,
    }));
}

async function addDetailColumns(movie: IMovie): Promise<IMovie> {
  const { runtime, tagline } = await requestAPI(movie.id);

  return { ...movie, runtime: Number(runtime), tagline };
}

export default async function getSeederMovies(initialPage = 1): Promise<IMovie[] | undefined> {
  const movies: IMovie[][] = [];
  try {
    for (let page = initialPage; page < initialPage + 3; page += 1) {
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
      // eslint-disable-next-line no-promise-executor-return
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

// export async function insertMovies(initialRequest: number): Promise<void> {
//   const maxRequests = 20;
//   for (let requests = initialRequest; requests < initialRequest + maxRequests; requests += 1) {
//     const moviesToInsert = await fetchMovies(requests * 20);
//     if (moviesToInsert) {
//       SequelizeMovie.bulkCreate(moviesToInsert, {});
//     }
//   }
// }
