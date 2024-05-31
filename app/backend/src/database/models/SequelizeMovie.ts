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
  },
  vote_average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  runtime: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    // defaultValue: 10,
  },
  poster_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  backdrop_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'movies',
  timestamps: false,
});

export default SequelizeMovie;
