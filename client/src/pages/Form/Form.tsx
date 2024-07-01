import React from 'react';
import Box from '@mui/material/Box';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import TagHolder from '../../components/TagHolder/TagHolder';
import { maincolor } from '../../globalVars';

const Form = () => {
  return (
    <Box style={{
        backgroundColor: maincolor,
    }}>
        <CustomTextInput label="Title" variant="filled" value="John Doe"/>
        <CustomTextInput label="Description" variant="outlined" value="Yo"/>

        <Box style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#373A40',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid white',
            marginTop: '20px',
            
        }}
        >
            <TagHolder />
        </Box>

    </Box>
  )
}

export default Form;
