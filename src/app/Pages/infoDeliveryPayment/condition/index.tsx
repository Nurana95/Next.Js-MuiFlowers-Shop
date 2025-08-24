'use client'

import { Box, Typography, ListItem, List } from '@mui/material'
import { colors } from '@/app/Styles/colors'
import { Condition } from '@/app/Utils/data/infoDeliveryPayment'

export default function Index() {
    return (
        <>
            <Box mt={{ xs: '40px', md: '100px' }} >
                {Condition.map((section, index) => (
                    <Box key={index} mb={4}>
                        <Typography variant="subtitle13" mb={1}>
                            {section.title}
                        </Typography>

                        <List disablePadding dense>
                            {section.items.map((line, lineIndex) => (
                                <ListItem
                                    key={lineIndex}
                                    sx={{ listStylePosition: 'outside' }}
                                ><Typography variant="h6" >
                                        {line.map((part, partIndex) => (
                                            <Typography
                                                key={partIndex}
                                                component="span"
                                                variant='subtitle13'
                                                sx={{
                                                    color: part.color === 'primary' ? colors.green : 'inherit',
                                                    fontWeight: part.fontWeight ?? 'normal',
                                                    whiteSpace: 'pre-line',
                                                }}
                                            >
                                                {part.text}
                                            </Typography>
                                        ))}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>
        </>
    )
}
