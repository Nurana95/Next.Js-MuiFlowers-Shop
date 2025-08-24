import BgBannerImage from "@/app/Shared/BgBannerImage";
import { faq } from "@/app/Utils/data/BgImage/faq";



export default function BgImage() {
  return (

    <>
      <BgBannerImage items={faq} />

    </>
  );
}

