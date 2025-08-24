import { Box, Badge, Typography, IconButton, Stack, } from "@mui/material";
import SocialIcon from '../socialIcon'
import PhoneIcon from '../../Styles/Svg/lightphone.svg';
import { ShoppingBagIcon } from '../../Styles/Svg/SvgIcon';
import { absolute, Radius10px } from "../../Styles/sx/index";
import Dostavka from "@/app/Shared/placeTime";



export default function SocialMedia() {
    return (
        <>
            <Stack justifyContent='space-between' sx={{
                ...absolute, zIndex: 1,
                my: 2, display: { xs: 'none', md: 'flex' }, height: '100%'
            }}>
                <Box>
                    <Box sx={{ textAlign: 'end', }}>
                        <Dostavka />
                    </Box>
                    <Stack mt={6} alignItems={'flex-end'}>
                        <Stack spacing={2} sx={{ ...Radius10px, px: 3, py: 2.2, }}>
                            <SocialIcon /></Stack>
                    </Stack>
                </Box>
                <Stack spacing={2} textAlign='end' >
                    <Typography variant="body1" color="primary">
                        +375 (29) 113-69-69
                    </Typography>

                    <IconButton sx={{ ...Radius10px, px: 3.4, py: 1.4, }}>
                        <PhoneIcon /> <Typography sx={{ ml: 1 }} variant="body1" color="primary"> заказать звонок</Typography>
                    </IconButton>
                    <Box>
                        <Stack sx={{ ...Radius10px, display: 'inline-flex', p: 1.9 }}>
                            <IconButton sx={{ position: 'relative' }}>
                                <Badge badgeContent={3} color="primary">
                                    {ShoppingBagIcon}
                                </Badge>
                            </IconButton>
                        </Stack></Box>
                </Stack>

            </Stack >
        </>
    );
}

