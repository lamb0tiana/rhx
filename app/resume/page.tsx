import Image from "next/image";
import {faker} from "@faker-js/faker/locale/fr";

export default function Resume() {
    return (
        <div className="max-w-[1200px] mx-auto">
            <section className="flex flex-col items-center justify-center text-center">

                <p className="font-bold mt-12">
                    <span className="text-primary text-xl">Bon de cadeau n° </span>
                    <span className="text-orange-900 text-2xl">
                        {faker.number.int({min: 2000, max: 10000})}
                    </span>
                </p>


                <div className="m-10 w-full max-w-[600px]">
                    <Image
                        src="/images/models/3.png"
                        alt="Image description"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl object-contain w-full h-auto"
                    />
                </div>


                <a
                    href="#"
                    download
                    className="bg-primary mt-8 text-white font-bold py-2 px-6 rounded-lg shadow-md"
                >
                    Télécharger votre bon
                </a>
            </section>
        </div>
    );
}
