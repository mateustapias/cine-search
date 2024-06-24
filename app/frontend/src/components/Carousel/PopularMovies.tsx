import { MoviesCarousel } from '.';
import useMovies from '../../hooks/useMovies';

const PopularMovies = () => {
  const { moviesData } = useMovies('popular');

  return (
    <div className='c-movies c-popular-movies'>
      <h1>Populares</h1>
      <MoviesCarousel moviesData={moviesData} chunkSize={6} maxGroups={5} />
    </div>
  );
};

export default PopularMovies;
