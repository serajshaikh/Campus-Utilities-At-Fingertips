import express from 'express';
const router = express.Router();

import { createPost,getPosts } from '../controllers/maintenance.js';

router.get('/',getPosts);
router.post('/',createPost);

export default router;