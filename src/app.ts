import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { magicMoverRouter } from './routes/magicMover';
import { magicItemRouter } from './routes/magicItem';
import { missionRouter } from './routes/mission';
import { setupSwagger } from './swagger';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/magic_transporters', {
    appName: "Magic Transporters"
} as mongoose.ConnectOptions).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/magic-movers', magicMoverRouter);
app.use('/magic-items', magicItemRouter);
app.use('/missions', missionRouter);

setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
