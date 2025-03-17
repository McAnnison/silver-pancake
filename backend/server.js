import express from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Stock from './models/Stock';
import Admin from './models/Admin';
import Supervisor from './models/Supervisor';
import FieldManager from './models/FieldManager';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', serve, setup(swaggerDocument));

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes

// Stock Routes
app.get('/api/stock', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/stock', async (req, res) => {
  const stock = new Stock(req.body);
  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin Routes
app.get('/api/admin', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/admin', async (req, res) => {
  const admin = new Admin(req.body);
  try {
    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supervisor Routes
app.get('/api/supervisor', async (req, res) => {
  try {
    const supervisors = await Supervisor.find();
    res.json(supervisors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/supervisor', async (req, res) => {
  const supervisor = new Supervisor(req.body);
  try {
    const newSupervisor = await supervisor.save();
    res.status(201).json(newSupervisor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Field Manager Routes
app.get('/api/fieldManager', async (req, res) => {
  try {
    const fieldManagers = await FieldManager.find();
    res.json(fieldManagers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/fieldManager', async (req, res) => {
  const fieldManager = new FieldManager(req.body);
  try {
    const newFieldManager = await fieldManager.save();
    res.status(201).json(newFieldManager);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});