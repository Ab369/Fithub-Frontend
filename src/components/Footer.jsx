import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack style={{fontSize:'20px',padding:'10px',fontWeight:'bold'}} gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      Fithub Fitness
    </Stack>
  </Box>
);

export default Footer;