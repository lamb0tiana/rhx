"use client"
import style from "./home.module.scss"
import {CategoryFilter} from "@/app/data/filter";
import {useFilter} from "@/app/context/FilterContext";

export default function Home() {
    const {filter, dispatch} = useFilter()
    return (
        <div className="container max-w-[1200px] mx-auto">
            <div className={`flex justify-center gap-2.5 my-5 font-bold`} id={style.filter}>
                <button className={`${filter === undefined ? style.active : ''}`} onClick={() => dispatch({filter: undefined})}>Tous</button>
                {CategoryFilter.map(category => <button onClick={() => dispatch({filter: category})} className={filter === category ? style.active : ''}
                                                        key={category}>{category}</button>)}
            </div>
        </div>
    );
}
