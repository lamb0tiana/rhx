import Image from "next/image";
import handGift from "@/public/icons/hand_gift.svg";
import {UtensilsCrossedIcon} from "lucide-react";
import Link from "next/link";

export default function LeftSide() {

    return <div className="text-primary gap-4">
        <Link href={"/"} className="flex items-center justify-center h-12">
            <Image src={handGift} alt={"gifts"} width={75} />
            <div className="flex-col items-center text-center hidden md:flex">
                <UtensilsCrossedIcon size={50}/>
                <span className="text-2xlxl font-bold">Bon cadeau</span>
            </div>
        </Link>
    </div>
}
