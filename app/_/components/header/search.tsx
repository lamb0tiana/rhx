"use client"
import {useCard} from "@/app/_/context/CartContext";
import {useRouter} from "next/navigation";
import React, {useRef} from "react";

export default function Search() {
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(inputRef.current){
            const {value} = inputRef.current
            router.push(`/resume/${value}`, )

        }
    }
    return <div className="w-full md:w-auto">
        <form className="flex gap-4 justify-center flex-col" onSubmit={handleSearch}>
            <div className="flex items-stretch border rounded-3xl overflow-hidden p-2 rounded-3xl">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Entrez votre N° de bon cadeau"
                    className="flex-1 p-2 focus:outline-none min-w-72 text-center font-semibold text-[#523918]"
                />
                <button
                    type="submit"
                    className="bg-primary text-white px-4 font-semibold focus:outline-none hover:bg-primary-dark rounded-3xl min-w-24 hidden md:block"
                >
                    Voir
                </button>
            </div>
            <button type="submit"
                className="bg-primary text-white p-1 font-semibold focus:outline-none hover:bg-primary-dark rounded-3xl min-w-24 block md:hidden w-1/3 mx-auto"
            >
                Voir
            </button>
        </form>
    </div>
}
