"use client"
import React, {createContext, Dispatch, useContext, useReducer} from 'react'
import {ProductType} from "@/app/data/products";

type ContextData = {
    selectedProduct: ProductType | null
    price: number
    quantity: number
}
type CardContextDataType = ContextData & {
    dispatch: Dispatch<Partial<ContextData>>
}
const defaultValue: CardContextDataType = {
    quantity: 0,
    price: 0,
    selectedProduct: null,
    dispatch: () => undefined,
}
const CardContext = createContext<CardContextDataType>(defaultValue)
const CardContextComponent: React.FC<{
    children: React.ReactElement
}> = ({children}) => {
    const [{price, quantity, selectedProduct}, dispatch] = useReducer(
        (prevState: ContextData, action: Partial<ContextData>) => ({
            ...prevState,
            ...action,
        }),
        defaultValue
    )


    return (
        <CardContext.Provider
            value={{price, selectedProduct, quantity, dispatch}}
        >
            {children}
        </CardContext.Provider>
    )
}
const useCard = (): CardContextDataType =>
    useContext(CardContext)
export {useCard}
export default CardContextComponent
