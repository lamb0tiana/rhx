import checkoutStyle from "./checkout.module.scss"

export default function CommandModelSection() {

    return <section className={`rounded-2xl p-6 border border-gray-200 ${checkoutStyle.row}`}>
        <div className="flex items-center space-x-3 mb-6">
            <div>2</div>
            <h2>Choisir un modèle</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <label className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Option 1"
                        className="w-full h-auto rounded-md mb-4"
                    />
                    <input
                        type="radio"
                        name="option"
                        value="option1"
                    />
                </label>
            </div>
            <div>
                <label className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Option 2"
                        className="w-full h-auto rounded-md mb-4"
                    />
                    <input
                        type="radio"
                        name="option"
                        value="option2"
                    />
                </label>
            </div>
            <div>
                <label className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Option 3"
                        className="w-full h-auto rounded-md mb-4"
                    />
                    <input
                        type="radio"
                        name="option"
                        value="option3"
                        className="form-radio text-blue-500"
                    />
                </label>
            </div>
        </div>
    </section>
}
