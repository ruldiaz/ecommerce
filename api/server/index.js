import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './database.js';
import express from 'express';
import cors from 'cors';
import path from 'path';

// Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


connectToDatabase();

const app = express();

// Custom CORS middleware to allow requests containing "netlify" in the domain
const customCors = (req, callback) => {
  const allowedOrigins = [
    'http://localhost:5173',
    'https://techlines-pd2s.onrender.com',
    /netlify/i, // Allow any origin containing the word "netlify" (case-insensitive)
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.some((pattern) => pattern.test(origin))) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
};

app.use(cors(customCors));

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));




const port = process.env.PORT || 3001;

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if(process.env.NODE_ENV == 'production'){
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}



app.listen(port, ()=>{
  console.log(`Server listening on Port ${port}.`);
});