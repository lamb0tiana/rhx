"use client"
import style from "./home.module.scss"
import {CategoryFilter, giftType, list} from "@/app/data/filter";
import {useFilter} from "@/app/context/FilterContext";
import Image from "next/image";
import present from "@/public/icons/present2.svg";
import {useState, useEffect} from "react";
import {faker} from "@faker-js/faker/locale/fr";

export default function Home() {
    const {filter, dispatch} = useFilter();

    const [candidates, setCandidates] = useState<giftType[]>([]);

    useEffect(() => setCandidates(list), []);


    return (
        <div className="container max-w-[1200px] mx-auto px-5">
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-fit m-auto gap-0 p-1 justify-center gap-2.5 my-5 font-bold items-center`}
                id={style.filter}
            >
                {CategoryFilter.map(category =>
                    <button
                        onClick={() => dispatch({filter: category == "Tous" ? undefined : category})}
                        className={filter === category || (category === "Tous" && filter === undefined) ? style.active : ''}
                        key={category}>
                        {category}
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {candidates.map((i, j) => (
                    <div key={j}
                         className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col min-h-[400px] pb-6">
                        <div className="h-48 bg-gray-200">
                            <Image
                                src={i.imgUrl}
                                alt={'d'}
                                width={320}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-4 flex flex-col flex-grow my-5">
                            <h3 className="text-xl text-primary m-auto font-bold mb-2">Chèque cadeau</h3>
                            <p className="text-gray-600 mb-4 text-justify">{i.shortDescription}</p>
                            <p className="flex justify-center items-center gap-1 text-sm font-bold my-3 bg-[#FCF5E7] p-2 rounded-lg text-primary mb-2">
                                <Image src={present} alt={'present'} width={25} height={25}/> À partir de {i.price} €
                            </p>
                        </div>
                        <div className="px-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500">Pour {faker.number.int({
                                min: 1,
                                max: 4
                            })} personnes</span>
                            <button
                                className="text-primary hover:bg-primary hover:text-white border border-primary border-1 w-1/3 font-bold text-sm px-4 py-2 rounded-lg hover:bg-primary-dark"
                            >
                                Offrir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}