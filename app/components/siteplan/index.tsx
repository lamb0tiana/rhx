'use client'

import Image from "next/image";
import {Loader} from "lucide-react";
import Link from "next/link";
import {useSitePlan} from "@/app/context/SitePlanContext";

export default function Siteplan() {
    const {isQuerying, sitePlan} = useSitePlan();

    const getDynamicImage = (iconPath: string): string => {
        try {
            return require(`@/public/icons/${iconPath}.svg`).default;
        } catch {
            return "https://placehold.co/50";
        }
    };

    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex justify-center items-center">
            <section
                className="grid grid-cols-2 sm:grid-cols-4 gap-12 p-6 mx-auto max-w-[960px] w-full flex-wrap">
                {isQuerying ? (
                    <div className="mx-auto">
                        <Loader className="animate-spin text-primary w-10 h-10"/>
                    </div>
                ) : (
                    <>
                        {sitePlan.map((candidate, index) => (
                            <div
                                key={index}
                                className="flex items-start m-auto  m-8 w-32 h-32"
                            >
                                <Link href={candidate.url} className="flex flex-col items-center">
                                    <div
                                        className={`w-20 h-20 flex items-center justify-center rounded-full ${
                                            candidate.is_active ? 'bg-primary text-white' : 'bg-white text-primary'
                                        }`}
                                    >
                                        <Image
                                            src={getDynamicImage(
                                                `${!candidate.is_active ? "disable_" : ""}${candidate.icon}`
                                            )}
                                            alt={candidate.label}
                                            width={50}
                                            height={50}
                                        />

                                    </div>
                                    <span
                                        className={`mt-2 text-center text-sm font-semibold ${candidate.is_active ? 'text-primary' : ''}`}
                                    >
                                        {candidate.label}
                                    </span>

                                </Link>
                                {candidate.is_active && (
                                    <span
                                        className="left-[-32px] relative  bg-green-500 text-white rounded-full flex items-center justify-center w-7"> ✔ </span>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </section>
        </div>
    );
}
