'use client'

import Image from "next/image";
import {useEffect, useState} from "react";
import {plan_site_item_type} from "@/app/data/site_plan";
import {Loader} from "lucide-react";
import SitePlanQuery from "@/app/actions/siteplan";
import {usePathname} from "next/navigation";

export default function Siteplan() {
    const [isQuerying, setIsQuerying] = useState<boolean>(false);
    const [sitePlan, setSitePlan] = useState<plan_site_item_type[]>([]);
    const path: string = usePathname() || "/";
    const [, firstPath] = path.split('/');

    useEffect(() => {
        setIsQuerying(true);
        SitePlanQuery()
            .then((response) => {
                const dict_plan = Object.values(response)
                const belong_active_index: number = dict_plan.findIndex(s => s.url.includes(firstPath))
                setSitePlan(dict_plan.map((value, key) => ({...value, is_active: key <= belong_active_index})));
            })
            .finally(() => {
                setIsQuerying(false);
            });
    }, []);


    const getDynamicImage = (iconPath: string): string => {
        try {
            return require(`@/public/icons/${iconPath}.svg`).default;
        } catch (e) {
            return "https://placehold.co/50";
        }
    };

    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex items-center">
            <section
                className="flex items-center justify-between mx-auto max-w-[960px] p-6 w-full flex-col sm:flex-row">
                {isQuerying ? (
                    <div className="flex items-center justify-center mx-auto">
                        <Loader className="animate-spin text-primary w-10 h-10"/>
                    </div>
                ) : (
                    <>
                        {sitePlan.map((candidate, index) => (
                            <div key={index} className="flex items-center w-full">
                                <div className="flex flex-col items-center mb-4 sm:mb-0">
                                    <div
                                        className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                                        <Image
                                            src={getDynamicImage(candidate.icon)} // Utilisation de l'URL de placeholder si aucune image n'est fournie
                                            alt={candidate.label}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <span>{candidate.label}</span>
                                </div>
                                {index < sitePlan.length - 1 && (
                                    <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </section>
        </div>
    );
}
