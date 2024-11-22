"use client"
import {createContext, Dispatch, useContext, useReducer} from 'react'
import {CategoryFilterType} from "@/app/data/filter";

type ContextData = {
   filter: CategoryFilterType | undefined
}
type FilterContextDataType = ContextData & {
    dispatch: Dispatch<ContextData>
}
const defaultValue: FilterContextDataType = {
    filter: undefined,
    dispatch: () => undefined,
}
const FilterContext = createContext<FilterContextDataType>(defaultValue)
const FilterContextComponent: React.FC<{
    children: React.ReactElement
}> = ({children}) => {
    const [{filter}, dispatch] = useReducer(
        (prev: ContextData, action: Partial<ContextData>) => ({
            ...prev,
            ...action,
        }),
        defaultValue
    )


    return (
        <FilterContext.Provider
            value={{filter, dispatch}}
        >
            {children}
        </FilterContext.Provider>
    )
}
const useFilter = (): FilterContextDataType =>
    useContext(FilterContext)
export {useFilter}
export default FilterContextComponent
