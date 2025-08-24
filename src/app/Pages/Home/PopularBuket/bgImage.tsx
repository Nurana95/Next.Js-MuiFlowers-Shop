import BgBannerImage from "@/app/Shared/BgBannerImage";
import { Popular } from '../../../Utils/data/BgImage/Popular'

export default function BgImage() {
  return (
    <>
      <BgBannerImage items={Popular} />
    </>
  );
}

