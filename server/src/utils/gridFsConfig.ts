import multer from 'multer';
import env from "./validateEnv";
import  { conn } from '../server';
import { GridFSBucket, MongoClient } from 'mongodb';
import { storage } from './storageSetup';

export const initializeGridFs = async (gfs: GridFSBucket) => {
    const client = new MongoClient(env.MONGO_URI);
    await client.connect();
    const db = client.db(env.DB_NAME);

    conn.once("open", () => {
        console.log("Connection to database established");
        gfs = new GridFSBucket(db, {
            bucketName: env.BUCKET_NAME
        })
    })
};

const upload = multer({ storage });
export default upload;