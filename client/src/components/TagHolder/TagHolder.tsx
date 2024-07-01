import React from 'react'
import Box from '@mui/material/Box'
import Tags from '../Tags/Tags';
import techStackTags from './tagslist';


const TagHolder: React.FC = () => {
  return (
    <Box 
    >
        {techStackTags.map((tag, index) => (
            <Tags key={index} name={tag.name} description={tag.description} />
        ))}
    </Box>
  )
}

export default TagHolder
