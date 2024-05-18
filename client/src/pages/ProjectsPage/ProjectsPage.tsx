import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { maincolor, fontFamily } from '../../globalVars';
import ProjectCard from '../../components/ProjrctCard/ProjectCard';
import Grid from '@mui/material/Grid';

const ProjectsPage = () => {
  return (
    <Box style={{
        paddingTop: '60px',
        backgroundColor: "black",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Typography variant="h3" gutterBottom style={{
            color: maincolor,
            fontFamily: fontFamily,
            textTransform: 'uppercase',
            fontWeight: 400,
            textAlign: 'center',
        }}>
          Projects
        </Typography>
        <Grid container style={{
            height: '90%',
            width: '90%',
        }}>
            <Grid item sm={12} md={3}>
                <ProjectCard title="Project 1" image="https://via.placeholder.com/150" />
            </Grid>
            <Grid item sm={12} md={3} >
                <ProjectCard title="Project 2" image="https://via.placeholder.com/150" />
            </Grid>
            <Grid item sm={12} md={3}>
                <ProjectCard title="Project 3" image="https://via.placeholder.com/150" />
            </Grid>
            <Grid item sm={12} md={3} >
                <ProjectCard title="Project 4" image="https://via.placeholder.com/150" />
            </Grid>
            <Grid item sm={12} md={3}>
                <ProjectCard title="Project 5" image="https://via.placeholder.com/150" />
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProjectsPage
