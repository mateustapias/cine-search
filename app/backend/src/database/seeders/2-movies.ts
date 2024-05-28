import { QueryInterface } from 'sequelize';
import { fetchMovies, insertMovies } from '../../scripts/fetchMovies';

export default {
  up: async (queryInterface: QueryInterface) => {
    const movies = await fetchMovies(20);
    if (movies) await queryInterface.bulkInsert('movies', movies, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('movies', {});
  },
};
