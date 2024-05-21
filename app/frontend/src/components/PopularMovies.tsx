import { useState, useEffect } from 'react';
import { Movie } from '../../types';
import MoviesCarousel from './MoviesCarousel';
import { requestMovies } from '../services/requests';

const PopularMovies = () => {
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await requestMovies('/movies/many')

        setPopularMoviesData(movies);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const config = {
  //         method: 'GET',
  //         headers: {
  //           accept: 'application/json',
  //         },
  //         params: {
  //           api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
  //           language: 'pt-BR',
  //         },
  //       };

  //       const responsePage1 = await axios.get('https://api.themoviedb.org/3/movie/popular', {
  //         ...config,
  //         params: {
  //           ...config.params,
  //           page: 1,
  //         },
  //       });

  //       const responsePage2 = await axios.get('https://api.themoviedb.org/3/movie/popular', {
  //         ...config,
  //         params: {
  //           ...config.params,
  //           page: 2,
  //         },
  //       });

  //       const combinedResults = [...responsePage1.data.results, ...responsePage2.data.results];

  //       setPopularMoviesData(combinedResults);
  //     } catch (error) {
  //       console.error('Error fetching movie data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='c-movies c-popular-movies'>
      <h1>Populares</h1>
      {popularMoviesData ? (
        <MoviesCarousel moviesData={popularMoviesData} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularMovies;
