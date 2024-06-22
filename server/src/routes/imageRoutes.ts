import { Router } from 'express';
import { uploadImage, getImage, deleteImage } from '../controllers/imageControllers';
import  upload  from '../utils/gridFsConfig';

const router = Router();
router.post('/upload', upload.array('image', 1), uploadImage);
router.get('/:filename', getImage);
router.delete('/delete/:filename', deleteImage);

export default router;