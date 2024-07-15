import { Schema, model, Document } from 'mongoose';

interface IMagicMover extends Document {
    name: string;
    weightLimit: number;
    questState: 'resting' | 'loading' | 'on-mission';
}

const magicMoverSchema = new Schema<IMagicMover>({
    name: { type: String, required: true },
    weightLimit: { type: Number, required: true },
    questState: { type: String, enum: ['resting', 'loading', 'on-mission'], default: 'resting' }
});

export const MagicMover = model<IMagicMover>('MagicMover', magicMoverSchema);
