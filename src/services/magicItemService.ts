import { MagicItem } from '../models/MagicItem';

export const addMagicItem = async (name: string, weight: number) => {
    const item = new MagicItem({ name, weight });
    await item.save();
    return item;
};

// Add more service methods as needed...
