"use client";
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CustomChip } from '@/components/Temp/Chip';
import { Mail } from '@mui/icons-material';
import CustomBadge from '@/components/Temp/Badge';









const App: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor={'white'}>
       <Typography variant='d1' borderColor={'#FF5733'} borderRadius={5}>Badge</Typography>

     <CustomChip size='small' color='info' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='medium' color='warning' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='large' color='success' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='medium' color='error' label='Chip' variant='filled' startIcon={<Mail/>} />
     <CustomChip size='medium' color='info' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomChip size='medium' color='warning' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomChip size='medium' color='success' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <CustomChip size='large' color='error' label='Chip' variant='outlined' startIcon={<Mail/>} />
     <Stack gap={4}>
 <CustomBadge variant='outline' color='primary' badgeContent={4} max={5} anchorOrigin={{vertical : 'bottom' , horizontal : 'right'}}>
  <Typography variant='l1' borderColor={'black'} borderRadius={5} sx={{padding : '0.5rem',color : 'black'}}>Badge</Typography>
 </CustomBadge>
 <CustomBadge variant='filled' color='primary' badgeContent={6} max={5} anchorOrigin={{vertical : 'top' , horizontal : 'right'}}>
  <Typography variant='l1' borderColor={'black'} borderRadius={5} sx={{padding : '0.5rem',color : 'black'}}>Badge</Typography>
 </CustomBadge>
 <CustomBadge variant='filled' color='primary' badgeContent={100} max={99} anchorOrigin={{vertical : 'top' , horizontal : 'right'}}>
  <Mail sx={{color : 'black'}}/>
 </CustomBadge>
      </Stack>
    </Box>
  );
};

export default App;
