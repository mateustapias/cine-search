import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

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
});

export default SequelizeMovie;
