"use client"
import {createContext, Dispatch, useContext, useEffect, useReducer} from 'react'
import {CategoryFilterType, products, ProductType} from "@/app/data/products";

type ContextData = {
    filter: CategoryFilterType | undefined
    selectedProduct: ProductType | undefined
    products: ProductType[]
}
type ProductContextDataType = ContextData & {
    dispatch: Dispatch<Partial<ContextData>>
}
const defaultValue: ProductContextDataType = {
    filter: undefined,
    products: [],
    selectedProduct: undefined,
    dispatch: () => undefined,
}
const ProductContext = createContext<ProductContextDataType>(defaultValue)
const ProductContextComponent: React.FC<{
    children: React.ReactElement
}> = ({children}) => {
    const [{filter, selectedProduct}, dispatch] = useReducer(
        (prevState: ContextData, action: Partial<ContextData>) => ({
            ...prevState,
            ...action,
        }),
        defaultValue
    )

    useEffect(() => {
        dispatch({
             products
        })
    }, [products]);


    return (
        <ProductContext.Provider
            value={{filter, selectedProduct, products, dispatch}}
        >
            {children}
        </ProductContext.Provider>
    )
}
const useProduct = (): ProductContextDataType =>
    useContext(ProductContext)
export {useProduct}
export default ProductContextComponent
