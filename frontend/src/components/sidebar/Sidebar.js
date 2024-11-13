import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sidebarItem } from './consts/sidebarItem';
import Box from '@mui/material/Box';
import { styles } from './styles';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';
import {Grid2} from '@mui/material';
import logo from '../../assets/images/logo.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MyListItem from '../common/listItem/MyListItem';


const Sidebar = () => {
  const navigate = useNavigate();
  
  const isToggled = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());  
  };


  return (
    <Grid2>
   
    <SwipeableDrawer
      anchor="left"
      open={isToggled}
      sx={{width: {sm: 300,},[`& .MuiDrawer-paper`]: { width: 300, }}}
      onClose={handleToggle}
      variant={"temporary"}
    >
       <Toolbar >
            <Grid2 item sx={{flexGrow: 1}}>
            <img src={logo} alt="Thamasart" style={{ height: '40px' }} />
            </Grid2> 
        </Toolbar>
      <Box >
        <Divider />
        <List> 
            <ListItem
                  button
                  onClick={() => {
                    navigate('student-dashboard');
                  }}
                  sx={{borderRadius: 2, mb: 1}}
              >
                <ListItemIcon
                  sx={styles.icons}
                >
                  <AccessTimeIcon/>
                </ListItemIcon>
                <ListItemText
                  sx={styles.text}
                  primary={'สถานะ'}
                />
              </ListItem> 
              <Divider/>
            {sidebarItem.map((item, index) => (
              <MyListItem item={item} key={item.id} styles={styles}/>
            ))}
          </List>
          </Box>
    </SwipeableDrawer>
    </Grid2>
    
  );
};

export default Sidebar;