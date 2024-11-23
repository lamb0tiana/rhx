import LeftSide from "@/app/components/header/leftSide";

import SocialNetworks from "./socialNetworks";
import SecurePayment from "@/app/components/footer/securedPayment";

export default function Footer() {
    return <footer className="my-8 py-8 w-full mx-auto ">
        <div className="container mx-auto border-primary border-t border-b max-w-[1200px] py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col  items-center">
                    <LeftSide/>
                </div>

                <div
                    className="flex flex-col md:flex-row items-center justify-center space-x-6 md:space-x-8 h-1/2 md:h-auto">
                    <SecurePayment/>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <SocialNetworks/>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-8 max-w-[1024px]">
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 text-xs">
                <div className="text-center ">
                    <p>Site développé par <a
                        href="mailto:tiana.randrianarivony@gmail.com">tiana.randrianarivony@gmail.com</a></p>
                </div>

                <div className="flex justify-center space-x-6">
                    <a href="/mentions-legales" className="hover:text-gray-400">Mentions légales</a>
                    <a href="/politique-confidentialite" className="hover:text-gray-400">Politique de
                        confidentialité</a>
                    <a href="/cgu" className="hover:text-gray-400">CGU</a>
                </div>
            </div>
        </div>
    </footer>


}
