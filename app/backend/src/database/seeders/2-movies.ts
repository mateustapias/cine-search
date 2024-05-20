import { QueryInterface } from 'sequelize';
import fetchMovies from '../../scripts/fetchMovies';

export default {
  up: async (queryInterface: QueryInterface) => {
    const movies = await fetchMovies();
    if (movies) {
      // try {
      //   await queryInterface.bulkInsert('movies', movies, {});
      // } catch (error) {
      //   console.log(error)
      // }
      await queryInterface.bulkInsert('movies', movies, {});
    }
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('movies', {});
  },
};
