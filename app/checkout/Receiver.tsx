import checkoutStyle from "./checkout.module.scss"
import {FieldErrors, useFormContext} from "react-hook-form";
import {CheckoutFormType} from "@/app/_/schemas/checkoutSchemas";
import React from "react";
type ReceiverSectionProps = {
    errors: FieldErrors<CheckoutFormType['receiver']>
}
const Receiver : React.FC<ReceiverSectionProps>= ({errors}) => {
    const { register } = useFormContext<CheckoutFormType>();
    return <section className={checkoutStyle.row}>
        <div className="flex items-center space-x-3 mb-6">
            <div>2</div>
            <h2>Informations présentes sur le bon cadeau:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="to">Pour (*)</label>
                <input type="text" id="to" {...register("receiver.receiver")} placeholder="Nom de la personne qui reçoit"/>
                {errors.receiver && <p className={checkoutStyle.hasError}>{errors.receiver.message}</p>}
            </div>
            <div>
                <label htmlFor="from">De la part de (*)</label>

                <input type="text" id="from" {...register("receiver.from")} placeholder="Nom de la personne qui offre"/>
                {errors.from && <span className={checkoutStyle.hasError}>{errors.from.message}</span>}
            </div>

        </div>
    </section>
}
export default Receiver
