import BgBannerImage from "@/app/Shared/BgBannerImage";
import { ProductPage } from '../../../Utils/data/BgImage/productPage'

export default function BgImage() {
    return (
        <>
            <BgBannerImage items={ProductPage} />

        </>
    );
}

