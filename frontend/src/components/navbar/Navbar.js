import React from 'react'
import { AppBar, IconButton, Toolbar, Grid2, Typography, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconPerson from '@mui/icons-material/Person';
import {  useDispatch } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';
import logo from '../../assets/images/logo.png';



const Navbar = () => {
  const dispatch = useDispatch();
  const full_name = localStorage.getItem('name_th');

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <>
      <AppBar sx={{boxShadow: 'none' ,backgroundColor: '#fff', justifyContent: 'center',}} >
        <Toolbar >
            <IconButton sx={{mr: 2}} onClick={handleToggle}>
             <MenuIcon />
            </IconButton>
            <Grid2 item sx={{flexGrow: 1}}>
            <img src={logo} alt="Thamasart" style={{ height: '40px' }} />
            </Grid2>
            <Typography variant="body1" sx={{ color: '#000', mr: 2 }}>{full_name}</Typography>
            <IconButton>
              <IconPerson />
            </IconButton>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  )
}

export default Navbar