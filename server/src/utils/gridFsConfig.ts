import multer from 'multer';
import env from "./validateEnv";
import  { conn } from '../server';
import { GridFSBucket } from 'mongodb';
import { storage } from './storageSetup';

export const initializeGridFs = (gfs: GridFSBucket) => {
    conn.once("open", () => {
        console.log("Connection to database established");
        gfs = new GridFSBucket(conn.db, {
            bucketName: env.BUCKET_NAME
        })
    })
};

const upload = multer({ storage });
export default upload;