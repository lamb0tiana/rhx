"use client"
import {createContext, Dispatch, useContext, useEffect, useReducer} from 'react'
import {CategoryFilterType, products, ProductType} from "@/app/data/products";

type ContextData = {
    filter: CategoryFilterType | undefined
    selectedProduct: ProductType | undefined
    products: ProductType[]
}
type FilterContextDataType = ContextData & {
    dispatch: Dispatch<Partial<ContextData>>
}
const defaultValue: FilterContextDataType = {
    filter: undefined,
    products: [],
    selectedProduct: undefined,
    dispatch: () => undefined,
}
const FilterContext = createContext<FilterContextDataType>(defaultValue)
const FilterContextComponent: React.FC<{
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
        <FilterContext.Provider
            value={{filter, selectedProduct, products, dispatch}}
        >
            {children}
        </FilterContext.Provider>
    )
}
const useFilter = (): FilterContextDataType =>
    useContext(FilterContext)
export {useFilter}
export default FilterContextComponent
