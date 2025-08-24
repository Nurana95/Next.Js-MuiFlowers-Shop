import { HomeBg } from '../../Interface/type';

export const howToOrder: HomeBg[] = [

    {
        image: { xs: '/Home/pinkFlowerxs.png', md: '/Home/pinkFlower.png' },
        position: { xs: '0% 11%', md: 'left center', lg: '0% 60%' },
        zIndex: 2,
        width: { xs: '100%', md: '50%', lg: '100%' },
        height: { xs: '100%', md: '50%', lg: '100%' },
        size: { xs: 'inherit', md: 'contain', lg: 'inherit' }
    },

    {
        image: { xs: '/Home/Ellipse/Ellipse55.png', md: '' },
        position: { xs: 'right top', },
        zIndex: -1,
        marginTop: -40
    },
    {
        image: { xs: '/Home/Ellipse/Ellipse44xs.png', md: '' },
        position: { xs: 'left  bottom', },
        zIndex: -1,
        size: 'contain',
        marginTop: 40
    },



];
