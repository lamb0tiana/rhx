import Image from "next/image";
import handGift from "@/public/icons/hand_gift.svg";
import {UtensilsCrossedIcon} from "lucide-react";

export default function LeftSide() {

    return <div className="flex items-center text-primary gap-4">
        <Image src={handGift} alt={"d"} width={50}/>
        <div className="flex flex-col items-center text-center">
            <UtensilsCrossedIcon/>
            <span className="text-sm font-bold">Bon cadeau</span>
        </div>
    </div>
}
