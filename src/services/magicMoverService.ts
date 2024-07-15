import { MagicMover } from '../models/MagicMover';

/**
 * Add a new Magic Mover.
 * @param {string} name - The name of the Magic Mover.
 * @param {number} weightLimit - The weight limit of the Magic Mover.
 * @returns {Promise<MagicMover>} - The newly created Magic Mover.
 */

export const addMagicMover = async (name: string, weightLimit: number) => {
    const mover = new MagicMover({ name, weightLimit });
    await mover.save();
    return mover;
};

