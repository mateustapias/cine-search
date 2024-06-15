import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeReview extends Model<InferAttributes<SequelizeReview>,
InferCreationAttributes<SequelizeReview>> {
  declare id: number;

  declare rating: number;

  declare text: string;

  declare userId: number;

  declare movieId: number;
}

// TODO: ver se da pra remover os CASCADE
SequelizeReview.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'movies',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'reviews',
  timestamps: false,
});

export default SequelizeReview;
