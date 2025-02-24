import express, { json } from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//the middleware
app.use(cors());
app.use(json());

//swagger
app.use('/api-docs', serve, setup(swaggerDocument));

//mongoDb connection
// const uri = process.env.ATLAS_URI;

//routes 
app.get('/api/stock', (_res) => {
    //to fetch stock data from database
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});