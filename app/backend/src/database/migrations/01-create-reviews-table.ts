import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IReview } from '../../interfaces/reviews';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IReview>>('reviews', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('reviews');
  },
};