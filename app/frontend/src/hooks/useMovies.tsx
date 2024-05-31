import { useState, useEffect } from 'react';
import { Movie } from '../../types';
import { requestMovies } from '../services/requests';

type UseMoviesType = 'popular' | 'topRated';

const useMovies = (type: UseMoviesType) => {
  const [moviesData, setMoviesData] = useState<Movie[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'popular') {
          const movies = await requestMovies('/movies/many');
          setMoviesData(movies);
          // const sortedMovies = movies.sort((a, b) => b.vote_average - a.vote_average);
          // setMoviesData(sortedMovies);
        }
      } catch (err) {
        console.error('Error fetching movie data:', err);
      }
    };
    fetchData();
  }, []);

  return { moviesData };
};

export default useMovies;
