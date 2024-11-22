export default function Siteplan() {
    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex items-center h-1/3">
            <section className="grid gap-4 mx-auto max-w-[1200px] p-4 sm:grid-cols-2 md:grid-cols-4 h-full">
                {/* Premier élément */}
                <div className="flex items-center">
                    <div
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        1
                    </div>
                    <span className="h-[2px] bg-gray-400 w-8 sm:w-[2px] sm:h-8 md:w-8 md:h-[2px]"></span>
                </div>

                {/* Deuxième élément */}
                <div className="flex  items-center">
                    <div
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        2
                    </div>
                    <span className="h-[2px] bg-gray-400 w-8 sm:w-[2px] sm:h-8 md:w-8 md:h-[2px]"></span>
                </div>

                {/* Troisième élément */}
                <div className="flex  items-center">
                    <div
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        3
                    </div>
                    <span className="h-[2px] bg-gray-400 w-8 sm:w-[2px] sm:h-8 md:w-8 md:h-[2px]"></span>
                </div>

                {/* Quatrième élément */}
                <div className="flex  items-center">
                    <div
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        4
                    </div>
                </div>
            </section>
        </div>
    );
}
