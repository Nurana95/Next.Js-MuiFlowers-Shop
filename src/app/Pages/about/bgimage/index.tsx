import BgBannerImage from "@/app/Shared/BgBannerImage";
import { About } from "@/app/Utils/data/BgImage/about";


export default function BgImage() {
    return (
        <>
            <BgBannerImage items={About} />

        </>
    );
}

