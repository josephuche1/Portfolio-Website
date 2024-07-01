import React from 'react';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

interface ITagProps {
    name: string;
    onClick?: () => void;
}

const Tags: React.FC<ITagProps> = ({ name }) => {
  return (
    <Tooltip title={name}>
        <Chip label={name} style={{
            backgroundColor: 'white',
            color: 'black',
            margin: '5px',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            fontSize: '12px',
            textTransform: 'capitalize'
        }} />
    </Tooltip>
  )
}

export default Tags
