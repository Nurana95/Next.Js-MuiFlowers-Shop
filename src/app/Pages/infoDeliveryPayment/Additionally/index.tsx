'use client'

import { Box, Typography, ListItem, List } from '@mui/material'
import { colors } from '@/app/Styles/colors'
import { deliverySection } from '@/app/Utils/data/infoDeliveryPayment'

export default function Index() {
    return (
        <>
            <Box mt={{ xs: '60px', md: '100px' }} sx={{
                width: { xs: '100%', md: 921 },
                borderRadius: '20px', p: { xs: '20px 10px', md: '32px' }, textAlign: 'left',
                bgcolor: colors.black30,
                backdropFilter: 'blur(20px)'
            }}>
                {deliverySection.map((section, index) => (
                    <Box key={index}>
                        <Typography variant="subtitle13" component='h5'
                            sx={{
                                m: {
                                    xs: index === 0 ? '0px' : '60px 0 0',
                                    md: index === 0 ? '0px 0px 32px' : '32px 0'
                                }
                            }}>
                            {section.title}
                        </Typography>
                        {section.items.map((line, lineIndex) => (
                            <Box key={lineIndex}>
                                <List>
                                    {line.map((part, partIndex) => (

                                        <ListItem
                                            key={partIndex}
                                            sx={{
                                                display: part.isListItem ? 'list-item' : 'block',
                                                ml: part.isListItem ? 2 : 0,
                                            }}
                                        >
                                            <Typography
                                                component="span"
                                                variant='subtitle22'
                                                sx={{

                                                    color: part.color === 'primary' ? colors.green : '',
                                                    whiteSpace: 'pre-line',
                                                    fontWeight: part.fontWeight400 ?? '',

                                                }}
                                            >
                                                {part.text}
                                            </Typography>

                                        </ListItem>
                                    ))}</List>
                            </Box>))}

                    </Box>
                ))}
            </Box >
        </>
    )
}
