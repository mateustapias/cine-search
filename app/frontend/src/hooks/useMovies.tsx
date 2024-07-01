import { useEffect, useState } from 'react';
import { Movie } from '../../types';
import { requestData } from '../services/requests';

type UseMoviesType = 'popular' | 'top-rated';

const useMovies = (type: UseMoviesType) => {
  const [moviesData, setMoviesData] = useState<Movie[] | undefined>();
  // isLoading não está sendo utilizado por enquanto
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'popular') {
          const movies = await requestData('/movies/popular');

          setMoviesData(movies);
        } else {
          const movies = await requestData('/movies/top-rated');

          setMoviesData(movies);
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching movie data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { moviesData, isLoading };
};

export default useMovies;
