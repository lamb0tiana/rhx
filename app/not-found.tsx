import Link from "next/link";

export default function NotFound() {
    return (

        <div className="flex flex-col items-center justify-center h-[40vh] m-auto text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-700 mt-4">La page que vous recherchez n'existe pas.</p>
            <Link
                href="/"
                className="mt-6 px-4 py-2 bg-primary hover:text-cyan-50 text-white rounded-md"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}
