import express from 'express';

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from '../controllers/posts.js';

import cors from 'cors';
const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000',
};
router.use(cors(corsOptions));

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
