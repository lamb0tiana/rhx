'use client'
import present from "@/public/icons/present.svg";
import Image from "next/image";
import {useEffect, useState} from "react";
import {plan_site_item_type} from "@/app/data/site_plan";
import {Loader} from "lucide-react";
import SitePlanQuery from "@/app/actions/siteplan";

export default function Siteplan() {
    const [isQuerying, setIsQuerying] = useState<boolean>(false)
    const [sitePlan, setSitePlan] = useState<plan_site_item_type[]>([])
    useEffect(() => {
        setIsQuerying(true)
        SitePlanQuery().then(r => {
            setSitePlan(Object.values(r))
            setIsQuerying(false)
        })
    }, []);
    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex items-center">
            <section
                className="flex items-center justify-between mx-auto max-w-[960px]  p-4 w-full flex-col sm:flex-row">
                {
                   isQuerying ?
                        <div className="flex items-center justify-center mx-auto">
                            <Loader className="animate-spin text-primary w-10 h-10"/>
                        </div> :
                        <>
                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <div
                                    className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                                    <Image src={present} alt="home" width={50}/>
                                </div>
                                <span>Choisissez un bon</span>
                            </div>

                            <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>

                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <div
                                    className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                                    <Image src={present} alt="home" width={50}/>
                                </div>
                                <span>Choisissez un bon</span>
                            </div>

                            <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>

                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <div
                                    className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                                    <Image src={present} alt="home" width={50}/>
                                </div>
                                <span>Choisissez un bon</span>
                            </div>

                            <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>

                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <div
                                    className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                                    <Image src={present} alt="home" width={50}/>
                                </div>
                                <span>Choisissez un bon</span>
                            </div>
                        </>
                }
            </section>

        </div>
    )
        ;
}
