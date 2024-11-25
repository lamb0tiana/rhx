"use client";
import Image from "next/image";
import {useCard} from "@/app/_/context/CartContext";
import React, {useEffect} from "react";

const  Resume: React.FC<{id: number}> = ({id}) => {
    const {voucher} = useCard();

    useEffect(() => {
        document.title = "Télécharger votre bon";
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto">
            {id === voucher?.id ? (
                <section className="flex flex-col items-center justify-center text-center">
                    <p className="font-bold mt-12">
                        <span className="text-primary text-xl">Bon de cadeau n° </span>
                        <span className="text-orange-900 text-2xl">
                            {voucher?.id}
                        </span>
                    </p>
                    <p className="font-bold mt-5"><span className="text-amber-900">De la part de </span><span
                        className="italic">{voucher?.receiver.from}</span></p>
                    <p className="font-bold mt-5"><span className="text-amber-900">Pour</span> <span
                        className="italic">{voucher?.receiver.receiver}</span>
                    </p>
                    <div className="m-10 w-full max-w-[600px]">
                        <Image
                            src={`/images/models/${voucher?.model.value}.png`}
                            alt="Image description"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl object-contain w-full h-auto"
                        />
                    </div>
                    <button disabled
                            className="bg-gray-600/30 mt-8 text-gray-100 text-sm font-bold py-2 px-6 rounded-lg shadow-md"
                    >
                        Télécharger votre bon
                    </button>
                </section>
            ): <div className="text-center m-auto p-12">Bon de cadeau n° {id} introuvable</div>}
        </div>
    );
}
export default Resume
