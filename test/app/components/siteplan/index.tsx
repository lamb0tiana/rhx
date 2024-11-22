import present from "@/public/icons/present.svg";
import Image from "next/image";
export default function Siteplan() {
    return (
        <div className="mt-3 w-full bg-[#FCF5E7] flex items-center">
            <section
                className="flex items-center justify-between mx-auto max-w-[960px]  p-4 w-full flex-col sm:flex-row">
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                        <Image src={present} alt="home" width={50}/>
                    </div>
                    <span>Choisissez un bon</span>
                </div>

                <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>

                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                        <Image src={present} alt="home" width={50}/>
                    </div>
                    <span>Choisissez un bon</span>
                </div>

                <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>

                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                        <Image src={present} alt="home" width={50}/>
                    </div>
                    <span>Choisissez un bon</span>
                </div>

                <div className="flex-1 border-t-2 border-dashed border-[#D9BBA2] mx-4 p-2"></div>

                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                        <Image src={present} alt="home" width={50}/>
                    </div>
                    <span>Choisissez un bon</span>
                </div>
            </section>
        </div>
    );
}
