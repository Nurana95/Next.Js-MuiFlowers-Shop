import { SvgIcon } from '@mui/material';

export const chevronLeft = (
    <SvgIcon
        sx={{
            width: { xs: '0%', lg: 80 },
            height: { lg: 6 },
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none">
            <path
                d="M0 2.99999L5 5.88674L5 0.113242L0 2.99999ZM80 2.5L4.5 2.49999L4.5 3.49999L80 3.5L80 2.5Z"
                fill="currentColor"
            />
        </svg>
    </SvgIcon>
);

export const chevronRight = (
    <SvgIcon
        sx={{
            width: { xs: '0%', lg: 80 },
            height: { lg: 6 },

        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none">
            <path d="M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z" fill="currentColor" />
        </svg>
    </SvgIcon>
);
export const chevronRightLittle = (
    <SvgIcon
        sx={{
            width: 40,
            height: 6,
            // Не задавай fill напрямую, используй color и currentColor
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 6" fill="none">
            <path
                d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z"
                fill="currentColor"
            />
        </svg>
    </SvgIcon>
);

