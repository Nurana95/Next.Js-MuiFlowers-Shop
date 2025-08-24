import BgBannerImage from "@/app/Shared/BgBannerImage";
import { infoDelivery } from "@/app/Utils/data/BgImage/infoDelivery";



export default function BgImage() {
  return (

    <>
      <BgBannerImage items={infoDelivery} />
     
    </>
  );
}

