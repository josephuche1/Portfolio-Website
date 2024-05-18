import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProjectCardProps {
    title: string;
    // link: string;
    image: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({title,  image}) => {
  return (
    <Box style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        width: '250px',
        boxShadow: 'inset 30px 40px 50px 0 rgba(0,0,0,0.2), inset -30px -40px 50px 0 rgba(0,0,0,0.2), 30px 40px 50px 0 rgba(0,0,0,0.2), -30px -40px 50px 0 rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: "flex-end",
        margin: "20px",
        borderRadius: "10px",
        padding: "10px",
    }}>
        <Typography variant="h4" style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          textWrap: "wrap",
        }}>
            {title}
        </Typography>
    </Box>
  )
}

export default ProjectCard
