import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import formidableMiddleware from "express-formidable";
import mongodb from "mongodb";
import path from "path";
import crypto from "crypto";

const app = express();

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
    completed: String, 
    github: String,
    site: String,
});

const Project = mongoose.model("project", projectSchema);

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'projectImages' 
    });
});


app.get("/", async (req,res) => {
    const projects = await Project.find({});
    res.render("index.ejs", {projects: projects, admin:false});
});

app.get("/admin", async (req, res) => {
    const projects = await Project.find({});
    res.render("index.ejs", {projects: projects, admin: true});
});

app.get("/admin/project", (req,res) => {
    res.render("project.ejs");
});

app.get("/admin/project/:id", async (req,res) => {
    const id = req.params.id;
    try{
        const project = await Project.findById(id);
        res.render("project.ejs", {project: project, admin:false});
    }
    catch(err){
        console.error(err.message);
        res.render("project.ejs");
    }

    
});

app.post("/admin/project", async (req,res) => {
    const projectImage = req.files.image;

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
        timestamp: new Date(),
        completed:req.fields.completed || " "
    })
    await newProject.save();
    uploadStream.on("finish", () => {
        res.redirect(`/admin/project`);
    });
});

app.post("/admin/project/:id", async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    const image = req.files.image;

    if(image.name !== ""){
        const oldImage = await gfs.find({filename:project.imageName}).toArray();
        await gfs.delete(oldImage[0]._id);
        
        const buf = crypto.randomBytes(16);
        const filePath = buf.toString('hex')+ path.extname(image.name);
    
        const readStream = fs.createReadStream(image.path);
    
        const uploadStream = gfs.openUploadStream(filePath, {
            chunkSizeBytes: 1048576,
                metadata:{
                    name: image.name,
                    size: image.size, 
                    type: image.type
                }
        });
        readStream.pipe(uploadStream);
        uploadStream.on("finish", async () => {
            project.imageName = filePath;
            await project.save();
        });
    }

    project.title = req.fields.title || project.title;
    project.description = req.fields.description || project.description;
    project.startDate = req.fields.start || project.startDate;
    project.endDate = req.fields.end || project.endDate;
    project.completed = req.fields.completed || project.completed;
    project.github = req.fields.github || project.github;
    project.site = req.fields.site || project.site;
    project.time = new Date();
    await project.save();
    res.redirect("/admin");
});

app.get("/admin/project/:id/delete", async (req,res) => {
    const id = req.params.id;
    const project = await Project.findById(id);

    const image = await gfs.find({filename: project.imageName}).toArray();
    await gfs.delete(image[0]._id);

    await Project.findByIdAndDelete({_id: id});
    res.redirect("/admin");
})

app.get("/view/:id", async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    res.render("viewProject.ejs", {project:project, admin:false});     
});

app.get("/admin/view/:id", async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    res.render("viewProject.ejs", {project:project, admin:true});
})

// Display project screenshot images
app.get("/images/:filename", async (req, res) => {
     try{
        const file = await gfs.find({filename:req.params.filename}).toArray();
        if(file.length === 0 || !file){
            res.sendStatus(404);
        } else{
            const readStream = gfs.openDownloadStreamByName(req.params.filename);
            readStream.pipe(res);
        }
    }catch(err){
        res.status(404).send({Error: err.message});
    }
});

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
    console.log("Server is running from port 3000");
})