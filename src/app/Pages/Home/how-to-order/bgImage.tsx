import BgBannerImage from "@/app/Shared/BgBannerImage";
import { howToOrder } from '../../../Utils/data/BgImage/howToOrder'

export default function BgImage() {
  return (
    <>
      <BgBannerImage items={howToOrder} />

    </>
  );
}

