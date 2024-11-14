import { Grid2, Toolbar } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';



const App = () => {
  return (
    <Grid2 sx={{display: 'flex'}}>
      <Sidebar/>
      <Navbar/>
      <Outlet/>
    </Grid2>

  )
}

export default App;