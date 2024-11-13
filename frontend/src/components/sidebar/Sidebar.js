// Sidebar.js
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sidebarItem } from './consts/sidebarItem';
import { styles } from './styles';
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();


  return (
    <Drawer sx={navbarStyles.drawer} anchor="left" open={open} onClose={toggleDrawer(false)}>
 <Toolbar />
        <Divider />
        <List>
          {sidebarItem.map((item, index) => (
            <ListItem
                button
                key={item.id}
                onClick={() => navigate(item.route)}
            >
              <ListItemIcon
                sx={navbarStyles.icons}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={navbarStyles.text}
                primary={item.label}
              />
            </ListItem>
          ))}
        </List>
    </Drawer>
  );
};

export default Sidebar;