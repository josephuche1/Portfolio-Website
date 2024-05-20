import { RequestHandler } from "express";
import { IImage } from "../utils/InterfaceEnumsTypes";
import { gfs } from "../server";
import { EServerResponseStatus } from "../utils/InterfaceEnumsTypes";

// @desc    Get image
// @route   GET /image/:filename
export const getImage: RequestHandler = async (req, res, next) => {
    try{
        const file = await gfs.find({filename: req.params.filename}).toArray();
        if(file && file.length !== 0){
            gfs.openDownloadStreamByName(req.params.filename).pipe(res);
        } else {
            res.json({status: EServerResponseStatus.NOT_FOUND, message: "Image not found"});
        }
    } catch(err: unknown){
        next(err);
    }
}

// @desc    Upload image
// @route   POST /image/upload
export const uploadImage: RequestHandler = async (req, res, next) => {
    let imagesFilenames: string[] = [];
    try{
        if(!req.files || req.files.length === 0) {
            return res.json({status: EServerResponseStatus.ERROR, message: "No file uploaded"});
        } 
        const images = req.files as Express.Multer.File[];
        images.forEach((image: Express.Multer.File) => {
            imagesFilenames.push(image.filename);
        });
        res.json({status: EServerResponseStatus.SUCCESS, message: "Image uploaded", images: imagesFilenames});
    }catch(err: unknown){
        next(err);
    }
}

// @desc    Delete image
// @route   DELETE /image/:filename