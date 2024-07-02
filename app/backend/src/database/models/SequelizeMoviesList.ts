import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeMoviesList extends Model<InferAttributes<SequelizeMoviesList>,
InferCreationAttributes<SequelizeMoviesList>> {
  declare id: number;

  declare title: string;

  declare description: string;

  declare rgbColor: string;

  declare userId: number;
}

SequelizeMoviesList.init({
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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'users',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'moviesList',
  // tableName: 'moviesLists',
  timestamps: false,
  underscored: true,
});

export default SequelizeMoviesList;
