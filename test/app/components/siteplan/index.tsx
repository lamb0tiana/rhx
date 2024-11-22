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
        } catch  {
            return "https://placehold.co/50";
        }
    };

    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex justify-center items-center">
            <section className="flex gap-12 items-center justify-center mx-auto max-w-[960px] w-full flex-wrap">
                {isQuerying ? (
                    <div className="flex items-center justify-center mx-auto">
                        <Loader className="animate-spin text-primary w-10 h-10"/>
                    </div>
                ) : (
                    <>
                        {sitePlan.map((candidate, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center m-8 w-32 h-32"
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
                                        className={`mt-2 text-center font-semibold ${
                                            candidate.is_active ? 'text-primary' : ''
                                        }`}
                                    >
                                        {candidate.label}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </section>
        </div>
    );
}
