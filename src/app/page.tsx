import React from 'react';
import { Box } from '@mui/material';
import Badge from '@/components/Temp/VaccinateBadge';

const App: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor={'#f5f5f5'}>
      <Badge content="1" variant="filled" size="large" color="primary" />
      <Badge content="2" variant="outlined" size="large" color="secondary" />
      <Badge content="3" variant="outlined" size="large" color="error" />
    </Box>
  );
};

export default App;
