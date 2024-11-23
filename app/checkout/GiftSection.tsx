import checkoutStyle from "./checkout.module.scss"

export default function GiftSection() {

    return <section className={checkoutStyle.row}>
        <div className="flex items-center space-x-3 mb-6">
            <div>2</div>
            <h2>Informations présentes sur le bon cadeau:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="to">Pour</label>
                <input type="text" id="to" name="to" placeholder="Nom de la personne qui reçoit"/>
            </div>
            <div>
                <label htmlFor="from">De la part de </label>
                <input type="text" id="from" name="from" placeholder="Nom de la personne qui offre"/>
            </div>

        </div>
    </section>
}
