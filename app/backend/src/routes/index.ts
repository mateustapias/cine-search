import { Router } from 'express';
import userRouter from './user.routes';

const router = Router();

router.use('/', userRouter);

export default router;
