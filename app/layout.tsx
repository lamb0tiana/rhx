import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/_/components/header";
import Siteplan from "@/app/_/components/siteplan";
import SitePlanContextComponent from "@/app/_/context/SitePlanContext";
import ProductContextComponent from "@/app/_/context/ProductContext";
import Footer from "@/app/_/components/footer";
import CardContextComponent from "@/app/_/context/CartContext";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Bon cadeau",
    description: "test tiana",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header/>
        <ProductContextComponent>
            <CardContextComponent>
                <>
                    <SitePlanContextComponent>
                        <Siteplan/>
                    </SitePlanContextComponent>
                    {children}</>
            </CardContextComponent>
        </ProductContextComponent>
        <Footer/>

        </body>
        </html>
    );
}
