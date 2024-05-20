import { Model, QueryInterface, DataTypes } from 'sequelize';
import IMovie from '../../interfaces/movies/IMovie';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMovie>>('movies', {
      id: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true,
        // allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'release_date',
      },
      poster_path: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'poster_path',
      },
      vote_average: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'vote_average',
      },
      // runtime: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('movies');
  },
};