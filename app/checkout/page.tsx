"use client"
import BuyerSection from "@/app/checkout/BuyerSection";
import CommandModelSection from "@/app/checkout/CommandModelSection";
import Receiver from "@/app/checkout/Receiver";
import CgvSection from "@/app/checkout/CgvSection";
import {useForm, FormProvider} from "react-hook-form";
import {CheckoutFormType, formSchema} from "@/app/_/schemas/checkoutSchemas";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useEffect} from "react";

export default function Checkout() {
    const methods = useForm<CheckoutFormType>({
        resolver: zodResolver(formSchema),
    })
    const {
        handleSubmit,
        formState: {errors},
    } = methods;
    const onsubmit = (data: CheckoutFormType) => {
        console.log(data)

    }

    return (
        <div className="max-w-[1200px] mx-auto p-6 ">
            <FormProvider {...methods}>
                <form className="space-y-8" onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(onsubmit)(e)
                }}>
                    <BuyerSection errors={errors.fromSchema || {}}/>
                    <Receiver errors={errors.toSchema || {}}/>
                    <CommandModelSection errors={errors.commandModelSchema || {}}/>
                    <CgvSection errors={errors.cgSchema || {}}/>
                    <input type="submit" value="Valider et payer"
                           className="bg-primary text-white text-sm m-auto flex font-bold py-2 px-4 rounded-md"/>
                </form>
            </FormProvider>
        </div>

    );
}
