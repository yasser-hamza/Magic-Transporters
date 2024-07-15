import { Request, Response } from 'express';
import * as MissionService from '../services/missionService';

/**
 * @swagger
 * tags:
 *   name: Missions
 */

/**
 * @swagger
 * /missions/{moverId}/load:
 *   post:
 *     summary: Load a Magic Mover with Items
 *     tags: [Missions]
 *     parameters:
 *       - in: path
 *         name: moverId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Items loaded successfully
 *       400:
 *         description: Bad request
 */

export const loadMagicMover = async (req: Request, res: Response) => {
    const { moverId } = req.params;
    const { itemIds } = req.body;
    try {
        const result = await MissionService.loadMagicMover(moverId, itemIds);
        res.status(200).json(result);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

/**
 * @swagger
 * /missions/{moverId}/start:
 *   post:
 *     summary: Start a Mission
 *     tags: [Missions]
 *     parameters:
 *       - in: path
 *         name: moverId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mission started successfully
 *       400:
 *         description: Bad request
 */

export const startMission = async (req: Request, res: Response) => {
    const { moverId } = req.params;
    try {
        const result = await MissionService.startMission(moverId);
        res.status(200).json(result);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

/**
 * @swagger
 * /missions/{moverId}/end:
 *   post:
 *     summary: End a Mission
 *     tags: [Missions]
 *     parameters:
 *       - in: path
 *         name: moverId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mission ended successfully
 *       400:
 *         description: Bad request
 */

export const endMission = async (req: Request, res: Response) => {
    const { moverId } = req.params;
    try {
        const result = await MissionService.endMission(moverId);
        res.status(200).json(result);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

/**
 * @swagger
 * /missions/completed:
 *   get:
 *     summary: List completed Missions
 *     tags: [Missions]
 *     responses:
 *       200:
 *         description: List of completed missions
 *       400:
 *         description: Bad request
 */

export const listCompletedMissions = async (req: Request, res: Response) => {
    try {
        const logs = await MissionService.listCompletedMissions();
        res.status(200).json(logs);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};
