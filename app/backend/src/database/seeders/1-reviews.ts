import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('reviews', [
      {
        id: 1,
        rating: 8,
        text: 'O King Kong é meu favorito!',
        movieId: 653346,
      },
      {
        id: 2,
        rating: 10,
        text: 'Suspense dramático sobre Alemanha nazista onde um empresário tenta salvar o máximo possível de judeus sem ser pego. Emocionante, cru, tenso e muito triste',
        movieId: 424,
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('reviews', {});
  },
};
