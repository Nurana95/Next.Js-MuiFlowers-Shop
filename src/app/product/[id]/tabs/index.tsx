'use client';

import {
    Box,
    Tabs,
    Tab,
    Typography,

} from '@mui/material';
import { useState } from 'react';
import { list } from '../../../Styles/sx/index'
import { colors } from '@/app/Styles/colors';
import { paymentContent, } from '@/app/Utils/data/delivery';
import DeliveryAndReviewsTab from './reviewsTab';

interface TabPanelProps {
    children?: React.ReactNode;
    value: number;
    index: number;
}


export function TabPanel({ children, value, index }: TabPanelProps) {
    return value === index ? <Box>{children}</Box> : null;
}

// Main
export default function DeliveryAndReviewsTabs() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };
    return (
        <Box sx={{ mt: '100px', mb: { xs: '100px', md: 0 }, zIndex: 0, position: 'relative' }}>
            <Tabs
                value={tabIndex}
                onChange={handleTabChange}
            >
                <Tab label="ДОСТАВКА И ОПЛАТА" />
                <Tab label="ОТЗЫВЫ (0)" />
            </Tabs>

            {/* Tab 1: Доставка и оплата */}
            <TabPanel value={tabIndex} index={0}>
                <Box>
                    {paymentContent.map((section, sectionIdx) => (
                        <Box key={sectionIdx}>
                            <Typography component={'div'} mt={{ xs: 2, md: '50px' }} sx={{ mb: "25px" }} variant="subtitle13">
                                {section.title}
                            </Typography>

                            {section.items.map((line, idx) => (
                                <Typography key={idx} variant="subtitle14" sx={{ ...list }} >

                                    {line.map((part, i) => (
                                        <Typography
                                            key={i}
                                            variant="subtitle14"
                                            sx={{
                                                color: part.color === 'primary' ? colors.green : 'white',
                                                whiteSpace: 'pre-line',
                                                fontWeight: part.fontWeight === 700 ? 700 : '',
                                            }}
                                        >
                                            {part.text}
                                        </Typography>
                                    ))}
                                </Typography>
                            ))}
                        </Box>
                    ))}
                </Box>

            </TabPanel>

            {/* Tab 2: Отзывы */}
            <TabPanel value={tabIndex} index={1}>
                <DeliveryAndReviewsTab />
            </TabPanel>


        </Box>
    );
}
