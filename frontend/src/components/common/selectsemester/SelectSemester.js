import React from 'react'
import { Select, MenuItem } from '@mui/material'

const SelectSemester = () => {
  return (
    <div>
        <Select id="semester" name="semester" variant="outlined" sx={{ width: '150px', height: '50px' }}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="summer">summer</MenuItem>
        </Select>
    </div>
  )
}

export default SelectSemester
