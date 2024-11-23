import LeftSide from "@/app/components/header/leftSide";
import fb from "@/public/icons/facebook.svg";
import yt from "@/public/icons/youtube.svg";
import insta from "@/public/icons/instagram.svg";
import pinterest from "@/public/icons/pinterest.svg";
import stripe from "@/public/icons/stripe.svg";
import mc from "@/public/icons/mastercard.svg";
import cb from "@/public/icons/cb.svg";
import visa from "@/public/icons/visa.svg";
import Image from "next/image";
export default function Footer() {
    return <footer className="my-8 py-8 w-full mx-auto">
        <div className="container mx-auto border-primary border-t border-b max-w-[1024px] py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col  items-center">
                    <LeftSide/>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center space-x-6 md:space-x-8 h-1/2 md:h-auto">
                    <p className="text-sm mt-2 text-center md:text-left">Paiement sécurisé</p>
                    <div className="flex items-center justify-center gap-4">
                        <Image src={visa} alt="Visa" width={50} height={50}/>
                        <Image src={mc} alt="Mastercard" width={50} height={50}/>
                        <Image src={cb} alt="CB" width={50} height={50}/>
                        <Image src={stripe} alt="Stripe" width={50} height={50}/>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <Image src={fb} alt="Facebook" width={25} height={25}/>
                    <Image src={yt} alt="YouTube" width={25} height={25}/>
                    <Image src={insta} alt="Instagram" width={25} height={25}/>
                    <Image src={pinterest} alt="Pinterest" width={25} height={25}/>
                </div>
            </div>
        </div>

        <div className="container mx-auto max-w-[1024px] mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div className="text-center sm:text-left">
                    <p>Site développé par <a
                        href="mailto:tiana.randrianarivony@gmail.com">tiana.randrianarivony@gmail.com</a></p>
                </div>

                <div className="flex justify-center sm:justify-end space-x-6">
                    <a href="/mentions-legales" className="hover:text-gray-400">Mentions légales</a>
                    <a href="/politique-confidentialite" className="hover:text-gray-400">Politique de
                        confidentialité</a>
                    <a href="/cgu" className="hover:text-gray-400">CGU</a>
                </div>
            </div>
        </div>
    </footer>


}
