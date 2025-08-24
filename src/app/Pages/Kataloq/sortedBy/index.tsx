'use client';
import {
    Grid,
    Stack,
    Chip,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import CancelIcon from '../../../Styles/Svg/ei_close.svg';
import Banner from '../../../Shared/ProductBanner';
import { useFilterContext } from '@/app/Utils/hooks/filterContext';
import { colors } from '@/app/Styles/colors';
import FilterSideBar from './filterSideBar'
import Select from './select'


export default function SelectFilter() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const {
        filters,
        handleToggle,
        filteredProducts,
    } = useFilterContext();

    return (
        <Grid pb={12} mt={4} container spacing={0} justifyContent={'space-between'}>
            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 3 }}>

                {!isMobile && <FilterSideBar />}
            </Grid>

            {/* Main content */}
            <Grid size={{ xs: 12, md: 9 }}>
                <Grid
                    container
                    spacing={2}
                    alignItems="flex-start"
                    justifyContent={filters.categories.length > 0 ? 'space-between' : 'flex-end'}
                >
                    {/* Selected categories */}
                    {filters.categories.length > 0 && (
                        <Stack sx={{ display: 'flex', flexWrap: 'wrap', }}>
                            {filters.categories.map((item, i) => (
                                <Chip
                                    key={i}
                                    label={item}
                                    onDelete={() => handleToggle(item)}
                                    deleteIcon={<CancelIcon aria-label={`Remove ${item}`} />}
                                    variant="outlined"
                                    sx={{ color: 'white', borderColor: 'white' }}
                                />
                            ))}
                        </Stack>
                    )}

                    {/* Select sort */}
                    <Grid size={'auto'} mb={2}>
                        <Box
                            sx={{
                                py: 1,
                                px: 2,
                                bgcolor: colors.transparentBlack,
                                borderRadius: 2,
                                minWidth: { xs: '100%', md: 200 },
                            }}
                        >
                            {!isMobile && <Select />}

                        </Box>
                    </Grid>
                </Grid>

                {/* Product banner */}
                <Banner
                    visibleCount={12}
                    showAvatar={true}
                    products={filteredProducts}
                />
            </Grid>
        </Grid>
    );
}
