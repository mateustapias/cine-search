import { useEffect, useState } from 'react';
import { Movie } from '../../types';
import { requestMovies } from '../services/requests';

type UseMoviesType = 'popular' | 'top-rated';

const useMovies = (type: UseMoviesType) => {
  const [moviesData, setMoviesData] = useState<Movie[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'popular') {
          const movies = await requestMovies('/movies/popular');

          setMoviesData(movies);
        } else {
          const movies = await requestMovies('/movies/top-rated');

          setMoviesData(movies);
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
