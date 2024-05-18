import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { maincolor, fontFamily } from '../../globalVars';
import zIndex from '@mui/material/styles/zIndex';

interface IAboutMeProps {
  description: string;
}

const AboutMe: React.FC<IAboutMeProps> = ({description}) => {
  return (
    <Box style={{
      backgroundColor: "rgb(0, 0, 0, 1)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      height: "60%",
      paddingTop: "0px",
      marginTop: "-120px",
      paddingBottom: "100px",
    }}>
      <Typography variant="h4" style={{
        textAlign: "center",
        padding: "20px 0px",
        color: maincolor,
        fontWeight: "bold",
        fontFamily: fontFamily,
        marginTop: "100px",
        paddingTop: "50px",
        marginBottom: "40px",
      }}>
        About Me
      </Typography>
      <Box style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        margin: "0px 20px",
      }}>
        <Typography variant="body1" style={{
          textAlign: "center",
          color: "white",
          fontSize: "1.2rem",
        }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe
