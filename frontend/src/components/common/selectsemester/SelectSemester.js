import React from 'react'
import { Select, MenuItem } from '@mui/material'

const SelectSemester = (props) => {
  return (
        <Select id="semester" name="semester" variant="outlined" onChange={props.onChange} sx={{ width:props.width,height:props.height,borderRadius:5 }}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="summer">summer</MenuItem>
        </Select>
  )
}

export default SelectSemester
