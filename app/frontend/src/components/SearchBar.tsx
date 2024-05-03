import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import '../styles/components/SearchBar.css';

const SearchBar = () => {
  const FORM_INITIAL_STATE = {
    searchValue: '',
  };

  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const { searchValue } = formData;
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;
    setFormData({ ...formData, [name]: targetValue });
    if (targetValue.trim() !== '') {
      try {
        const config = {
          method: 'GET',
          headers: {
            accept: 'application/json'
          },
          params: {
            api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
            query: targetValue,
          }
        };
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', config);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className='searchBarContainer'>
      <input
        type="text"
        placeholder="Digite sua busca aqui..."
        data-testid="search-input"
        name="searchValue"
        value={searchValue}
        onChange={handleChange}
      />

      {/* Mostrar sugestões de filmes enquanto digita */}
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;