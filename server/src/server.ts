import app from './app';
import mongoose, {Error} from 'mongoose';
import env from './utils/validateEnv';
import { GridFSBucket } from 'mongodb';
import { initializeGridFs } from './utils/gridFsConfig';

const port = env.PORT; // Get the port from the environment variables
let gfs:  GridFSBucket; // Initialize the GridFSBucket object


mongoose.connect(env.MONGO_URI)
    .then(() => {
        console.log("Successfully connected to the database");
        initializeGridFs(gfs) // Initialize the GridFSBucket object
        console.log("GridFSBucket object initialized");
        app.listen(port, () => {
            console.log("Server is running on port: ", port);
        })
    })
    .catch((err: Error) => {
        console.error("An error occurred while connecting to the database: ", err.message);
    })
 
export const conn: mongoose.Connection = mongoose.connection; // Export the connection object for testing purposes

export { gfs }; // Export the GridFSBucket object for testing purposes