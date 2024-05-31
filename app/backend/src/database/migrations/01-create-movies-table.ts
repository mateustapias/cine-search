import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMovie } from '../../interfaces/movie';

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
      adult: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      popularity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'release_date',
      },
      vote_average: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'vote_average',
      },
      runtime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // defaultValue: 10
      },
      poster_path: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'poster_path',
      },
      backdrop_path: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'backdrop_path'
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('movies');
  },
};