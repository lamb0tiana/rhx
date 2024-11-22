'use client'
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
                <form className="flex gap-4 justify-center flex-col">
                    <div className="flex items-stretch border rounded-md overflow-hidden p-2 rounded-3xl">
                        <input
                            type="text"
                            placeholder="Entrez votre N° de bon cadeau"
                            className="flex-1 p-2 focus:outline-none min-w-72 text-center font-semibold text-[#523918]"
                        />
                        <button
                            className="bg-primary text-white px-4 font-semibold focus:outline-none hover:bg-primary-dark rounded-3xl min-w-24 hidden md:block"
                        >
                            Voir
                        </button>
                    </div>
                    <button
                        className="bg-primary text-white p-1 font-semibold focus:outline-none hover:bg-primary-dark rounded-3xl min-w-24 block md:hidden w-1/3 mx-auto"
                    >
                        Voir
                    </button>
                </form>
            </div>
        </section>
    </header>
}
