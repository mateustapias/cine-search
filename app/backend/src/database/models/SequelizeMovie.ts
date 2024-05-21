import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  // CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeMovie extends Model<InferAttributes<SequelizeMovie>,
InferCreationAttributes<SequelizeMovie>> {
  declare id: number;
  declare title: string;
  declare overview: string;
  declare release_date: string;
  declare poster_path: string;
  declare vote_average: number;
  // declare runtime: number;
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
  overview: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  poster_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  vote_average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // runtime: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
}, {
  sequelize: db,
  modelName: 'movies',
  timestamps: false,
});

export default SequelizeMovie;
