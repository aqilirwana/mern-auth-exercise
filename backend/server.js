import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 8000;
import userRoutes from './routes/userRoutes.js'

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server stared on port ${port}`));

// ** POST /api/users - Register a user
// ** POST /api/users/auth - Authenticate a user and get token
// ** POST /api/users/logout - Logout user and clear cookie
// ** GET /api/users/profile - Get user profile
// ** PUT /api/users/profile - Update profile