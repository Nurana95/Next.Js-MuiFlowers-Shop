'use client';
import { ReactNode } from 'react';
import './globals.css';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import createEmotionCache from '../app/motionCache/createEmotionCache.ts';
import theme from './Styles/theme';
import Navbar from './Components/Navbar/navbar';
import { oswald, cormorant, Roboto } from './Styles/FontFamily/fontawesome';
import LoadingIndicator from './Components/Loading/loadingIndicator';
import Footer from './Components/Footer/footer';
import { FilterProvider } from './Utils/hooks/filterContext';
import { CartProvider } from './Utils/hooks/useCartContex';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${Roboto.variable} ${cormorant.variable}`}
        cz-shortcut-listen="true"
      >     <LoadingIndicator />
        <CacheProvider value={createEmotionCache()}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
              styles={{
                body: {
                  overflowX: 'hidden',

                },
              }}
            />
            <CartProvider>
              <Navbar />
              <FilterProvider>
                {children}
                <Footer />
              </FilterProvider>
            </CartProvider>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
