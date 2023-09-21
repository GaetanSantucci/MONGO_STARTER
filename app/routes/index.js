import { Router } from 'express';
import { findOnePostByID, findPosts } from '../controllers/posts.js';
// import { findPosts } from './app/controllers/posts';

const router = Router();


router.get('/posts', findPosts)
router.get('/posts/:id', findOnePostByID)


export { router };