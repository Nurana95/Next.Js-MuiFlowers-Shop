import BgBannerImage from "@/app/Shared/BgBannerImage";
import { HomeBg } from "@/app/Utils/Interface/type";

const CartBg: HomeBg[] = [

    {
        image: { md: '/Cart/Ellipse59.png', },
        position: { xs: 'right top', },
    },]

export default function BgImage() {
    return (
        <>
            <BgBannerImage items={CartBg} />

        </>
    );
}

