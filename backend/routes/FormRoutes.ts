import express from 'express';
import { saveBankingInfo } from '../cantrollers/FormController';

const router = express.Router();

// Define routes
router.post('/save', saveBankingInfo);

export default router;
