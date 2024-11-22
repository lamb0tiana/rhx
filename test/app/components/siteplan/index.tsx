'use client'

import Image from "next/image";
import {useEffect, useState} from "react";
import {plan_site_item_type} from "@/app/data/site_plan";
import {Loader} from "lucide-react";
import SitePlanQuery from "@/app/actions/siteplan";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Siteplan() {
    const [isQuerying, setIsQuerying] = useState<boolean>(false);
    const [sitePlan, setSitePlan] = useState<plan_site_item_type[]>([]);
    const path: string = usePathname() || "/";
    const [, firstPath] = path.split('/');

    useEffect(() => {
        setIsQuerying(true);
        SitePlanQuery()
            .then((response) => {
                matchActiveMenu(Object.values(response))
            })
            .finally(() => {
                setIsQuerying(false);
            });
    }, []);

    useEffect(() => {
        matchActiveMenu(sitePlan)
    }, [path]);

    const matchActiveMenu = (menu_candidate: plan_site_item_type[]) => {
        const belong_active_index: number = menu_candidate.findIndex(s => s.url.includes(firstPath))
        setSitePlan(menu_candidate.map((value, key) => ({...value, is_active: key <= belong_active_index})));
    }


    const getDynamicImage = (iconPath: string): string => {
        try {
            return require(`@/public/icons/${iconPath}.svg`).default;
        } catch (e) {
            return "https://placehold.co/50";
        }
    };

    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex justify-center items-center">
            <section className="flex items-center justify-center mx-auto max-w-[960px] p-6 w-full flex-wrap">
                {isQuerying ? (
                    <div className="flex items-center justify-center mx-auto">
                        <Loader className="animate-spin text-primary w-10 h-10"/>
                    </div>
                ) : (
                    <>
                        {sitePlan.map((candidate, index) => (
                            <div key={index} className="flex flex-col items-center m-12">
                                <div
                                    className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                                    <Link href={candidate.url}>
                                        <Image
                                            src={getDynamicImage(
                                                `${!candidate.is_active ? "disable_" : ""}${candidate.icon}`
                                            )}
                                            alt={candidate.label}
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                                <span className="mt-2">{candidate.label}</span>
                            </div>
                        ))}
                    </>
                )}
            </section>
        </div>


    );
}
