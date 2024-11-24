import Content from "@/app/info/[id]/content";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Description du bon cadeau",
    description: "test tiana",
};

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    return <Content id={+id}/>
}
