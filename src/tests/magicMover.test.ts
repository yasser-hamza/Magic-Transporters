import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import { magicMoverRouter } from './../routes/magicMover';
import mongoose from 'mongoose';

// Connect to MongoDB in-memory server for testing
beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/magic_transporters_test';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions);
});

// Clear all collections after each test
afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
});

// Disconnect after all tests
afterAll(async () => {
    await mongoose.connection.close();
});

const app = express();
app.use(bodyParser.json());
app.use('/magic-movers', magicMoverRouter);

describe('Magic Mover API', () => {
    it('should add a new Magic Mover', async () => {
        const response = await request(app)
            .post('/magic-movers')
            .send({
                name: 'Mover 1',
                weightLimit: 100
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.name).toBe('Mover 1');
    });
});
