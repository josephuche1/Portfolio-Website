import React, {useRef} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from '../ProjrctCard/ProjectCard';
import { maincolor } from '../../globalVars';
import useDragToScroll from '../../hooks/UseDragToScroll';

const Projects: React.FC = () => {
  const ScrollRef = useRef<HTMLDivElement>(null);
  useDragToScroll(ScrollRef);

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
          textAlign: "center",
        }}>
          Projects
        </Typography>
      </Box>
      <Box ref={ScrollRef} style={{
        display: "flex",
        overflowX: "auto",
        scrollbarWidth: "none",
        cursor: "grab",
      }}>
        <ProjectCard title="Project 1" image="https://via.placeholder.com/150" />
        <ProjectCard title="Project 2" image="https://via.placeholder.com/150" />
        <ProjectCard title="Project 3" image="https://via.placeholder.com/150" />
        <ProjectCard title="Project 4" image="https://via.placeholder.com/150" />
        <ProjectCard title="Project 5" image="https://via.placeholder.com/150" />
        <ProjectCard title="Project 6" image="https://via.placeholder.com/150" />
      </Box>
    </Box>
  )
}

export default Projects
