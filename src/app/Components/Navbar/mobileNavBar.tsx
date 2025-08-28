'use client';
import React from 'react';
import {
  Typography,
  Box,
  IconButton,
  Drawer,
  Stack,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '../../Styles/Svg/bar.svg';
import CloseIcon from '../../Styles/Svg/close.svg';
import { logoIcon, } from '../../Styles/Svg/SvgIcon';
import { MobileNavLinks } from '../../Utils/data/linkData';
import { useMobileDrawer } from '../../Utils/hooks/useMobileDrawer';
import { SearchSet } from '../../Utils/hooks/search';
import { NavbarHooks } from '../../Utils/hooks/navbarHooks';
import { dFlexSpaceB, directionColumn } from '../../Styles/sx/index';
import SocialIcon from '../../Shared/socialIcon';
import PlaceTime from '@/app/Shared/placeTime';
import Dostavka from '@/app/Shared/dostavka';
import Search from '@/app/Shared/search';
import ShoppingBag from '@/app/Shared/UI/Shoppingbag';


export default function MobileNavbar() {
  const { mobileOpen, isMobile, toggleDrawer } = useMobileDrawer('md');
  const { searchOpen, toggleSearch, closeSearch, } = SearchSet();
  const { trigger, shouldHidePhoneAndCart, mobileBgColor } = NavbarHooks();

  return (
    <>
      {isMobile && (
        <Box sx={{
          ...dFlexSpaceB,
          height: 80
        }}>
          <IconButton onClick={toggleDrawer} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
          <Box sx={{ ...directionColumn, alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={{ whiteSpace: 'pre-line', textAlign: 'center', display: trigger || shouldHidePhoneAndCart || mobileBgColor ? '' : 'none' }}>
              Lover{'\n'}
              Flower
            </Typography>
          </Box>
          <ShoppingBag />
        </Box>
      )}
      <Drawer
        anchor="left"
        open={mobileOpen}
        sx={{
          background: 'linear-gradient(180deg, rgb(9, 32, 27),  #43FFD2, #7D2253, rgb(22, 11, 19))',
        }}
        PaperProps={{
          sx: {
            bgcolor: 'black',
            color: 'white',
            maxWidth: 259,
            width: '100%',
            p: 2,
          },
        }}
      >
        {/* Logo and Close Button */}   <Stack spacing={1} >
          <Box sx={{ ...dFlexSpaceB }}>
            <Link href="/">{logoIcon}</Link>
            <IconButton onClick={toggleDrawer} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Search Section */}
          <Search searchOpen={searchOpen}
            toggleSearch={toggleSearch}
            closeSearch={closeSearch} />

          {/* Navigation Links */}

          {MobileNavLinks.map((item, index) => (
            <Typography variant="body1" component={Link} key={index} href={item.href} >
              {item.label}
            </Typography>
          ))}
          <Divider sx={{ width: '100px' }} />
          {/* Contact Information */}
          <Box pt={2} >
            <Dostavka />
          </Box>
          {/* Address Information */}
          <Box >
            <PlaceTime />
          </Box>

          {/* Privacy Policy */}
          <Box >
            <Typography variant="subtitle1" color='primary.secondary'>
              Политика конфиденциальности <br /> Обработка персональных данных
            </Typography>
          </Box>
          {/* Phone Number */}
          <Box >
            <Typography variant="body1" >
              +375 (29) 113-69-69
            </Typography>
          </Box>
          {/* Social Icons */}
          <Box sx={{ display: 'flex', pt: 2, gap: 2 }}>
            <SocialIcon />
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}