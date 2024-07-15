import { Router } from 'express';
import { addMagicItem } from '../controllers/magicItemController';

const router = Router();

router.post('/', addMagicItem);

// Add more routes as needed...

export { router as magicItemRouter };
