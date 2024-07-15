import { Request, Response } from 'express';
import * as MagicItemService from '../services/magicItemService';

/**
 * @swagger
 * tags:
 *   name: Magic Items
 */

/**
 * @swagger
 * /magic-items:
 *   post:
 *     summary: Add a new Magic Item
 *     tags: [Magic Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               weight:
 *                 type: number
 *     responses:
 *       201:
 *         description: Magic Item created successfully
 *       400:
 *         description: Bad request
 */

export const addMagicItem = async (req: Request, res: Response) => {
    const { name, weight } = req.body;
    try {
        const item = await MagicItemService.addMagicItem(name, weight);
        res.status(201).json(item);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};