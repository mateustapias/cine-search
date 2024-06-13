import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestData } from '../services/requests';
import { Movie } from '../../types';
import '../styles/pages/MovieDetails.scss';
import MovieMainDetails from '../components/MovieDetails/MovieMainDetails';
import MovieSecondaryDetails from '../components/MovieDetails/MovieSecondaryDetails';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await requestData(`/movies/${id}`);

      setMovieData(movieDetails);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className='c-movie-details-a'>
        {movieData && (
          <>
            <MovieMainDetails movieData={movieData} />
            <MovieSecondaryDetails movieData={movieData} />
          </>
        )}
      </div >
    </>
  );
};

export default MovieDetails;
