import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { fontFamily } from '../../globalVars'

interface ITabItemProps {
    title: string;
    linkto: string;
}

const TabItem: React.FC<ITabItemProps> = ({title, linkto}) => {
  return (
    <Box 
      style={{
        borderBottom: '3px solid #FF9F66',
      }}
    >
      <Link to={linkto} style={{textDecoration: 'none'}}>
        <Typography variant="h6" 
          style={{
            color: 'white', 
            fontFamily: fontFamily,
            textTransform: 'uppercase',
            fontWeight: 300,
            fontSize: '20px',
          }}
        >
            {title}
        </Typography>
      </Link>
    </Box>
  )
}

export default TabItem
