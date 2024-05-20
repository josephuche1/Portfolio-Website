import { Router } from 'express';
import { getProjects, getProject, uploadProject, updateProject, deleteProject } from '../controllers/projectsControllers';

const router = Router(); // Create a new router

router.get('/', getProjects);   // get all projects
router.get('/:id', getProject); // get a single project
router.post('/upload', uploadProject); // upload project
router.put('/update/:id', updateProject); // update project
router.delete('/delete/:id', deleteProject); // delete project

export default router; // Export the router