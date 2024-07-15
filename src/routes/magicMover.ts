import { Router } from 'express';
import { addMagicMover } from '../controllers/magicMoverController';

const router = Router();

router.post('/', addMagicMover);


export { router as magicMoverRouter };
