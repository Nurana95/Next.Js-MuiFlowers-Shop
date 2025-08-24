'use client';
import { ProductCardProps } from '@/app/Utils/Interface/type';
import { Box, Link, } from '@mui/material';

type Props = {
    product: ProductCardProps;
};

export default function BreadcrumbNav({ product }: Props) {
    return (
        <Box sx={{ pt: 12 }}>
            <Link href="/" underline="hover" color="white" variant="subtitle7">
                Главная /
            </Link>
            <Link href="/Pages/Kataloq" underline="hover" color="white" variant="subtitle7">
                Каталог букетов /
            </Link>
            <Link href="/Pages/Kataloq" underline="hover" color="white" variant="subtitle7">
                {product.select} /
            </Link>
            <Link href="#" underline="hover" color="white" variant="subtitle7">
                {product.name}
            </Link>
        </Box>
    );
}
