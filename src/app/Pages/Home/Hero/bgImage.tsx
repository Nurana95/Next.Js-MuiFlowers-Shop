import BgBannerImage from "@/app/Shared/BgBannerImage";
import { homeBg } from '../../../Utils/data/BgImage/Home'
import { Box } from "@mui/material";

export default function BgImage() {
  return (
    <>
      <BgBannerImage items={homeBg} />
      <>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '20%',
            background: 'linear-gradient(180deg, rgba(4, 10, 10, 0) 0%, #000000 100%)',

          }}
        />

      </>
    </>
  );
}

