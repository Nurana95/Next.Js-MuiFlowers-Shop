import BgBannerImage from "@/app/Shared/BgBannerImage";
import { corporate } from "@/app/Utils/data/BgImage/corporate";



export default function BgImage() {
  return (

    <>
      <BgBannerImage items={corporate} />

    </>
  );
}

