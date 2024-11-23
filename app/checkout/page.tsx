import BuyerSection from "@/app/checkout/BuyerSection";
import CommandModelSection from "@/app/checkout/CommandModelSection";
import GiftSection from "@/app/checkout/GiftSection";
import CgvSection from "@/app/checkout/CgvSection";

export default function Checkout() {
    return (
        <div className="max-w-[1200px] mx-auto p-6 ">
            <form className="space-y-8">
                <BuyerSection/>
                <GiftSection/>
                <CommandModelSection/>
                <CgvSection/>
                <input type="submit" value="Valider et payer" className="bg-primary text-white text-sm m-auto flex font-bold py-2 px-4 rounded-md"/>
            </form>
        </div>

    );
}
