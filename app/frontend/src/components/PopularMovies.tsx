import MoviesCarousel from './MoviesCarousel';
import useMovies from '../hooks/useMovies';

const PopularMovies = () => {
  const { moviesData } = useMovies('popular');

  return (
    <div className='c-movies c-popular-movies'>
      <h1>Populares</h1>
      {moviesData ? (
        <MoviesCarousel moviesData={moviesData} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularMovies;
