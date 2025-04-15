import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/userController.js';

// /api/courses
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;
