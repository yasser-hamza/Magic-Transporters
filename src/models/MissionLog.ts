import { Schema, model, Document } from 'mongoose';

interface IMissionLog extends Document {
    moverId: Schema.Types.ObjectId;
    action: string;
    items: Schema.Types.ObjectId[];
    timestamp: Date;
}

const missionLogSchema = new Schema<IMissionLog>({
    moverId: { type: Schema.Types.ObjectId, ref: 'MagicMover', required: true },
    action: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'MagicItem' }],
    timestamp: { type: Date, default: Date.now }
});

export const MissionLog = model<IMissionLog>('MissionLog', missionLogSchema);
