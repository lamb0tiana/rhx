import checkoutStyle from "./checkout.module.scss"
import React from "react";
import {FieldErrors, useFormContext} from "react-hook-form";
import {CheckoutFormType} from "@/app/_/schemas/checkoutSchemas";

type BuyerSectionProps = {
    errors: FieldErrors<CheckoutFormType["giver"]>
}
const BuyerSection: React.FC<BuyerSectionProps> = ({errors}) => {
    const { register } = useFormContext<CheckoutFormType>();
    return <section className={checkoutStyle.row}>
        <div className="flex items-center space-x-3 mb-6">
            <div>1</div>
            <h2>Identité de lʼacheteur du bon cadeau:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="email">Email (*)</label>
                <input type="email" id="email" {...register("giver.email")} placeholder={"email@example.fr"}/>
                {errors.email && <p className={checkoutStyle.hasError}>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="adresse">Adresse</label>
                <input type="text" id="adresse" {...register("giver.address")} placeholder={"Entrer votre adresse"}/>
                {errors.address && <p className={checkoutStyle.hasError}>{errors.address.message}</p>}
            </div>
            <div>
                <label htmlFor="cp">Code postal</label>
                <input type="text" id="cp" {...register("giver.cp")} placeholder="Entrer votre code postal"/>
                {errors.cp && <p className={checkoutStyle.hasError}>{errors.cp.message}</p>}
            </div>
            <div>
                <label htmlFor="ville">Ville</label>
                <input type="text" id="ville" {...register("giver.city")} placeholder="Entrer votre ville"/>
                {errors.city && <p className={checkoutStyle.hasError}>{errors.city.message}</p>}
            </div>
        </div>
    </section>
}
export default BuyerSection
