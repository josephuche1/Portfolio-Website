import React from 'react';
import Box from '@mui/material/Box';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

const Form = () => {
  return (
    <Box style={{
        backgroundColor: 'green',
    }}>
        <CustomTextInput label="Name" variant="filled" value="John Doe"/>
        <CustomTextInput label="Email" variant="outlined" value="Yo"/>

    </Box>
  )
}

export default Form
