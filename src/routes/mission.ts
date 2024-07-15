import { Router } from 'express';
import { loadMagicMover, startMission, endMission, listCompletedMissions } from '../controllers/missionController';

const router = Router();

router.post('/:moverId/load', loadMagicMover);
router.post('/:moverId/start', startMission);
router.post('/:moverId/end', endMission);
router.get('/completed', listCompletedMissions);

export { router as missionRouter };
