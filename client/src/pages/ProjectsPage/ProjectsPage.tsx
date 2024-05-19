import React from 'react';
import Box from '@mui/material/Box';
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay';
import { Container, Title } from './ProjectPageStyles';



const ProjectsPage = () => {
  return (
    <Container>
        <Title>
            Projects
        </Title>
        <Box style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            // border: `1px solid ${maincolor}`,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}>
            <ProjectDisplay />
        </Box>
    </Container>
  )
}

export default ProjectsPage
