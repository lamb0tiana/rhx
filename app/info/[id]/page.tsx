import Content from "@/app/info/[id]/content";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    return <Content id={+id}/>
}
