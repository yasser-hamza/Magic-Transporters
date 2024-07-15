import { MagicMover } from '../models/MagicMover';
import { MagicItem } from '../models/MagicItem';
import { MissionLog } from '../models/MissionLog';

export const loadMagicMover = async (moverId: string, itemIds: string[]) => {
    const mover = await MagicMover.findById(moverId);
    if (!mover || mover.questState !== 'resting') {
        throw new Error('Mover not found or not resting');
    }

    const items = await MagicItem.find({ _id: { $in: itemIds } });
    const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
    if (totalWeight > mover.weightLimit) {
        throw new Error('Weight limit exceeded');
    }

    mover.questState = 'loading';
    await mover.save();

    const log = new MissionLog({ moverId, action: 'loading', items: itemIds });
    await log.save();

    return { mover, log };
};

export const startMission = async (moverId: string) => {
    const mover = await MagicMover.findById(moverId);
    if (!mover || mover.questState !== 'loading') {
        throw new Error('Mover not found or not loading');
    }

    mover.questState = 'on-mission';
    await mover.save();

    const log = new MissionLog({ moverId, action: 'on-mission', items: [] });
    await log.save();

    return { mover, log };
};

export const endMission = async (moverId: string) => {
    const mover = await MagicMover.findById(moverId);
    if (!mover || mover.questState !== 'on-mission') {
        throw new Error('Mover not found or not on mission');
    }

    mover.questState = 'resting';
    await mover.save();

    const log = new MissionLog({ moverId, action: 'resting', items: [] });
    await log.save();

    return { mover, log };
};

export const listCompletedMissions = async () => {
    const logs = await MissionLog.find({ action: 'resting' }).sort({ timestamp: -1 }).populate('moverId').exec();
    return logs;
};
