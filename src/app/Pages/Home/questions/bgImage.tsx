import BgBannerImage from "@/app/Shared/BgBannerImage";
import { Questions } from '../../../Utils/data/BgImage/questions'

export default function BgImage() {
  return (
    <>
      <BgBannerImage items={Questions} />

    </>
  );
}

