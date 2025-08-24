'use client';

import { ImagebgProps } from '@/app/Utils/Interface/type';
import { Box } from '@mui/material';

export default function BackgroundBanner({ items, }: ImagebgProps) {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                pointerEvents: 'none',


            }}
        >
            {items.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        aspectRatio: '16 / 9',

                        width: item.width || '100%',
                        height: item.height || '100%',
                        backgroundImage: {
                            xs: item.image?.xs ? `url(${item.image.xs})` : 'none',
                            sm: item.image?.sm ? `url(${item.image.sm})` : undefined,
                            md: item.image?.md ? `url(${item.image.md})` : undefined,
                            lg: item.image?.lg ? `url(${item.image.lg})` : undefined,

                        },
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: item.size || 'auto',
                        backgroundPosition: item.position || 'initial',
                        pointerEvents: 'none',
                        zIndex: item.zIndex,
                        marginTop: item.marginTop,


                    }}
                />
            ))}
        </Box>
    );
}
