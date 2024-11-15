import React from 'react'
import { TextField } from '@mui/material'


const TextInput = (props) => {
  return (
    <div>
      <TextField id= {props.id} label= {props.label} variant="outlined" width= {props.width} multiline rows={props.rows} sx={{ m: props.m , flexGrow: 1 }} />
    </div>
  )
}

export default TextInput
