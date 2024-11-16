import { Select, MenuItem,Box } from '@mui/material'
import React from "react";
import SelectProfessor from '../../../method/GetProfessor';
import {InputLabel} from '@mui/material';
import FormControl from '@mui/material/FormControl';

const SelectProf = () => {
  const { data, loading, error } = SelectProfessor();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel >Age</InputLabel>
        <Select label = "Age" sx={{ width: '150px', height: '50px',borderRadius:5 }}>
          {data.length > 0 ? (
        data.sort((a, b) => new Date(b.date) - new Date(a.date)).map((prof) => (
        <MenuItem value={prof.username} label="select professor">{prof.name_th}</MenuItem>))
    ) : (null)}
          </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default SelectProf