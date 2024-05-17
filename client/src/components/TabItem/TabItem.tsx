import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

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
            fontFamily: "Oswaldo, sans-serif",
            textTransform: 'uppercase',
            fontWeight: 100,
            fontSize: '15px',
          }}
        >
            {title}
        </Typography>
      </Link>
    </Box>
  )
}

export default TabItem
