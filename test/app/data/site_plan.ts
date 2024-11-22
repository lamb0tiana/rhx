export type plan_site_item_type = {
    url: string
    icon: string
    label: string
    is_active: boolean
};
type plan_site_candidate_type = "home" | "info" | "checkout" | "print"
export type plan_site_type = Record<plan_site_candidate_type, plan_site_item_type>
const site_plan: plan_site_type = {
    "home": {
        "url": "/",
        "icon": "present",
        "label": "Choisissez un bon",
        "is_active": false
    },
    "info": {
        "url":  `/info/123`,
        "icon": "info",
        "label": "Informations sur le bon",
        "is_active": false
    },
    "checkout": {
        "url": "/checkout",
        "icon": "checkout",
        "label": "Paiement",
        "is_active": false
    },
    "print": {
        "url": "/print",
        "icon": "print",
        "label": "Imprimer votre bon",
        "is_active": false
    }
}
export default site_plan
