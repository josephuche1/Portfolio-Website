import React from 'react'
import TextField from '@mui/material/TextField'

interface ITextInputProps {
    label: string
    variant: 'filled' | 'outlined' | 'standard'
    value: string
}

const CustomTextInput: React.FC<ITextInputProps> = ({label, variant}) => {
  return (
    <TextField label={label} variant={variant} style={{
        marginTop: "20px",
        color: 'yellow',
        width: '80%',
      }}/>
  )
}

export default CustomTextInput
