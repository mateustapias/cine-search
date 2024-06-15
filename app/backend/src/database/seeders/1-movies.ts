import { QueryInterface } from 'sequelize';
import fetchMovies from '../../scripts/getSeederMovies';

export default {
  up: async (queryInterface: QueryInterface) => {
    const movies = await fetchMovies(1);
    if (movies) await queryInterface.bulkInsert('movies', movies, {});
    // if (movies) await queryInterface.bulkInsert('movies', movies, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('movies', {});
  },
};
