"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { CustomChip } from '@/components/Temp/Chip';
import { Mail } from '@mui/icons-material';
import CustomBadge from '@/components/Temp/Badge';







const App: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor={'black'}>
       <Typography variant='d1' borderColor={'#FF5733'} borderRadius={5}>Badge</Typography>

     <CustomChip size='small' color='info' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='medium' color='warning' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='large' color='success' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='medium' color='error' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='medium' color='info' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomChip size='medium' color='warning' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomChip size='medium' color='success' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomChip size='large' color='error' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomBadge badgeContent={5} max={10} color="primary">
        <span>Primary</span>
      </CustomBadge>

      <CustomBadge badgeContent={8} color="info" variant="outline">
        <span>Error</span>
      </CustomBadge>
     
      <CustomBadge badgeContent={10} color="success" variant="filled">
        <span>Success</span>
      </CustomBadge>
   
    </Box>
  );
};

export default App;
