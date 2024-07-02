import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMoviesInList } from '../../interfaces/moviesList';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMoviesInList>>('moviesInLists', {
      moviesListId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'moviesLists',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('moviesInLists');
  },
};

// import { QueryInterface, DataTypes } from 'sequelize';

// export default {
//   up: async (queryInterface: QueryInterface) => {
//     await queryInterface.createTable('moviesInLists', {
//       moviesListId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: 'moviesLists',
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       movieId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: 'movies',
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       createdAt: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW,
//       },
//       updatedAt: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW,
//       },
//     });

//     // Adicionar índice composto para garantir unicidade de pares (moviesListId, movieId)
//     await queryInterface.addConstraint('moviesInLists', {
//       type: 'unique',
//       fields: ['moviesListId', 'movieId'],
//       name: 'unique_movies_in_lists',
//     });
//   },

//   down: async (queryInterface: QueryInterface) => {
//     await queryInterface.dropTable('moviesInLists');
//   },
// };
