'use client';

import { Box, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '../Styles/Svg/close.svg';
import SearchIcon from '../Styles/Svg/search.svg';

interface Searchprops {
    searchOpen: boolean;
    toggleSearch: () => void;
    closeSearch: () => void;
}
export default function Search({ searchOpen, toggleSearch, closeSearch }: Searchprops) {

    return (
        <>
            {/* === SEARCH === */}
            <Box sx={{ flexGrow:1, display: 'flex', alignItems: 'center',  }}>
                {!searchOpen ? (
                    <IconButton
                        onClick={toggleSearch}
                        sx={{ p: 0 }}
                        aria-label="Open Search"
                    >
                        <SearchIcon />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                            поиск
                        </Typography>
                    </IconButton>
                ) : (
                    <Box sx={{ borderBottom: '0.2px solid grey', display: 'flex', alignItems: 'center', width: { xs: '100%', md: '300px' } }}>
                        <SearchIcon />
                        <TextField
                            variant="standard"
                            placeholder="Введите свой запрос"
                            sx={{ width: { xs: '100%', md: '300px' } }}
                        />
                        <IconButton sx={{ p: 0 }} onClick={closeSearch}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>
        </>
    );
}