// components/Sidebar.tsx
import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Home, Info, Settings } from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const sidebarItems = [
  { text: 'Home', icon: <Home />, path: '/' },
  { text: 'About', icon: <Info />, path: '/about' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <Typography variant="h6" sx={{ padding: 2 }}>
          Dashboard
        </Typography>
        <List>
          {sidebarItems.map((item, index) => (
           <ListItem component="li" key={index}>
           <ListItemIcon>{item.icon}</ListItemIcon>
           <ListItemText primary={item.text} />
         </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
