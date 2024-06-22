import { Router } from 'express';
import { uploadImage, getImage, deleteImage } from '../controllers/imageControllers';
import  upload  from '../utils/gridFsConfig';

const router = Router();
router.post('/upload', upload.array('image', 1), (req, res, next) => {
    console.log("files uploaded: ", req.files);
    if (!req.files || req.files.length === 0) {
        console.error("No files uploaded.");
        return res.status(400).send("No files uploaded.");
    }
    next();
},uploadImage);
router.get('/:filename', getImage);
router.delete('/delete/:filename', deleteImage);

export default router;