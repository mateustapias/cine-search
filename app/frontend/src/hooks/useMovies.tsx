import { useState, useEffect } from 'react';
import { Movie } from '../../types';
import { requestData } from '../services/requests';

type UseMoviesType = 'popular' | 'topRated';

const useMovies = (type: UseMoviesType) => {
  const [moviesData, setMoviesData] = useState<Movie[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'popular') {
          const movies = await requestData('/movies/many');
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
