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
import {faker} from "@faker-js/faker/locale/fr";

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
        const id = faker.number.int({min: 10000, max: 99999})
        dispatch({
            voucher:{
                id,
                model: data.model,
                receiver: data.receiver,
                giver: data.giver
            }
        })

        router.push(`/resume/${id}`)
    }

    useEffect(() => {
        document.title = "Information commande"
        if(!selectedProduct) {
            router.push('/')
        }
    }, []);

    return (
            <FormProvider {...methods}>
                <form className="space-y-8 mx-auto px-6" onSubmit={(e) => {
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

    );
}
