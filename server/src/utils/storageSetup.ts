import { GridFsStorage } from 'multer-gridfs-storage'; // Storage engine for multer to store files directly to MongoDB
import env from './validateEnv';
import crypto from 'crypto';
import path from 'path';
import { Request } from 'express';


export const storage = new GridFsStorage({
    url: env.MONGO_URI,
    file: (req: Request, file: Express.Multer.File) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    console.error("Error generating random bytes", err);
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: env.BUCKET_NAME
                };
                resolve(fileInfo);
            });
        });
    },
});