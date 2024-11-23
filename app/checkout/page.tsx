import BuyerSection from "@/app/checkout/BuyerSection";
import CommandModelSection from "@/app/checkout/CommandModelSection";

export default function Checkout() {
    return (
        <div className="max-w-[1200px] mx-auto p-6">
            <form className="space-y-8">
                <BuyerSection/>
                <CommandModelSection/>
            </form>
        </div>

    );
}
