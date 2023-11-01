import express from "express";
import mongoose from "mongoose";
import _ from "lodash";
import fs from "fs";
import formidableMiddleware from "express-formidable";
import mongodb from "mongodb";
import path from "path";
import crypto from "crypto";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;

const mongoURI = "mongodb+srv://admin-joseph:olisa312@cluster0.pxzmyq9.mongodb.net/portfolio-projects"
// Connect to mongodb database
mongoose.connect(mongoURI)
    .then(() =>{
        console.log("Connected to DB successfully");
    })
    .catch((err) => {
        console.log(`Failed to connect to DB: ${err.message}`);
    });


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(formidableMiddleware());

const projectSchema = new mongoose.Schema({
    imageName: String,
    title: String,
    description: String,
    startDate: String,
    endDate: String,
    timestamp: String, 
});

const Project = mongoose.model("project", projectSchema);

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'projectImages' 
    });
});


app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/form", (req,res) => {
    res.render("form.ejs");
});

app.post("/form", (req,res) => {
    // console.log(req.fields);
    // console.log(req.files.image);
    const projectImage = req.files.image;
    const date = new Date()
    const d = date.getDate() + "/" + (date.getMonth()+1)  + "/" + date.getFullYear() + " | "+ date.getHours() + ":"  
    + date.getMinutes();

    const buf = crypto.randomBytes(16);
    const filePath = buf.toString('hex')+ path.extname(projectImage.name);

    const readStream = fs.createReadStream(projectImage.path);

    const uploadStream = gfs.openUploadStream(filePath, {
        chunkSizeBytes: 1048576,
            metadata:{
                name: projectImage.name,
                size: projectImage.size, 
                type: projectImage.type
            }
    });
    readStream.pipe(uploadStream);

    const newProject = new Project({
        imageName: filePath,
        title: req.fields.title,
        description: req.fields.description,
        startDate: req.fields.start,
        endDate: req.fields.end,
        timestamp: d
    })
    newProject.save();
})

app.listen(port, () => {
    console.log("Server is running from port 3000");
})