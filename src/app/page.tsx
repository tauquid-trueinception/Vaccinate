"use client";
import React from 'react';
import { Box,  IconButton, Typography } from '@mui/material';
import { CustomChip } from '@/components/Temp/Chip';
import CustomBadge from '@/components/Temp/VaccinateBadge';
import { Mail } from '@mui/icons-material';
import { Stack } from '@mui/system';







const App: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor={'#f5f5f5'}>
       <Typography variant='d1' borderColor={'#FF5733'} borderRadius={5}>Badge</Typography>
<Stack>
   <CustomBadge size='small' color='success' badgeContent={2} customvariant={'outlined'} >
    <IconButton><Mail/></IconButton>
   </CustomBadge>
   <CustomBadge size='large' color='primary' badgeContent={4} customvariant={'filled'} >
    <IconButton><Mail/></IconButton>
   </CustomBadge>
     </Stack>
     <CustomChip size='medium' color='success' label='Chip' variant='outlined' startIcon={<Mail/>} />
    </Box>
  );
};

export default App;
