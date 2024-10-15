import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/User.js';
import authanticationRoute from './routes/authantication.js';
import bookingRoute from './routes/bookings.js';
import reviewRoute from './routes/reviews.js';

dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  allowedHeaders: 'Content-Type,Authorization',
};

// Database connection
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected');
  } catch (err) {
    console.error('MongoDB database connection failed:', err);
    process.exit(1); // Exit process if unable to connect to database
  }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// API routes
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authanticationRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute); 

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Tour Management App!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connect();
  console.log(`Server listening on port ${PORT}...`);
});
