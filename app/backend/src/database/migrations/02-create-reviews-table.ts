import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IReview } from '../../interfaces/review';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IReview>>('reviews', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
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