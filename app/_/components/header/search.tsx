export default function Search() {
    return <div className="w-full md:w-auto">
        <form className="flex gap-4 justify-center flex-col">
            <div className="flex items-stretch border rounded-3xl overflow-hidden p-2 rounded-3xl">
                <input
                    type="text"
                    placeholder="Entrez votre N° de bon cadeau"
                    className="flex-1 p-2 focus:outline-none min-w-72 text-center font-semibold text-[#523918]"
                />
                <button
                    type="button"
                    className="bg-primary text-white px-4 font-semibold focus:outline-none hover:bg-primary-dark rounded-3xl min-w-24 hidden md:block"
                >
                    Voir
                </button>
            </div>
            <button type="button"
                className="bg-primary text-white p-1 font-semibold focus:outline-none hover:bg-primary-dark rounded-3xl min-w-24 block md:hidden w-1/3 mx-auto"
            >
                Voir
            </button>
        </form>
    </div>
}
