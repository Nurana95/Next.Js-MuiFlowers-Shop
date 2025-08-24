import { useState } from "react";



export function SearchSet() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return { searchOpen, toggleSearch, closeSearch };
}