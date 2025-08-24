import BgBannerImage from "@/app/Shared/BgBannerImage";
import {specialSeasons } from '../../../Utils/data/BgImage/specialSeason'

export default function BgImage() {
  return (
    <>
      <BgBannerImage items={specialSeasons} />

    </>
  );
}

