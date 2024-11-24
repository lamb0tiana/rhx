"use client"
import React from "react";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import {useCard} from "@/app/_/context/CartContext";

export default function Layout({children}: { children: React.ReactNode }) {
    const {selectedProduct} = useCard()
    return <div className="max-w-[1200px] mx-auto p-5">
        <nav className="text-sm mb-5">
            <ol className="flex space-x-2">
                <li>
                    <Link href={`/info/${selectedProduct?.id||''}`} className="flex text-primary items-center  hover:underline">
                        <ChevronLeft/> Revenir aux informations sur le bon
                    </Link>

                </li>
            </ol>
        </nav>
        {children}
    </div>
}
