import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeReview from './SequelizeReview';

class SequelizeUser extends Model<InferAttributes<SequelizeUser>,
InferCreationAttributes<SequelizeUser>> {
  declare id: CreationOptional<number>;

  declare username: string;

  declare role: string;

  declare email: string;

  declare password: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

// userId na tabela SequelizeReview é a chave estrangeira que referencia SequelizeUser
// O alias reviews permite utilizar user.getReviews() para obter todas as avaliações de um filme
SequelizeUser.hasMany(SequelizeReview, { foreignKey: 'userId', as: 'reviews' });

// O alias movie permite utilizar review.getUser() para obter o filme associado a uma avaliação
SequelizeReview.belongsTo(SequelizeUser, { foreignKey: 'userId', as: 'user' });

export default SequelizeUser;
