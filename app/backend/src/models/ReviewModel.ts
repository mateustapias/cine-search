import handleAsyncError from '../utils/handleAsyncError';
import { IReview, IReviewModel } from '../interfaces/review';
import SequelizeReview from '../database/models/SequelizeReview';
import SequelizeUser from '../database/models/SequelizeUser';

export default class ReviewModel implements IReviewModel {
  private model = SequelizeReview;

  // É possível colocar a lógica de findAllByUser e findAllByMovie em uma função só
  // mas não sei se é o certo
  // TODO: limitar a quantidade de reviews para quando houver muitas
  async findAllByUser(userId: number): Promise<IReview[] | null> {
    const [dbData, error] = await handleAsyncError(this.model.findAll({
      where: {
        userId,
      },
    }));

    if (error) {
      console.error('Error in findAllByUser:', error);
      return null;
    }

    return dbData;
  }

  async findOneByUserAndMovie(userId: number, movieId: number): Promise<IReview | null> {
    const [dbData, error] = await handleAsyncError(this.model.findOne({
      where: {
        userId,
        movieId,
      },
      include: [{
        model: SequelizeUser,
        attributes: ['username'],
        as: 'user',
      }],
    }));

    if (error) {
      console.error('Error in findOneByUserAndMovie:', error);
      return null;
    }

    return dbData;
  }

  async findAllByMovie(movieId: number): Promise<IReview[] | null> {
    // Ver se o deploy aponta como erro
    const dbData = await this.model.findAll({
      where: {
        movieId,
      },
      include: [{
        model: SequelizeUser,
        attributes: ['username'],
        as: 'user',
      }],
    });

    if (!dbData || dbData.length === 0) {
      return null;
    }

    return dbData;
    // const [dbData, error] = await handleAsyncError(this.model.findAll({
    //   where: {
    //     movieId,
    //   },
    // }));

    // if (error) {
    //   console.error('Error in findAllByMovie:', error);
    //   return null;
    // }

    // return dbData;
  }

  async createOne(review: IReview): Promise<IReview | null> {
    const [dbData, error] = await handleAsyncError(this.model.create(review));

    if (error) {
      console.error('Error in createOne:', error);
      return null;
    }

    return dbData;
  }

  async updateOne(review: IReview): Promise<void> {
    await this.model.update(
      review,
      {
        where: {
          id: review.id,
        },
      },
    );
  }
}
