import express, { Application } from 'express';
import cors from 'cors';
import { connectDB } from './config/dbconfig';
import dotenv from 'dotenv';

// Routes importing
import formRoutes from './routes/FormRoutes';

dotenv.config(); // Dotenv configuration

const app: Application = express();
// const MONGO_URL: string | undefined = process.env.MONGO_URL;
const PORT: string | number | undefined = process.env.PORT;

// Middleware
app.use(cors({  origin: true}));
app.use(express.json());

// // Check if MONGO_URL and PORT are defined
// if (!MONGO_URL) {
//     console.error('MONGO_URL is not defined in environment variables');
//     process.exit(1);
// }

if (!PORT) {
    console.error('PORT is not defined in environment variables');
    process.exit(1);
}

// Working with routes
app.use('/api/form', formRoutes);

// Start server and connect to the database
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    connectDB();
});
