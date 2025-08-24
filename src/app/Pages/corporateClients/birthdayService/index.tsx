'use client';

import { introText, paragraphs } from '@/app/Utils/data/corporate';
import { Typography, Stack, Box } from '@mui/material';

export default function BirthdayServicePage() {
    return (
        <Box mt={{ xs: '40px', md: "100px" }}>
            <Stack spacing={{ xs: '40px', md: "100px" }}>
                {/* Intro Text */}
                <Box sx={{ width: '100%', maxWidth: { md: 765 } }}>
                    {introText[0].items[0].map((item, index) => (
                        <Typography
                            key={index}
                            variant={item.subtitle || 'subtitle25'}
                            component="span"
                        >
                            {item.text}
                        </Typography>
                    ))}
                </Box>

                {/* Paragraphs */}
                <Box pl={{ xs: 0, md: "100px" }}>
                    {paragraphs[0].items.map((section, sectionIndex) => (
                        <Box key={sectionIndex} sx={{ maxWidth: 736, width: '100%' }}>
                            <Typography variant="subtitle25" >
                                {section.map((part, idx) => (
                                    <Typography
                                        key={idx}
                                        component="span"

                                        sx={{ textTransform: 'none' }}
                                        variant={part.subtitle || 'subtitle25'}
                                    >
                                        {part.text}
                                    </Typography>
                                ))}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
}
