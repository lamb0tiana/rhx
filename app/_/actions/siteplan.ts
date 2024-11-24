import { plan_site_type } from "@/app/_/data/site_plan";

export default async function SitePlanQuery(): Promise<plan_site_type> {
    const response = await fetch("/api/siteplan");
    if (!response.ok) {
        throw new Error(`Error fetching site plan: ${response.statusText}`);
    }
    return response.json();
}
