import React from 'react';
import Box from '@mui/material/Box';
import IHeroStyles from './HeroInterfaces';
import Typography from '@mui/material/Typography';

interface IHeroProps {
    title: string;
    body: string;
}


const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <Box style={HeroStyles.container}>
        <Box style={HeroStyles.InnerBox} >
            <Typography variant="h1" style={HeroStyles.title}>
                {props.title}
            </Typography>
            <Typography variant="body1" style={HeroStyles.body}>
                {props.body}
            </Typography>
        </Box>
        <Box style={HeroStyles.overlay} />
    </Box>
  )
}

const HeroStyles: IHeroStyles = {
    container: {
        backgroundImage: 'url("/assets/background.png")',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 25%',  // Center the background image
        height: '100vh',  // Set the height of the hero section
        color: 'white',  // Assuming you want white text for visibility
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',  // Add a semi-transparent background color
        
    },
    InnerBox: {
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Add a semi-transparent background color
        height: '100vh', // Set the height of the inner box
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxShadow: 'inset 300px 40px 100px 10px rgba(0,0,0,0.9), inset -300px -40px 100px 10px rgba(0,0,0,1)', // Adjust shadow as needed
        zIndex: 1,
        height: '100vh',
        width: '100%',
    },
    title: {
        fontFamily: "Oswald, sans-serif",
        fontSize: '3rem',
        margin: '0',
        fontWeight: 'bold',
    },
    body: {
        fontFamily: "Rubik, sans-serif",
        fontSize: '1.5rem',
    },
}

export default Hero
