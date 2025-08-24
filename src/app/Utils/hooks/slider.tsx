import { useState } from 'react';

export const useSlider = (length: number, visibleCount: number) => {
  const [index, setIndex] = useState(0);
  const maxIndex = length - visibleCount;

  const handleNext = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return { index, handleNext, handlePrev };
};
