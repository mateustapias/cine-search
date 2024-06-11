// import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { MoviesCarousel } from '.';
import useMovies from '../../hooks/useMovies';

const PopularMovies = () => {
  const { moviesData } = useMovies('popular');

  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='c-movies c-popular-movies'>
      <h1>Populares</h1>

      {/* { isLoading && <Skeleton />} */}
      <Skeleton />
      {moviesData ? (
        <MoviesCarousel moviesData={moviesData} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularMovies;
