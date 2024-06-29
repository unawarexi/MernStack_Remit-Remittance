import express, { Application,  Request, Response} from 'express';
import cors from 'cors';
import { connectDB } from './config/dbconfig';
import dotenv from 'dotenv';
import path from 'path';

// Routes importing
import formRoutes from './routes/FormRoutes';
import confirmRouter from "./routes/ConfirmRoutes"

dotenv.config(); // Dotenv configuration

const app: Application = express();
// const MONGO_URL: string | undefined = process.env.MONGO_URL;
const PORT: string | number | undefined = process.env.PORT;

// Middleware
app.use(cors({  origin: true}));
app.use(express.json());


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle all routes and serve the main index.html file
app.get('*', ( req : Request, res : Response) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    const name = req.query.name as string; // Extract 'name' query parameter
    if (name) {
        res.send(`Hello, ${name}!`);
    } else {
        res.status(400).send('Please provide a name query parameter.');
    }
});

if (!PORT) {
    console.error('PORT is not defined in environment variables');
    process.exit(1);
}

// Working with routes
app.use('/api/form', formRoutes);
app.use('/api/form', confirmRouter);

// Start server and connect to the database
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    connectDB();
});
