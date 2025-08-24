'use client'
import Hero from './Pages/Home/Hero'
import Kataloq from './Pages/Home/Cataloq';
import PopularFlowers from './Pages/Home/PopularBuket';
import HowToOrder from './Pages/Home/how-to-order'
import SpecialSeason from './Pages/Home/SpecialSeason'
import Questions from './Pages/Home/questions'
import { Box } from '@mui/material';

export default function Home() {

  return (
    <>
  <Box sx={{overflow:'hidden'}}>
      <Hero />
      <Kataloq />
      <PopularFlowers />
      <HowToOrder />
      <SpecialSeason />
      <Questions />
</Box>
    </>
  );
}
