"use client"
import style from "./home.module.scss"
import {CategoryFilter, list} from "@/app/data/filter";
import {useFilter} from "@/app/context/FilterContext";

export default function Home() {
    const {filter, dispatch} = useFilter()
    return (
        <div className="container max-w-[1200px] mx-auto">
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  justify-center gap-2.5 my-5 font-bold`} id={style.filter}>
                <button className={`${filter === undefined ? style.active : ''}`}
                        onClick={() => dispatch({filter: undefined})}>Tous
                </button>
                {CategoryFilter.map(category => <button onClick={() => dispatch({filter: category})}
                                                        className={filter === category ? style.active : ''}
                                                        key={category}>{category}</button>)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-1/2 bg-gray-200">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Card Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Titre de la carte</h3>
                        <p className="text-gray-600 mb-4">
                            Ceci est une description rapide de la carte. Vous pouvez y ajouter
                            plusieurs détails.
                        </p>
                        <p className="text-lg font-semibold text-primary mb-4">Prix : 50 €</p>
                    </div>
                    <div className="border-t p-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Pour 2 personnes</span>
                        <button
                            className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary-dark"
                        >
                            Réserver
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-1/2 bg-gray-200">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Card Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Titre de la carte</h3>
                        <p className="text-gray-600 mb-4">
                            Ceci est une description rapide de la carte. Vous pouvez y ajouter
                            plusieurs détails.
                        </p>
                        <p className="text-lg font-semibold text-primary mb-4">Prix : 50 €</p>
                    </div>
                    <div className="border-t p-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Pour 2 personnes</span>
                        <button
                            className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary-dark"
                        >
                            Réserver
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-1/2 bg-gray-200">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Card Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Titre de la carte</h3>
                        <p className="text-gray-600 mb-4">
                            Ceci est une description rapide de la carte. Vous pouvez y ajouter
                            plusieurs détails.
                        </p>
                        <p className="text-lg font-semibold text-primary mb-4">Prix : 50 €</p>
                    </div>
                    <div className="border-t p-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Pour 2 personnes</span>
                        <button
                            className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary-dark"
                        >
                            Réserver
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-1/2 bg-gray-200">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Card Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Titre de la carte</h3>
                        <p className="text-gray-600 mb-4">
                            Ceci est une description rapide de la carte. Vous pouvez y ajouter
                            plusieurs détails.
                        </p>
                        <p className="text-lg font-semibold text-primary mb-4">Prix : 50 €</p>
                    </div>
                    <div className="border-t p-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Pour 2 personnes</span>
                        <button
                            className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary-dark"
                        >
                            Réserver
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
