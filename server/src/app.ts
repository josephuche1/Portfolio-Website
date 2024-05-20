import "dotenv/config";
import express, {Request, Response, NextFunction} from 'express';
import projectToutes from './routes/projectRoutes';

const app = express();

app.use("/api/projects", projectToutes);

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
