import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectDisplay : React.FC = () => {
  return (
    <Grid container xs={12} style={{
        width: '100%',
        // border: `1px solid red`,
        display: 'flex',
    }}>
        <Grid item sm={6} md={4} lg={3}>
            <ProjectCard title="Project 1" image="https://via.placeholder.com/150" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <ProjectCard title="Project 2" image="https://via.placeholder.com/150" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <ProjectCard title="Project 3" image="https://via.placeholder.com/150" />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <ProjectCard title="Project 3" image="https://via.placeholder.com/150" />
        </Grid>
    </Grid>
  )
}

export default ProjectDisplay
