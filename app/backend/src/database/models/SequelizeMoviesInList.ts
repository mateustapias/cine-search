import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import SequelizeMovie from './SequelizeMovie';
import SequelizeMoviesList from './SequelizeMoviesList';

class SequelizeMoviesInList extends Model<InferAttributes<SequelizeMoviesInList>,
InferCreationAttributes<SequelizeMoviesInList>> {
  declare moviesListId: number;

  declare movieId: number;
}

SequelizeMoviesInList.init({
  moviesListId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: SequelizeMoviesList,
      key: 'id',
    },
  },
  movieId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: SequelizeMovie,
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'moviesInLists',
  timestamps: false,
  // underscored: true,
});

SequelizeMoviesInList.belongsTo(SequelizeMoviesList, { foreignKey: 'moviesListId', as: 'list' });
SequelizeMoviesInList.belongsTo(SequelizeMovie, { foreignKey: 'movieId', as: 'movie' });

SequelizeMovie.belongsToMany(SequelizeMoviesList, {
  through: SequelizeMoviesInList,
  foreignKey: 'movieId',
  otherKey: 'moviesListId',
  as: 'lists',
});

SequelizeMoviesList.belongsToMany(SequelizeMovie, {
  through: SequelizeMoviesInList,
  foreignKey: 'moviesListId',
  otherKey: 'movieId',
  as: 'movies',
});

export default SequelizeMoviesInList;
