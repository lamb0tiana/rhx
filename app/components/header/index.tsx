import LeftSide from "@/app/components/header/leftSide";
import Search from "@/app/components/header/search";

export default function Index() {
    return <header className="mt-5 w-full">
        <section className="max-w-[1200px] mx-auto p-8 flex flex-col gap-6 md:flex-row md:justify-between items-center">
            <LeftSide/>
            <Search/>
        </section>
    </header>
}
