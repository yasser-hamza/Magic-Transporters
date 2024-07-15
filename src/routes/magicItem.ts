import { Router } from 'express';
import { addMagicItem } from '../controllers/magicItemController';

const router = Router();

router.post('/', addMagicItem);


export { router as magicItemRouter };
