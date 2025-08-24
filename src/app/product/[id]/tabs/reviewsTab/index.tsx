'use client';
import {
    Typography,
    Link,
    TextField,
    Button,
    Rating,
    Stack,
} from '@mui/material';
import { useState } from 'react';
import { colors } from '@/app/Styles/colors';
import { reviewFormFields, reviewStaticText } from '@/app/Utils/data/reviewFormFields';
import React from 'react';


export default function Index() {
    const [rating, setRating] = useState<number | null>(0);



    return (
        <Stack sx={{ mt: '50px', }} >
            {reviewStaticText.map((item, idx) => (
                <Typography
                    key={idx}
                    variant="body1"
                    color={item.color || ''}
                    sx={{
                        mb: { xs: idx === 2 ? 2 : 0 },
                        md: idx === 1 ? 0 : idx === 2 ? 3 : 1,
                        mt: (idx === 1) ? '60px' : 0,
                        textTransform: { xs: '', md: idx === 1 ? '' : 'none' },
                    }}
                >
                    {item.text}
                </Typography>
            ))
            }

            <Rating
                value={rating}
                onChange={(_, newValue) => setRating(newValue)}
                sx={{
                    mb: 3,
                    '& .MuiRating-iconEmpty': {
                        color: 'white',
                    },
                }}
            />

            {
                reviewFormFields.map((field, idx) => (
                    <React.Fragment key={idx}>
                        <Typography variant="body1" sx={{ textTransform: 'none', mb: '4px' }}>
                            {field.label}
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder={field.placeholder}
                            multiline={field.multiline}
                            rows={field.rows}
                            variant="outlined"
                            sx={{
                                mb: '20px',
                                maxWidth: 540,

                            }}
                        />
                    </React.Fragment>
                ))
            }

            <Button
                sx={{
                    mb: '10px',
                }}
            >
                ОТПРАВИТЬ
            </Button>

            <Typography variant="subtitle6" sx={{ width: { xs: 242, md: 342 } }}>
                Нажимая на кнопку «Отправить», я даю свое согласие на обработку персональных данных,
                в соответствии с{' '}
                <Typography
                    variant="subtitle6"
                    component={Link}
                    href="./"
                    sx={{
                        color: colors.pinkishPurple,
                        textDecorationColor: colors.pinkishPurple,
                        display: 'inline',

                    }}
                >
                    Политикой конфиденциальности
                </Typography>
            </Typography>
        </Stack >

    );
}
