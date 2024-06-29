import { Router } from 'express';
import { createConfirmation } from '../cantrollers/ConfirmControllers';

const router: Router = Router();

router.post('/confirm', createConfirmation);

export default router;
