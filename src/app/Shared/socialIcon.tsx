'use client';

import React from 'react';
import {
  IconButton,
} from '@mui/material';
import TelefonIcon from '../Styles/Svg/telefon.svg';
import WhatsAppIcon from '../Styles/Svg/whatsapp.svg';
import InstagramIcon from '../Styles/Svg/instagram.svg';
export default function SocialIcon() {
  return (
    <>

        {/* Social Icons */}
          <IconButton aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="WhatsApp">
            <WhatsAppIcon />
          </IconButton>
          <IconButton aria-label="Phone">
            <TelefonIcon />
          </IconButton>
      
    </>
  );
}