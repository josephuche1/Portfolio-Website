import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { maincolor } from '../../globalVars';
import { display, height } from '@mui/system';

interface IAboutMeProps {
  description: string;
}

const AboutMe: React.FC<IAboutMeProps> = ({description}) => {
  return (
    <Box style={{
      padding: "50px",
      backgroundColor: "rgb(0, 0, 0, 1)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      height: "60vh",
    }}>
      <Typography variant="h4" style={{
        textAlign: "center",
        padding: "20px 0px",
        color: maincolor,
        fontWeight: "bold",
        fontFamily: "Oswaldo, sans-serif",
      }}>
        About Me
      </Typography>
      <Box style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
        <Typography variant="body1" style={{
          textAlign: "center",
          color: "white",
          fontFamily: "Oswaldo, sans-serif",
          fontSize: "1.2rem",
        }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe
