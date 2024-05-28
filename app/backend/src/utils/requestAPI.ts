import axios from 'axios';

async function requestAPI(id: number) {
  try {
    const config = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      params: {
        api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
        language: 'pt-BR',
        page: 1,
      },
    };
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

export default requestAPI;
