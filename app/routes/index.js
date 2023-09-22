import { Router } from 'express';
import { findOnePostByID, findPosts, createPost, updatePosts, deletePosts } from '../controllers/posts.js';

const router = Router();

router.get('/posts', findPosts)
router.get('/posts/:id', findOnePostByID)
router.post('/posts', createPost)
router.patch('/posts', updatePosts)
router.delete('/posts', deletePosts)


export { router };