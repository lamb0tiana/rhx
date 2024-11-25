"use client"
import style from "./home.module.scss"
import {CategoryFilter, ProductType} from "@/app/_/data/products";
import {useProduct} from "@/app/_/context/ProductContext";
import Image from "next/image";
import present from "@/public/icons/present2.svg";
import {useState, useEffect} from "react";
import {Loader} from "lucide-react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
    const {filter, dispatch, products} = useProduct();

    const [productCandidates, setProductCandidates] = useState<ProductType[]>([]);

    useEffect(() => {
        setProductCandidates(products.filter(i => filter === undefined ? i : i.title === filter))
    }, [filter, products])


    const handleSelection = (product: ProductType) => {
        dispatch({selectedProduct: product})
        router.push(`/info/${product.id}`)
    }
    return (
        productCandidates.length === 0 ? <div className="flex flex-col justify-end items-center m-12 h-40">
                <Loader className="animate-spin text-primary w-10 h-10"/>
                <span className="mt-2">Chargement des bons de commande</span>
            </div>
            :
            <div className="container max-w-[1200px] mx-auto p-5">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-fit m-auto gap-0 p-1 justify-center gap-2.5 my-5 font-bold items-center`}
                    id={style.filter}
                >
                    {CategoryFilter.map(category =>
                        <button
                            onClick={() => dispatch({filter: category == "Tous" ? undefined : category})}
                            className={filter === category || (category === "Tous" && filter === undefined) ? style.active : 'text-primary'}
                            key={category}>
                            {category}
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productCandidates.map((product, j) => (
                        <div key={j}
                             className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col min-h-[400px] pb-6">
                            <div className="h-48 bg-gray-200">
                                <Image
                                    src={product.imgUrl}
                                    alt={'d'}
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="px-4 flex flex-col flex-grow my-5">
                                <h3 className="text-xl text-primary m-auto font-bold mb-2">Chèque cadeau</h3>
                                <p className="text-gray-600 mb-4 text-justify">{product.shortDescription}</p>
                                <p className="flex justify-center items-center gap-1 text-sm font-bold my-3 bg-[#FCF5E7] p-2 rounded-lg text-primary mb-2">
                                    <Image src={present} alt={'present'} width={25} height={25}/> À partir
                                    de {product.price} €
                                </p>
                            </div>
                            <div className="px-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500">Pour {product.person} personnes</span>
                                <button
                                    onClick={handleSelection.bind(null, product)}
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
