// import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import '../styles/components/SearchSuggestionCard.css';

type SearchSuggestionCardProps = {
  movie: Movie
}

const SearchSuggestionCard = ({ movie }: SearchSuggestionCardProps) => {
  // const navigate = useNavigate();

  return (
    <a className='searchSuggestionCard' href={`/${movie.id}`}>
      <div className='searchSuggestionPosterContainer'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className='searchSuggestionTitleContainer'>
        {movie.title}
      </div>
    </a>
  );
};

export default SearchSuggestionCard;