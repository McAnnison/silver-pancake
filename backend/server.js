import express, { json } from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Stock from './models/Stock.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Swagger
app.use('/api-docs', serve, setup(swaggerDocument));

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/stock', async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});