import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/components/MoviesCarousel.css';
import { Movie } from '../../types';
import MoviesCarouselCard from './MoviesCarouselCard';

type MoviesCarouselProps = {
  moviesData: Movie[],
  chunkSize: number,
  maxGroups: number,
};

const MoviesCarousel = ({ moviesData, chunkSize = 4, maxGroups = 5 }: MoviesCarouselProps) => {
  // Função para dividir o array {maxGroups} vezes de filmes em grupos de {chunkSize}
  const chunkArray = (arr: Movie[], chunkSizee: number, maxGroupss: number): Movie[][] => {
    const chunkedArray = [];
    let groupsCount = 0;
    for (let i = 0; i < arr.length; i += chunkSizee) {
      if (groupsCount < maxGroupss) {
        chunkedArray.push(arr.slice(i, i + chunkSizee));
        groupsCount += 1;
      }
    }
    return chunkedArray;
  };

  return (
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
};

export default MoviesCarousel;
