import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IHeaderStyles from './HeaderInterfaces';
import TabItem from '../TabItem/TabItem';


const Header: React.FC = () => {
  return (
    <Box style={HeaderStyles.container}>
      <Box
        style={{
          display: 'flex',
          gap: '40px',
          flexDirection: 'row',
          marginRight: '30px',
        }}
      >
        <TabItem title="Home" linkto="/" />
        <TabItem title="Projects" linkto="/projects" />
        <TabItem title="Contact" linkto="/contact" />
      </Box>
    </Box>
  )
}

const HeaderStyles : IHeaderStyles = {
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '10px',
        display: 'flex',
        height: '5vh',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'fixed',
        width: '100vw',
        zIndex: 4,
        paddingBottom: "0px",
        // borderBottom: '1px solid #FF9F66',
    },
}

export default Header
