"use client"
import BuyerSection from "@/app/checkout/BuyerSection";
import ModelSection from "@/app/checkout/ModelSection";
import Receiver from "@/app/checkout/Receiver";
import CgvSection from "@/app/checkout/CgvSection";
import {useForm, FormProvider} from "react-hook-form";
import {CheckoutFormType, formSchema} from "@/app/_/schemas/checkoutSchemas";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useCard} from "@/app/_/context/CartContext";

export default function Checkout() {
    const {selectedProduct, dispatch} = useCard()
    const router = useRouter()
    const methods = useForm<CheckoutFormType>({
        resolver: zodResolver(formSchema),
    })
    const {
        handleSubmit,
        formState: {errors},
    } = methods;


    const onsubmit = (data: CheckoutFormType) => {
        const {cg, ...voucher} = data
        dispatch({
            voucher
        })

        router.push('/resume')
    }

    useEffect(() => {
        if(!selectedProduct) {
            router.push('/')
        }
    }, []);
    return (
        <div className="max-w-[1200px] mx-auto p-6 ">
            <FormProvider {...methods}>
                <form className="space-y-8" onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(onsubmit)(e)
                }}>
                    <BuyerSection errors={errors.giver || {}}/>
                    <Receiver errors={errors.receiver || {}}/>
                    <ModelSection errors={errors.model || {}}/>
                    <CgvSection errors={errors.cg || {}}/>
                    <input type="submit" value="Valider et payer"
                           className="bg-primary text-white text-sm m-auto flex font-bold py-2 px-4 rounded-md"/>
                </form>
            </FormProvider>
        </div>

    );
}
