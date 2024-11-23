"use client"
import {useProduct} from "@/app/context/FilterContext";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import present2 from "@/public/icons/present2.svg";
import {ProductType} from "@/app/data/products";
import {useCard} from "@/app/context/CartContext";
import {useRouter} from "next/navigation";

export default function Content({id}: { id: number }) {

    const {products} = useProduct()
    const { dispatch} = useCard()
    const router = useRouter()
    const [price, setPrice] = useState<number>(0)
    const [count, setCount] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const [product, setProduct] = useState<ProductType | undefined>(undefined);

    useEffect(() => {
        setProduct(products.find(p => p.id === id))
    }, []);

    useEffect(() => {
        if (product) {
            setPrice(product.price)
            dispatch({selectedProduct: product})
        }
    }, [product]);

    useEffect(() => {
        setTotal(price * count)
    }, [price, count]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(+event.target.value)
    }

    const validateCommand = () => {
        dispatch({quantity: count, unitPricing: price, selectedProduct: product})
        router.push("/checkout")
    }

    if (!product)
        return <div className="text-center">No product</div>

    return <>
        <div className="flex flex-col items-stretch gap-4 md:flex-row md:gap-8 border-b border-primary pb-8 ">
            <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50">
                <Image
                    layout="responsive"
                    src={product.imgUrl}
                    alt="Image du produit"
                    width={500}
                    height={400}
                    className="object-contain max-w-[90%] md:max-w-full rounded-xl"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4">
                <div>
                    <p className="text-xl text-primary font-semibold mb-4 text-center md:text-left">Chèque cadeau</p>
                    <p className="py-1 bg-[#FCF5E7] w-1/3 text-sm rounded-md text-center">
                        Pour {product.person} personne{product.person > 1 ? "s" : ""}
                    </p>
                    <p className="text-sm text-justify py-2 my-3">{product.shortDescription}</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="option" className="h-4 w-4" value={product.price}
                               checked={price === product.price} onChange={handleChange}/>
                        <span className="text-sm flex gap-2 text-amber-900 font-bold">
                    <Image
                        src={present2}
                        alt={'present 2'}
                        width={20}
                        height={20}
                    />
                            {product.price}€ (hors boisson)
                </span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="option" className="h-4 w-4" value={product.price * 2}
                               checked={price === product.price * 2} onChange={handleChange}/>
                        <span className="text-sm flex gap-2 text-amber-900 font-bold">
                    <Image
                        src={present2}
                        alt={'present 2'}
                        width={20}
                        height={20}
                    />
                            {product.price * 2}€ (avec vins hors apéro & café)
                </span>
                    </label>
                    <div className="flex items-center justify-between mt-4 space-x-4">
                        <div className="flex items-center space-x-4">
                            <button className="text-primary font-bold"
                                    onClick={() => setCount((count - 1) < 1 ? 1 : count - 1)}>-
                            </button>
                            <input
                                type="number"
                                className="w-16 text-center border border-gray-300 rounded-md"
                                value={count}
                                readOnly={true}
                            />
                            <button className="text-primary font-bold" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <div className="text-right flex flex-col justify-center">
                            <span className="text-md text-primary font-semibold">Total: {total.toFixed(2)}€</span>
                            <p className="mt-2 p-2 bg-[#FCF5E7]  text-sm rounded-md text-center">
                                Pour {product.person} personne{product.person > 1 ? "s" : ""}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={validateCommand}
                    className="w-full sm:w-fit mt-6 bg-primary font-bold text-white py-2 px-6 rounded-md hover:bg-blue-600">
                    Commander
                </button>
            </div>
        </div>
        <div>
            <p className="text-md text-primary font-semibold mb-4 mt-5">Description</p>
            <p className="text-sm text-justify py-2 my-1">{product.description}</p>
        </div>
    </>


}
