import { Router } from 'express';
import userRouter from './user.routes';
import movieRouter from './movie.routes';
import reviewRouter from './review.routes';
import moviesListRouter from './moviesList.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/movies', movieRouter);
router.use('/reviews', reviewRouter);
router.use('/moviesList', moviesListRouter);

export default router;
