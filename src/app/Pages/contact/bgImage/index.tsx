import BgBannerImage from "@/app/Shared/BgBannerImage";
import { contact } from "@/app/Utils/data/BgImage/contact";



export default function BgImage() {
  return (

    <>
      <BgBannerImage items={contact} />

    </>
  );
}

