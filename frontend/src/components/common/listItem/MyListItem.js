import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, Grid2 } from '@mui/material';
import { useNavigate } from "react-router-dom";


const MyListItem = (props) => {
    const navigate = useNavigate();
    const item = props.item;
    const children = item.children;
    const styles = props.styles;
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
  return (
    <Grid2>
    <ListItem
        button
        key={item.id}
        onClick={handleToggle}
    >
        <ListItemIcon
            sx={styles.icons}
        >
            {item.icon}
        </ListItemIcon>
        <ListItemText
            sx={styles.text}
            primary={item.label}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>  
    <Collapse in={open}  timeout="auto" unmountOnExit>
        {children.map((child, index) => (
            <ListItem
                button
                onClick={() => navigate(child.routes)}
                key={child.id}
                sx={{pl: 12}}
            >
                <ListItemText
                    sx={props.styles.childernText}
                    primary={child.label}
                />
            </ListItem>
        ))}
    </Collapse>
    </Grid2>
    )
}

export default MyListItem