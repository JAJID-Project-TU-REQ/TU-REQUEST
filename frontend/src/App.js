import React from 'react'
import ResponsiveAppBar from './components/navbar.js'
import Navbar from './components/navbar.js'
import { Grid } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import {Grid2} from '@mui/material'
import theme from './theme'



const App = () => {
  return (
  <Box sx={{ display: 'flex', 
  flexDirection: 'column', 
  minHeight: '100vh' }}>
    <Navbar />
    <Box sx={{ mt: 4, 
      flexGrow: 1, 
      p: 3 }}>
      <Outlet />
    </Box>
  </Box>
);
};

export default App;