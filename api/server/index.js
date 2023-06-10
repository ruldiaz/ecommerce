import dotenv from 'dotenv';
import connectToDatabase from './database.js';
import express from 'express';

// Routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/api/products', productRoutes);

app.listen(port, ()=>{
  console.log(`Server listening on port ${port}.`);
});