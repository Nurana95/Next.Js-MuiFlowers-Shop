'use client';

import { colors } from '@/app/Styles/colors';
import { useMobileDrawer } from '@/app/Utils/hooks/useMobileDrawer';
import { Link, Typography } from '@mui/material';

interface Props {
    showPrivacyLink?: boolean;

}

export default function PrivacyPolicyBanner({
    showPrivacyLink
}: Props) {
    const { isMobile } = useMobileDrawer('md');
    return (
        <Typography component='div' variant="subtitle6"
            sx={{
                maxWidth: 320, whiteSpace: 'pre-line'
            }}>
            Нажимая на кнопку «Отправить», я даю свое согласие на {isMobile && ('\n')} обработку  персональных данных, в соответствии с{' '}
            <Typography
                variant="subtitle6"
                component={Link}
                href="./"
                sx={{
                    color: colors.pinkishPurple,
                    textDecoration: 'underline',
                    whiteSpace: 'pre-line'
                }}
            >
                Политикой конфиденциальности {showPrivacyLink && (',')} {!isMobile && ('\n')}
            </Typography>
            {showPrivacyLink && (
                <Typography variant="subtitle6">
                    а также ознакомлен с условиями оплаты и доставки
                </Typography>
            )}
        </Typography>
    );
}
