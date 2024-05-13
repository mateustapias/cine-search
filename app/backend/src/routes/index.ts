import { Router } from 'express';
import logInRouter from './logIn.routes';

const router = Router();

router.use('/logIn', logInRouter);

export default router;
