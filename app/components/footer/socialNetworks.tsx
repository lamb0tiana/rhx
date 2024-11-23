import Image from "next/image";
import fb from "@/public/icons/facebook.svg";
import yt from "@/public/icons/youtube.svg";
import insta from "@/public/icons/instagram.svg";
import pinterest from "@/public/icons/pinterest.svg";

export default function SocialNetworks() {
    return <>
        <Image src={fb} alt="Facebook" width={25} height={25}/>
        <Image src={yt} alt="YouTube" width={25} height={25}/>
        <Image src={insta} alt="Instagram" width={25} height={25}/>
        <Image src={pinterest} alt="Pinterest" width={25} height={25}/>
    </>
}
