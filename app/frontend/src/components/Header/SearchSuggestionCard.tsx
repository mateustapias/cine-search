import { Movie } from '../../../types';
import '../../styles/components/Header/SearchSuggestionCard.scss';

type SearchSuggestionCardProps = {
  movie: Movie;
};

const SearchSuggestionCard = ({ movie }: SearchSuggestionCardProps) => (
  <a className='search-suggestion-card' tabIndex={0} href={`/${movie.id}`}>
    <div className='c-search-suggestion-poster'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
    </div>
    <div className='c-search-suggestion-title'>
      <span>{movie.title}</span>
    </div>
  </a>
);

export default SearchSuggestionCard;
