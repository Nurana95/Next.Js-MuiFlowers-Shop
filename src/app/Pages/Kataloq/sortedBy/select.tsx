'use client';
import {
    MenuItem,
    Select,
    SelectChangeEvent,
    useTheme,
    useMediaQuery,
    Checkbox,
    Box,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '../../../Styles/Svg/bx_bxs-down-arrow.svg';
import { useFilterContext } from '@/app/Utils/hooks/filterContext';
import { options } from '../../../Utils/data/options';
import CustomIcon from '../../../Styles/Svg/Rectangle75.svg';
import CustomCheckedIcon from '../../../Styles/Svg/CustomCheckedIcon.svg';

export default function Index() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { sortOrder, setSortOrder } = useFilterContext();

    const handleSortChange = (event: SelectChangeEvent) => {
        setSortOrder(event.target.value);
    };

    const handleMobileSortChange = (value: string) => {
        setSortOrder(value);
    };

    return (
        <>
            {/* 🖥 Десктоп — Select */}
            {!isMobile ? (
                <Select
                    aria-label="Sort products"
                    value={sortOrder}
                    onChange={handleSortChange}
                    variant="standard"
                    IconComponent={ExpandMoreIcon}
                    fullWidth
                    disableUnderline
                    MenuProps={{ disableScrollLock: true }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            ) : (
                // 📱 Мобайл — кастомные чекбоксы
                <Box>
                    {options.map((option) => (
                        <Box key={option.value} display="flex" alignItems="center">
                            <Checkbox
                                icon={<CustomIcon />}
                                checkedIcon={<CustomCheckedIcon />}
                                checked={sortOrder === option.value}
                                onChange={() => handleMobileSortChange(option.value)}
                                sx={{ color: 'white', pb: 0.5, }}
                            />
                            <Typography>{option.label}</Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
}
