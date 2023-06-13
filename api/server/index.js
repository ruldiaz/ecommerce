import dotenv from 'dotenv';
import connectToDatabase from './database.js';
import express from 'express';
import cors from 'cors';


// Routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));


const port = process.env.PORT || 3001;

app.use('/api/products', productRoutes);

app.listen(port, ()=>{
  console.log(`Server listening on Port ${port}.`);
});