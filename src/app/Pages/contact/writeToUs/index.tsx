import BannerQuestion from "@/app/Shared/QuestionsBanner";
import { SignatureLoverflowerred } from "@/app/Styles/Svg/Signature/signatureloverflower";
import Box from "@mui/material/Box";


export default function Index() {
    return (
        <Box sx={{ mt: { xs: '60px', md: '150px' } }}>
            <BannerQuestion
                title='напишите'
                subtitle='нам'
                icon={SignatureLoverflowerred}
            />
        </Box>


    );
}
