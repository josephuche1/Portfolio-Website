import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from '../ProjrctCard/ProjectCard';
import { maincolor } from '../../globalVars';

const Projects: React.FC = () => {
  return (
    <Box style={{
      backgroundColor: "black",
      padding: "20px",

    }}>
      <Box>
        <Typography variant="h4" style={{
          color: maincolor,
          fontWeight: "bold",
          fontFamily: "Oswald, sans-serif",
        }}>
          Projects
        </Typography>
      </Box>
      <Box >
        <ProjectCard title="Project 1" image="https://via.placeholder.com/150" />
        <ProjectCard title="Project 2" image="https://via.placeholder.com/150" />
      </Box>
    </Box>
  )
}

export default Projects
