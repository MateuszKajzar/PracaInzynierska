import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/baner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'} 
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="40px">
            MKlifts
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '26px', xs: '22px'} }} mb="23px" mt="30px">
            Exercise explorer <br />
            Workout routines <br />
            Beginner friendly instructions
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises personalized to you
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#ff2625', padding: '10px'}}>Find the best exercisese for you</Button>
        
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.5', display: { lg: 'block', xs: 'none' }, fontSize: '55px' }} mt="37px">
        Don't count days <br />
        Make every day count
    </Typography>

        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner