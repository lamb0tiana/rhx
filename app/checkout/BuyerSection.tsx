import checkoutStyle from "./checkout.module.scss"
import React from "react";
import {FieldErrors, useFormContext} from "react-hook-form";
import {CheckoutFormType} from "@/app/_/schemas/checkoutSchemas";

type BuyerSectionProps = {
    errors: FieldErrors<CheckoutFormType['fromSchema']>
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
                <label htmlFor="email">Email</label>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <input type="email" id="email" {...register("fromSchema.email")} placeholder={"email@example.fr"}/>
            </div>
            <div>
                <label htmlFor="adresse">Adresse</label>
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                <input type="text" id="adresse" {...register("fromSchema.address")} placeholder={"Entrer votre adresse"}/>
            </div>
            <div>
                <label htmlFor="cp">Code postal</label>
                {errors.cp && <p className="text-red-500">{errors.cp.message}</p>}
                <input type="text" id="cp" {...register("fromSchema.cp")} placeholder="Entrer votre code postal"/>
            </div>
            <div>
                <label htmlFor="ville">Ville</label>
                {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                <input type="text" id="ville" {...register("fromSchema.city")} placeholder="Entrer votre ville"/>
            </div>
        </div>
    </section>
}
export default BuyerSection
