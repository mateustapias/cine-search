import { Router } from 'express';
import userRouter from './user.routes';
import movieRouter from './movie.routes';

const router = Router();

router.use('/', userRouter);
router.use('/movies', movieRouter);

export default router;
