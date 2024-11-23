import React from "react";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

export default function Layout({children}: { children: React.ReactNode }) {
    return <div className="max-w-[1200px] mx-auto p-5">
        <nav className="text-sm mb-5">
            <ol className="flex space-x-2">
                <li>
                    <Link href={"/"} className="flex text-primary items-center  hover:underline">
                        <ChevronLeft/> Accueil
                    </Link>

                </li>
            </ol>
        </nav>
        {children}
    </div>
}
