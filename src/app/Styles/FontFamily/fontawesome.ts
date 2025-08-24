import { Cormorant, Oswald, Roboto_Condensed, } from 'next/font/google';



export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '300', '700', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});
export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '200', '300', '700', '500', '600'],
  variable: '--font-oswald',
  display: 'swap',
})
export const Roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '200', '300', '700', '500', '600'],
  variable: '--font-roboto',
  display: 'swap',

})
