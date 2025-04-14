import { Router } from 'express';
import { usersRouter } from './usersRoutes.js';
import { thoughtsRouter } from './thoughtsRoutes.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/thoughts', thoughtsRouter);

export default router;
