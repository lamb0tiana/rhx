import type {Metadata} from "next";
import Resume from "@/app/resume/[id]/resume";

export const metadata: Metadata = {
    title: "bon cadeau",
    description: "test tiana",
};

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    return <Resume id={id}/>
}
