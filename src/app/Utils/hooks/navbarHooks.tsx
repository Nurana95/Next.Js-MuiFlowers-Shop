import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { useScrollTrigger } from "@mui/material";



export function NavbarHooks() {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const pathname = usePathname();
  const hidePhoneAndCartRoutes = ['/Pages/Dostavka',];
  const mobileBgColorPaths = ['/Pages/Kataloq', '/Pages/Dostavka',];
  const mobileBgColor = mobileBgColorPaths.includes(pathname);
  const shouldHidePhoneAndCart = hidePhoneAndCartRoutes.includes(pathname);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { shouldHidePhoneAndCart,mobileBgColor,  isScrolled, trigger };
}