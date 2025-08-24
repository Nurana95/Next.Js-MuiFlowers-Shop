'use client';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from '@mui/material';
import { useState } from 'react';
import { colors } from '@/app/Styles/colors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { faqData } from '@/app/Utils/data/Faq/accordion';

export default function FaqSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | false>(0);

    const handleChange = (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedIndex(isExpanded ? index : false);
    };

    return (
        <>
            {faqData.map((item, index) => {
                const isExpanded = expandedIndex === index;

                return (
                    <Accordion
                        key={index}
                        expanded={isExpanded}
                        onChange={handleChange(index)}
                        sx={{
                            border: `1px solid ${colors.green}`,
                            mb: '10px',
                            p: { xs: '9px', md: '20px' },
                            bgcolor: 'transparent',
                            maxWidth: 825,
                            width: '100%',
                            boxShadow: 'none',
                        }}
                    >
                        <AccordionSummary
                            sx={{ gap: { xs: '45px', md: 0 } }}
                            expandIcon={
                                <Box sx={{ color: colors.green }}>
                                    {isExpanded ? (
                                        <RemoveIcon />
                                    ) : (
                                        <AddIcon />
                                    )}
                                </Box>
                            }
                        >
                            <Typography component="h6" variant="subtitle24">
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ mt: '10px' }}>
                            <Typography component="h6" variant="subtitle23">
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}
