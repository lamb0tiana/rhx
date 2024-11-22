export type plan_site_item_type = {
    url: string | ((params: string) => string)
    icon: string
};

type plan_site_candidate_type = "home" | "info" | "checkout" | "print"
export type plan_site_type = Record<plan_site_candidate_type, plan_site_item_type>
const site_plan: plan_site_type = {
    "home": {
        "url": "/",
        "icon": "present.svg"
    },
    "info": {
        "url": (param: string) => `info/${param}`,
        "icon": "info.svg"
    },
    "checkout": {
        "url": "/checkout",
        "icon": "checkout.svg"
    },
    "print": {
        "url": "/print",
        "icon": "print.svg"
    }
}
export default site_plan
