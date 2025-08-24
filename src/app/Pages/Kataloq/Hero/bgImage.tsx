import BgBannerImage from "@/app/Shared/BgBannerImage";
import { ImagebgProps } from "@/app/Utils/Interface/type";



export default function BackgroundImagine({ items}: ImagebgProps) {
  return (
    <>
      <BgBannerImage items={items} />
    </>
  );
}
