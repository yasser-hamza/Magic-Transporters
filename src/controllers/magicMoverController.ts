import { Request, Response } from 'express';
import * as MagicMoverService from '../services/magicMoverService';

/**
 * Add a new Magic Mover.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */

/**
 * @swagger
 * tags:
 *   name: Magic Movers
 */

/**
 * @swagger
 * /magic-movers:
 *   post:
 *     summary: Add a new Magic Mover
 *     tags: [Magic Movers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               weightLimit:
 *                 type: number
 *     responses:
 *       201:
 *         description: Magic Mover created successfully
 *       400:
 *         description: Bad request
 */

export const addMagicMover = async (req: Request, res: Response) => {
    const { name, weightLimit } = req.body;
    try {
        const mover = await MagicMoverService.addMagicMover(name, weightLimit);
        res.status(201).json(mover);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};
