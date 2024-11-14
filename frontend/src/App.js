import { Grid2, Toolbar } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/Login';

function Fea(params) {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Outlet/>
    </div>
  ) 
}

const App = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Grid2 >
      {isLoggedIn ? (
    <Fea />
  ) : (
    <Login />
  )}
    </Grid2>
  )
}

export default App;