import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/images/logo.png';


function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const full_name = localStorage.getItem('name_th');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <Typography variant="h6" sx={{ backgroundColor: "#902923" }}>Status</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary="ตรวจสอบสถานะคำร้อง" />
          </ListItemButton>
        </ListItem>
      </List>
      
      <Typography variant="h6" sx={{ backgroundColor: "#ff0000" }}>Create Request Menu</Typography>
      <List>
        {['คำร้องประเภทวิชาการ', 'คำร้องประเภทค่าใช้จ่าย', 'คำร้องสถานะนักศึกษา', 'คำร้องอื่นๆ', 'คำร้องเทียบโอนรายวิชา'].map((text, index) => (
          <React.Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleToggle(`menu-${index}`)}>
                <ListItemText primary={text} />
                {openMenus[`menu-${index}`] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openMenus[`menu-${index}`]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={`Sub Item for ${text} - 1`} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={`Sub Item for ${text} - 2`} />
                </ListItemButton>
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#FFFFFF' ,boxShadow:'none',borderBottom: '0.5px solid #000'}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, color: '#000' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <img src={logo} alt="Thamasart" style={{ height: '40px' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#000' }}>
          <Typography variant="body1" sx={{ color: '#000',mr:2 }}>{full_name}</Typography>
          <PersonIcon/>
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Navbar;
