import "dotenv/config"; // Load the environment variables from the .env file
import env from "./utils/validateEnv";
import express, {Request, Response, NextFunction} from 'express';
import projectRoutes from './routes/projectRoutes';
import imageRoutes from './routes/imageRoutes';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: env.CLIENT_URI,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));

app.use(express.json()); // This needs to be before any routes are handled

app.use("/api/projects", projectRoutes);
app.use("/api/images", imageRoutes);

// Cutom middleware to handle errors
const errorHandler =  (err: unknown, req: Request, res: Response, next: NextFunction) => { 
    let errorMessage = 'An error occurred'; 
    if(err instanceof Error){ // Check if the error is an instance of the Error class
        errorMessage = err.message;
    }
    console.error(err);
    res.json({error: errorMessage});
    next();
}
app.use(errorHandler);

export default app;
