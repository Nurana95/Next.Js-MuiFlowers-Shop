'use client';
import { Box, IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import { LightChefronUp } from '../../../../Styles/Svg/SvgIcon';
import { ProductCardProps } from '@/app/Utils/Interface/type';

type Props = {
    product: ProductCardProps;
    isMobile: boolean;
};

export default function ProductImage({ product, isMobile }: Props) {
    if (isMobile) {
        return (
            <>
                <Box sx={{ position: 'relative', width: '100%', maxWidth: 350, height: 450 }}>
                    <Image src={product.image} alt="Букет" fill style={{ objectFit: 'cover' }} />

                    <Box sx={{ width: '100%', height: '100%', top: '50%', position: 'absolute', }}>
                        <IconButton sx={{ position: 'absolute', right: 0, transform: 'rotate(270deg)' }}>
                            {LightChefronUp}
                        </IconButton>
                        <IconButton sx={{ position: 'absolute', left: 0, transform: 'rotate(90deg)' }}>
                            {LightChefronUp}
                        </IconButton></Box> </Box>
            </>
        );
    }

    return (
        <>
            <Stack spacing={'10px'}>
                <IconButton sx={{ transform: 'rotate(180deg)' }}>{LightChefronUp}</IconButton>
                <Stack spacing={'20px'}>
                    {product.images.map((src: string, i: number) => (
                        <Box key={i} sx={{ width: 160, height: 185, position: 'relative' }}>
                            <Image src={src} alt={`preview ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                        </Box>
                    ))}
                </Stack>
                <IconButton>{LightChefronUp}</IconButton>
            </Stack>

            <Box sx={{
                position: 'relative', width: 350, height: 450
            }}>
                <Image src={product.image} alt="Букет" fill style={{ objectFit: 'cover' }} />
            </Box>
        </>
    );
}
