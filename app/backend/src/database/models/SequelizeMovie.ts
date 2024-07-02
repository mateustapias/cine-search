import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeReview from './SequelizeReview';

class SequelizeMovie extends Model<InferAttributes<SequelizeMovie>,
InferCreationAttributes<SequelizeMovie>> {
  declare id: number;

  declare title: string;

  declare tagline: string;

  declare adult: boolean;

  declare overview: string;

  declare popularity: number;

  declare release_date: string;

  declare vote_average: number;

  declare poster_path: string;

  declare backdrop_path: string;

  declare runtime: CreationOptional<number>;
}

SequelizeMovie.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tagline: {
    type: DataTypes.STRING,
  },
  adult: {
    type: DataTypes.BOOLEAN,
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
  },
  vote_average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  runtime: {
    type: DataTypes.INTEGER,
  },
  poster_path: {
    type: DataTypes.STRING,
  },
  backdrop_path: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'movies',
  timestamps: false,
  // TODO: possível colocar um underscore: true
});

// movieId na tabela SequelizeReview é a chave estrangeira que referencia SequelizeMovie
// O alias reviews permite utilizar movie.getReviews() para obter todas as avaliações de um filme
SequelizeMovie.hasMany(SequelizeReview, { foreignKey: 'movieId', as: 'reviews' });
// SequelizeMovie.belongsToMany(SequelizeMoviesList, {
//   through: SequelizeMoviesInList,
//   foreignKey: 'movieId',
//   otherKey: 'moviesListId',
//   as: 'lists',
// });
// O alias movie permite utilizar review.getMovie() para obter o filme associado a uma avaliação
SequelizeReview.belongsTo(SequelizeMovie, { foreignKey: 'movieId', as: 'movie' });

export default SequelizeMovie;
