"use client"
import React, {createContext, Dispatch, useContext, useReducer} from 'react'
import {ProductType} from "@/app/_/data/products";
import {VoucherType} from "@/app/_/schemas/checkoutSchemas";

type ContextData = {
    selectedProduct: ProductType | null
    unitPricing: number
    quantity: number
    voucher: VoucherType | undefined
}
type CardContextDataType = ContextData & {
    dispatch: Dispatch<Partial<ContextData>>
}
const defaultValue: CardContextDataType = {
    quantity: 0,
    unitPricing: 0,
    selectedProduct: null,
    voucher: undefined,
    dispatch: () => undefined,
}
const CardContext = createContext<CardContextDataType>(defaultValue)
const CardContextComponent: React.FC<{
    children: React.ReactElement
}> = ({children}) => {
    const [{unitPricing, quantity, selectedProduct, voucher}, dispatch] = useReducer(
        (prevState: ContextData, action: Partial<ContextData>) => ({
            ...prevState,
            ...action,
        }),
        defaultValue
    )


    return (
        <CardContext.Provider
            value={{unitPricing, selectedProduct, quantity, voucher, dispatch}}
        >
            {children}
        </CardContext.Provider>
    )
}
const useCard = (): CardContextDataType =>
    useContext(CardContext)
export {useCard}
export default CardContextComponent
