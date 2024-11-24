import checkoutStyle from "./checkout.module.scss"
import {FieldErrors, useFormContext} from "react-hook-form";
import {CheckoutFormType} from "@/app/_/schemas/checkoutSchemas";
import React from "react";
type ModelSectionProps = {
    errors: FieldErrors<CheckoutFormType['model']>
}
const ModelSection: React.FC<ModelSectionProps> = ({errors}) => {
const { register } = useFormContext<CheckoutFormType>();
    return <section className={checkoutStyle.row}>
        <div className="flex items-center space-x-3 mb-6">
            <div>3</div>
            <h2>Choisir un modèle</h2>{errors.value && <p className={checkoutStyle.hasError}>{errors.value.message}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <label className={`flex flex-col items-center ${checkoutStyle.radios}`}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Option 1"
                        className="w-full h-auto rounded-md mb-4"
                    />
                    <input type="radio" value="model1" {...register("model.value")} />
                </label>
            </div>
            <div>
                <label className={`flex flex-col items-center ${checkoutStyle.radios}`}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Option 2"
                        className="w-full h-auto rounded-md mb-4"
                    />
                    <input type="radio" value="model2" {...register("model.value")} />
                </label>
            </div>
            <div>
                <label className={`flex flex-col items-center ${checkoutStyle.radios}`}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Option 3"
                        className="w-full h-auto rounded-md mb-4"
                    />
                    <input type="radio" value="model3" {...register("model.value")} />
                </label>
            </div>
        </div>
    </section>
}
export default ModelSection
