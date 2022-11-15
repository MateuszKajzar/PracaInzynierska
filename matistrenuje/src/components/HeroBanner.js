import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.JPG'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'} 
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="40px">
            Mateusz Kajzar
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '26px', xs: '22px'} }} mb="23px" mt="30px">
            Treningi personalne <br />
            Plany Treningowe <br />
            Współpraca online
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Potrzebujesz pomocy w wyborze ćwiczeń?
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#ff2625', padding: '10px'}}>Wyszukiwarka ćwiczeń</Button>
        
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '55px' }} mt="37px">
        Nie licz dni, <br />
        spraw by dni się liczyły
    </Typography>

        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner