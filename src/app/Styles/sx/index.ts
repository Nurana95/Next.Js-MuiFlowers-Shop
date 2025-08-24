import { colors } from "../colors";

export const dFlexSpaceB = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
export const mainBox = {
    ...dFlexSpaceB,
    my: { xs: 1, md: 9 },
    py: { xs: 1, md: 9 },
    flexDirection: 'column',
    gap: 5
}

export const directionColumn = {
    ...dFlexSpaceB,
    flexDirection: 'column',
    alignItems: 'flex-end'
}

export const Radius10px = {
    borderRadius: 2.5,
    bgcolor: colors.lightBlack
}

export const absolute = {
    position: 'absolute',
    right: 0,
    top: 0
}
export const relative = {
    position: 'relative',
    zIndex: 1
}
export const backgroundImagine = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
export const wH100 = {
    width: '100%',
    height: '100%'
}
export const arrowStyle = (side: 'left' | 'right') => ({
    display: { xs: 'none', lg: 'block' },
    position: 'absolute',
    top: '40%',
    [side]: '-10%',
    zIndex: 2,
    cursor: 'pointer',
    color: colors.green,
    '&:hover': {
        color: colors.winePurple,
    },
    '&:active': {
        color: colors.winePurple,
    },
});
export const DividerPink = {
    width: {xs:45, md:65}, height: 10,
    border: colors.pinkishPurple,
    opacity: 1,
    bgcolor: colors.pinkishPurple,
}
export const dBlockNone = {
    display: { xs: 'none', md: 'block' }
}
export const list = {
    marginLeft: { xs: '10px', md: '30px' },
    display: 'list-item',

    color: 'white',
    '&::marker': {
        fontSize: '10px',


    },


}