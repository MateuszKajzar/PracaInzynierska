import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import Logo from '../assets/images/logobombel.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff2db">
      <Stack gap="40px" alignItems="center" px="50px" pt="24px" >
        <img src={Logo} alt="logo" width="100px" height="100px" />
        <Typography color="#FF2625" fontWeight="600" fontSize="40px">
            MKlifts
        </Typography>
        
      </Stack>
    </Box>
  )
}

export default Footer