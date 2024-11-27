import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HomeBannerImage from '../assets/images/banner.jpg';

const HomeBanner = () => (
  <Box style={{border:'2px solid black',display:'flex' ,flexDirection:'column',alignItems:'center',justifyContent:'center'}}
  sx={{ 
    mt: { lg: '50px', xs: '40px' },
    backgroundImage: `url(${HomeBannerImage})`, // Add the background image
      backgroundSize: 'cover', // Ensure the image covers the entire box
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      p: '20px',
  }} 
    position="relative" p="20px">
    <Typography 
    color="#FF2625" 
    fontWeight="600" 
    fontSize="40px">Fithub</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '60px', xs: '40px' } }} mb="23px" mt="30px" style={{}}>
      Exercises, Be healthy <br />
      and Build Community
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ 
        marginTop: '45px', 
        textDecoration: 'none', 
        width: '200px', 
        textAlign: 'center', 
        background: '#FF2625', 
        padding: '14px', 
        fontSize: '22px', 
        textTransform: 'none', 
        color: 'white', 
        borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} 
    color="#FF2625" 
    sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
  </Box>
);

export default HomeBanner;