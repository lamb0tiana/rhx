import Image from "next/image";
import visa from "@/public/icons/visa.svg";
import mc from "@/public/icons/mastercard.svg";
import cb from "@/public/icons/cb.svg";
import stripe from "@/public/icons/stripe.svg";

export default function SecurePayment(){
    return <>
        <p className="text-sm mt-2 text-center md:text-left whitespace-normal lg:whitespace-nowrap">Paiement sécurisé</p>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4">
            <Image src={visa} alt="Visa" width={50} height={50}/>
            <Image src={mc} alt="Mastercard" width={50} height={50}/>
            <Image src={cb} alt="CB" width={50} height={50}/>
            <Image src={stripe} alt="Stripe" width={50} height={50}/>
        </div>
    </>
}
