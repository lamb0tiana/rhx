import Image from "next/image";
import handGift from "@/public/icons/hand_gift.svg";
import {UtensilsCrossedIcon} from "lucide-react";

export default function LeftSide() {

    return <div className="flex items-center justify-center text-primary gap-4">
        <Image src={handGift} alt={"gift"} width={75}/>
        <div className="flex flex-col items-center text-center">
            <UtensilsCrossedIcon size={50}/>
            <span className="text-2xlxl font-bold">Bon cadeau</span>
        </div>
    </div>
}
