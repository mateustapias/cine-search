import React from 'react';
import { Movie } from '../../../types';
import { SearchSuggestionCard } from '.';

type SearchSuggestionProps = {
  movies: Movie[];
};

const SearchSuggestion = ({ movies }: SearchSuggestionProps) => (
  <div className='c-outer-search-suggestion'>
    <div id='c-inner-search-suggestion'>
      {movies && (
        movies.map((movie) => (
          <React.Fragment key={movie.id}>
            <SearchSuggestionCard movie={movie} />
            <div className='c-line-break'>
              <hr className='line-break' />
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  </div>
);

export default SearchSuggestion;
