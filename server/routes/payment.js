import express from 'express';
const router = express.Router();

import { createPayment,getPayment } from '../controllers/payment.js';

router.get('/',getPayment);
router.post('/',createPayment);

export default router;