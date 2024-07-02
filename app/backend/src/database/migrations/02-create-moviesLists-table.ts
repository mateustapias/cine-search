import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMoviesList } from '../../interfaces/moviesList';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMoviesList>>('moviesLists', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rgbColor: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('moviesLists');
  },
};
