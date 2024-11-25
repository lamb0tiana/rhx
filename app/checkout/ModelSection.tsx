import checkoutStyle from "./checkout.module.scss";
import {FieldErrors, useFormContext} from "react-hook-form";
import {CheckoutFormType} from "@/app/_/schemas/checkoutSchemas";
import React from "react";
import Image from "next/image";

type ModelSectionProps = {
    errors: FieldErrors<CheckoutFormType['model']>;
};

const ModelSection: React.FC<ModelSectionProps> = ({errors}) => {
    const {register, watch} = useFormContext<CheckoutFormType>();

    const selectedModel = watch("model.value");

    return (
        <section className={checkoutStyle.row}>
            <div className="flex items-center space-x-3 mb-6">
                <div>3</div>
                <h2>Choisir un modèle</h2>
                {errors.value && (
                    <p className={checkoutStyle.hasError}>{errors.value.message}</p>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[1, 2, 3].map((model, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-between w-full h-full `}
                    >
                        <label className={`flex flex-col w-full items-center ${checkoutStyle.radios}`}>
                            <div
                                className={`w-full h-[300px] flex items-center justify-center mb-4 border py-8 rounded-xl ${
                                    +selectedModel === model ? checkoutStyle.active : ""
                                }`}
                            >
                                <Image
                                    src={`/images/models/${model}.png`}
                                    alt={`model ${model}`}
                                    layout="responsive"
                                    width={350}
                                    height={150}
                                    objectFit="cover"
                                />
                            </div>
                            <input
                                type="radio"
                                value={model}
                                {...register("model.value")}
                                className="mt-4"
                            />
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ModelSection;
