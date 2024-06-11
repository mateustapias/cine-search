import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { MoviesCarouselCard } from '.';
import { chunkArray } from '../../utils';
import { Movie } from '../../../types';
import '../../styles/components/MoviesCarousel.scss';

type MoviesCarouselProps = {
  moviesData: Movie[],
  chunkSize: number,
  maxGroups: number,
};

const MoviesCarousel = ({ moviesData, chunkSize = 4, maxGroups = 5 }: MoviesCarouselProps) => (
  <Carousel wrap={false} interval={null} className='c-movies-carousel'>
    {chunkArray(moviesData, chunkSize, maxGroups).map((group, index) => (
      <Carousel.Item key={index}>
        <div className='c-movie-group'>
          {group.map((movie, movieIndex) => (
            <MoviesCarouselCard key={movieIndex} movie={movie} />
          ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default MoviesCarousel;
