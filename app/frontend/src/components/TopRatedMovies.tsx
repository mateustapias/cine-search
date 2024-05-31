import MoviesCarousel from './MoviesCarousel';
import useMovies from '../hooks/useMovies';

const TopRatedMovies = () => {
  const { moviesData } = useMovies('top-rated');

  return (
    <div className='c-movies c-top-rated-movies'>
      <h1>Mais bem avaliados</h1>
      {moviesData ? (
        <MoviesCarousel moviesData={moviesData} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TopRatedMovies;
