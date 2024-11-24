import checkoutStyle from "./checkout.module.scss"
import {FieldErrors, useFormContext} from "react-hook-form";
import {CheckoutFormType} from "@/app/_/schemas/checkoutSchemas";
import React from "react";
type CGProps = {
    errors: FieldErrors<CheckoutFormType['cg']>
}
const  CgvSection: React.FC<CGProps> =({errors}) =>  {
    const {register} =useFormContext<CheckoutFormType>()
    return <div className={checkoutStyle.cgvSection}>
        <p><label><input type="checkbox" {...register("cg.cgv")}/> <span className={errors.cgv && checkoutStyle.hasError}>Jʼ accepte des conditions générales de ventes et offres promo.</span></label></p>
        <p><label><input type="checkbox" {...register("cg.cgu")}/> <span className={errors.cgu && checkoutStyle.hasError}>En soumettant ce formulaire, jʼ accepte que les informations saisies soient exploitées dans le cadre de la relation
            établie avec la société éditrice de ce site internet (contact, demande dʼinformations).</span></label></p>
    </div>
}
export default CgvSection
