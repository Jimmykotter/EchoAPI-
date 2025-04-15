import { Router } from 'express';
const router = Router();
import {
getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  addAssignment,
  removeAssignment,
} from '../../controllers/thoughtsController.js';

// /api/students
router.route('/').get(getAllThoughts).post(createThought);

// /api/students/:studentId
router.route('/:ThoughtId').get(getThoughtById).delete(deleteThought);

// /api/students/:studentId/assignments
router.route('/:thoughtId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/assignments/:assignmentId').delete(removeAssignment);

export default router;
