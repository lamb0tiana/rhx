import checkoutStyle from "./checkout.module.scss"

export default function BuyerSection() {

    return <section className={`rounded-2xl p-6 border border-gray-200 ${checkoutStyle.row}`}>
        <div className="flex items-center space-x-3 mb-6">
            <div>1</div>
            <h2>Identité de lʼacheteur du bon cadeau:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
            </div>
            <div>
                <label htmlFor="adresse">Adresse</label>
                <input type="text" id="adresse" name="adresse"/>
            </div>
            <div>
                <label htmlFor="cp">Code postal</label>
                <input type="text" id="cp" name="cp"/>
            </div>
            <div>
                <label htmlFor="ville">Ville</label>
                <input type="text" id="ville" name="ville"/>
            </div>
        </div>
    </section>
}
