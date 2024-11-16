import React from 'react'
import { TextField } from '@mui/material'


const TextInput = (props) => {
  return (
      <TextField id= {props.id} label= {props.label} variant="outlined" onChange={props.onChange} multiline rows={props.rows} style={{ width: props.width }} sx={{ m: props.m,borderRadius:5 }} />
  )
}

export default TextInput
