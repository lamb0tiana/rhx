import Image from "next/image";
import handGift from "@/public/icons/hand_gift.svg"
import {UtensilsCrossedIcon} from "lucide-react";

export default function Navbar() {
    return <header className="mt-5 w-full">
        <section className="max-w-[1200px] mx-auto p-8 flex flex-col gap-6 md:flex-row md:justify-between items-center">
            <div className="flex items-center text-primary gap-4">
               <Image src={handGift} alt={"d"} width={50}/>
                <div className="flex flex-col items-center text-center">
                    <UtensilsCrossedIcon/>
                    <span className="text-sm font-bold">Bon cadeau</span>
                </div>
            </div>

            <div className="w-full md:w-auto">
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Entrez votre N° de bon cadeau"
                        className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                    />
                </form>
            </div>
        </section>

    </header>
}
