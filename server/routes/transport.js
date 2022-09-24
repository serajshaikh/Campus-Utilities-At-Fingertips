import express from 'express';
const router = express.Router();

import { createTransport,getTransport } from '../controllers/transport.js';

router.post('/',createTransport);
router.get('/',getTransport);

export default router;
