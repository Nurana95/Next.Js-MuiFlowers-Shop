import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint } from "@mui/material";

interface MobileDrawerState {
  mobileOpen: boolean;
  isMobile: boolean;
  isMobileLg: boolean;
  isMobileSm: boolean;

  searchOpen: boolean;
  toggleDrawer: () => void;
  toggleSearch: () => void;
  closeSearch: () => void;
}

export function useMobileDrawer(breakpoint: Breakpoint = "md"): MobileDrawerState {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(breakpoint));
  const isMobileLg = useMediaQuery(theme.breakpoints.down(breakpoint));
  const isMobileSm = useMediaQuery(theme.breakpoints.down(breakpoint));

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return { mobileOpen, isMobileSm, isMobileLg, isMobile, searchOpen, toggleDrawer, toggleSearch, closeSearch };
}