'use client';
import React from 'react';
import {
    AppBar,
    Typography,
    Box,
    Container,
    IconButton,
    Link,
    Grid,
} from '@mui/material';
import PhoneIcon from '../../Styles/Svg/lightphone.svg';
import { logoIcon } from '../../Styles/Svg/SvgIcon';
import { NavLinks } from '../../Utils/data/linkData';
import { useMobileDrawer } from '../../Utils/hooks/useMobileDrawer';
import { SearchSet } from '../../Utils/hooks/search';
import { NavbarHooks } from '../../Utils/hooks/navbarHooks';
import MobileNavbar from './mobileNavBar';
import Dostavka from '@/app/Shared/dostavka';
import Search from '@/app/Shared/search';
import { usePathname } from 'next/navigation';
import ShoppingBag from '@/app/Shared/UI/Shoppingbag';

export default function Navbar() {
    const { searchOpen, toggleSearch, closeSearch } = SearchSet();
    const { shouldHidePhoneAndCart, trigger, } = NavbarHooks();
    const pathname = usePathname();
    const { isMobile } = useMobileDrawer('md');

    return (
        <Box sx={{
            height: { xs: (pathname === '/') ? 0 : 80, md: (pathname === '/Pages/Kataloq') || (pathname === '/') ? 0 : 80 },
            background: { xs: (pathname === '/') ? 'transparent' : 'black' }, md: 'transparent'
        }}>
            <AppBar
                elevation={0}
                sx={{
                    height: { xs: (pathname === '/') ? 0 : 80, md: (pathname === '/Pages/Kataloq') || (pathname === '/') ? 0 : 80 },
                    background: (trigger) ? 'black' : 'transparent',
                }}
            >
                <Container>
                    {!isMobile && (
                        <Grid container spacing={{ sm: 5, lg: 7 }}
                            justifyContent="space-between" alignItems="center">

                            {/* === CENTER BLOCK: LINKS AND SEARCH === */}
                            <Grid size={{ sm: 6, md: 7 }}>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: { sm: 3, lg: 7 } }}>
                                    {/* === LEFT BLOCK: LOGO === */}
                                    <Grid size={'auto'}>
                                        <Link href="/">{logoIcon}</Link>
                                    </Grid>
                                    {NavLinks.map((item, id) => (
                                        <Typography
                                            variant="body1"
                                            component={Link}
                                            key={id}
                                            underline="hover"
                                            href={item.href}
                                            sx={{ whiteSpace: 'nowrap' }}
                                        >
                                            {item.label}
                                        </Typography>
                                    ))}
                                    {/* === SEARCH === */}
                                    <Search
                                        searchOpen={searchOpen}
                                        toggleSearch={toggleSearch}
                                        closeSearch={closeSearch}
                                    />
                                </Box>
                            </Grid>

                            {/* === RIGHT BLOCK === */}
                            <Grid size={{ sm: 4, md: 4 }} sx={{ textAlign: 'right' }}>
                                {!trigger && !searchOpen && !shouldHidePhoneAndCart && <Dostavka />}
                                {(trigger || searchOpen || shouldHidePhoneAndCart) && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                            gap: 2,
                                        }}
                                    >
                                        {!searchOpen && (
                                            <Box
                                                sx={{
                                                    display: { xs: 'none', lg: 'flex' },
                                                    alignItems: 'center',
                                                    gap: 1,
                                                }}
                                            >
                                                <IconButton sx={{ p: 0, color: 'white' }}>
                                                    <PhoneIcon />
                                                </IconButton>
                                                <Typography variant="body1" color="primary">
                                                    +375 (29) 113-69-69
                                                </Typography>
                                            </Box>
                                        )}



                                        <ShoppingBag />


                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                    )}
                    {/* === MOBILE NAVBAR === */}
                    {isMobile && <MobileNavbar />}
                </Container>
            </AppBar>
        </Box >
    );
}   