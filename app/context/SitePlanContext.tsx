"use client"
import {createContext, Dispatch, useContext, useEffect, useReducer} from 'react'
import {plan_site_item_type} from "@/app/data/site_plan";
import {usePathname} from "next/navigation";
import SitePlanQuery from "@/app/actions/siteplan";

type ContextData = {
    sitePlan: plan_site_item_type[]
    isQuerying: boolean
}
type SitePlanType = ContextData & {
    dispatch: Dispatch<ContextData>
}
const defaultValue: SitePlanType = {
    sitePlan: [],
    isQuerying: true,
    dispatch: () => undefined,
}
const SitePlanContext = createContext<SitePlanType>(defaultValue)
const SitePlanContextComponent: React.FC<{
    children: React.ReactElement
}> = ({children}) => {
    const [{sitePlan, isQuerying}, dispatch] = useReducer(
        (prevState: ContextData, action: Partial<ContextData>) => ({
            ...prevState,
            ...action,
        }),
        defaultValue
    )

    const path: string = usePathname() || "/";
    const [, firstPath] = path.split('/');
    const matchActiveMenu = (menu_candidate: plan_site_item_type[]) => {
        const belong_active_index: number = menu_candidate.findIndex(s => s.url.includes(firstPath))
        dispatch({sitePlan: menu_candidate.map((value, key) => ({...value, is_active: key <= belong_active_index}))});
    }

    useEffect(() => {
        matchActiveMenu(sitePlan)
    }, [path]);

    useEffect(() => {
        SitePlanQuery()
            .then((response) => {
                matchActiveMenu(Object.values(response))
            })
            .finally(() => {
                dispatch({
                    isQuerying: false
                })
            });
    }, []);
    return (
        <SitePlanContext.Provider
            value={{isQuerying, sitePlan, dispatch}}
        >
            {children}
        </SitePlanContext.Provider>
    )
}
const useSitePlan = (): SitePlanType =>
    useContext(SitePlanContext)
export {useSitePlan}
export default SitePlanContextComponent
