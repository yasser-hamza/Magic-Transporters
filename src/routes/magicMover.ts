import { Router } from 'express';
import { addMagicMover } from '../controllers/magicMoverController';

const router = Router();

router.post('/', addMagicMover);

// Add more routes as needed...

export { router as magicMoverRouter };
