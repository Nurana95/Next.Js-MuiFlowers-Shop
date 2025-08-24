// Accordions.tsx
'use client';

import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { DownArrowIcon } from '../../../Styles/Svg/SvgIcon';
import FilterdSideBar from '../sortedBy/filterSideBar';
import Category from '../sortedBy/category';
import Select from '../sortedBy/select';

interface AccordionsProps {
    activeIndex: number | false;
    setActiveIndex: (index: number | false) => void;
}

export default function Accordions({ activeIndex, setActiveIndex }: AccordionsProps) {
    const accordions = [
        {
            title: 'фильтр товаров',
            content: <FilterdSideBar />,
        },
        {
            title: 'сортировка товаров',
            content: <Select />,
        },
        {
            title: 'Категории',
            content: <Category />,
        },
    ];

    return (
        <>
            {accordions.map((accordion, index) => (
                <Accordion
                    key={index}
                    expanded={activeIndex === index}
                    onChange={() => setActiveIndex(activeIndex === index ? false : index)}
                    sx={{ order: index + 1, bgcolor: 'transparent' }}
                >
                    <AccordionSummary
                        expandIcon={<DownArrowIcon />}
                        aria-controls={`content-${index}`}
                        id={`header-${index}`}
                        sx={{
                            '&.Mui-expanded .MuiTypography-root': {
                                color: 'primary.main',
                            },
                        }}
                    >
                        <Typography
                            color="warning"
                            sx={{
                                textDecoration: 'underline',
                                fontSize: '16px',
                                mr: 3,
                            }}
                        >
                            {accordion.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>{accordion.content}</AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}
