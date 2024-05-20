import { RequestHandler } from "express";
import Project from "../models/projectSchema";
import { TProject } from "../models/projectSchema";
import { Error } from "mongoose";
import { EServerResponseStatus } from "../utils/InterfaceEnumsTypes";
import { IProject } from "../utils/InterfaceEnumsTypes";


// Get all projects
export const getProjects: RequestHandler = async (req, res, next) => {
    try{
        const projects = await Project.find({});
        if(projects.length !== 0){
            res.json({status: EServerResponseStatus.SUCCESS, projects});
        } else {
            res.json({status: EServerResponseStatus.NO_PROJECTS});
        }
    } catch(err: unknown) {
        next(err);
    }
}

// Get a single project
export const getProject: RequestHandler = async  (req, res, next) => {
    try{
        const project = await Project.findById(req.params.id);
        if(project){
            res.json({status: EServerResponseStatus.SUCCESS, project});
        } else {
            res.json({status: EServerResponseStatus.NOT_FOUND});
        }
    } catch(err: unknown) {
        next(err);
    }
}

// Upload a new project
export const uploadProject: RequestHandler<unknown, unknown, IProject, unknown> = async (req, res, next) => {
    const { title, description, image, technologies, link } = req.body;
    try{
        const newProject = new Project({
                title,
                description,
                image,
                technologies,
                link
        });
        await newProject.save();
        res.json({status: EServerResponseStatus.SUCCESS, message: "Project uploaded successfully"});
    } catch(err: unknown) {
        next(err);
    }
}

// Update a project
export const updateProject: RequestHandler = async (req, res, next) => {
    const { title, description, image, technologies, link } = req.body;
    try{
        const project = await Project.findById(req.params.id);
        if(project){
            project.title = title || project.title;
            project.description = description || project.description;
            project.image = image || project.image;
            project.technologies = technologies || project.technologies;
            project.link = link || project.link;
            await project.save();
            res.json({status: EServerResponseStatus.SUCCESS, message: "Project updated successfully"});
        } else {
            res.json({status: EServerResponseStatus.NOT_FOUND});
        }
    } catch(err: unknown) {
        next(err);
    }
}

// Delete a project
export const deleteProject: RequestHandler = async (req, res, next) => {
    try{
        await Project.findByIdAndDelete(req.params.id);
        res.json({status: EServerResponseStatus.SUCCESS, message: "Project deleted successfully"});
    } catch(err: unknown) {
        next(err);
    }
}