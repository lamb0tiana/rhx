import LeftSide from "@/app/_/components/header/leftSide";
import Search from "@/app/_/components/header/search";

export default function Index() {
    return <header className="mt-5 w-full">
        <section className="max-w-[1200px] h-1/2 md:h-[60px] mx-auto p-8 flex flex-col gap-6 md:flex-row md:justify-between items-center">
            <LeftSide/>
            <Search/>
        </section>
    </header>
}
