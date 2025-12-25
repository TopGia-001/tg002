import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

const PROMOTIONAL_PRODUCTS = [
    { id: 1, name: "M1-08", img: "/assets/Links/M1-08.png" },
    { id: 2, name: "UVC 208", img: "/assets/Links/UVC208.png" },
    { id: 3, name: "UVC 8879", img: "/assets/Links/UVC8879.png" },
    { id: 4, name: "UVC M1-05", img: "/assets/Links/UVCM1-05.png" },
    { id: 5, name: "T1-01", img: "/assets/Links/T1-01.png" },
    { id: 6, name: "M2-03", img: "/assets/Links/M2-03.png" },
    { id: 7, name: "M3-03", img: "/assets/Links/M3-03.png" },
    { id: 8, name: "8166", img: "/assets/Links/8166.png" },
    { id: 9, name: "T202", img: "/assets/Links/T202.png" },
    { id: 10, name: "T1-02", img: "/assets/Links/T1-02.png" },
    { id: 11, name: "4 Bịch bỉm", img: "/assets/Links/4bim.png" },
];

export default function PromotionalProductsPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden text-white">

            {/* BACKGROUND */}
            <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
                <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-cover object-top" priority />
            </div>
            <div className="md:hidden fixed top-[45px] left-0 right-0 bottom-0 z-0 w-full">
                <Image src="/assets/bg-simple-mobile.webp" alt="BG Mobile" fill className="object-cover object-top" priority />
            </div>

            {/* MOBILE HEADER */}
            <header className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 shrink-0 h-[45px]">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Home className="w-5 h-5 text-white" />
                    </Link>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded tracking-tighter">SẢN PHẨM KHUYẾN MẠI</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            <main className="flex-1 flex flex-col min-h-0 z-10 relative">

                {/* TITLE */}
                <div className="shrink-0 flex justify-center pt-[6vh] pb-4 md:pt-[12vh] md:pb-8 px-4">
                    <h1
                        className="shopee-extrabold text-center text-white uppercase font-black leading-tight tracking-wide
                            text-[20px] [-webkit-text-stroke:6px_#701318]
                            md:text-[42px] md:[-webkit-text-stroke:10px_#701318]
                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        style={{paintOrder: 'stroke fill'}}
                    >
                        SẢN PHẨM THAM GIA <br className="md:hidden"/> CHƯƠNG TRÌNH KHUYẾN MẠI
                    </h1>
                </div>

                {/* PRODUCT LIST AREA */}
                <div className="flex-1 overflow-y-auto pb-[150px] custom-scrollbar scrollbar-hide">
                    <div className="w-full max-w-[1200px] mx-auto px-4">
                        <div className="flex flex-wrap justify-start md:justify-center gap-3 md:gap-6">
                            {PROMOTIONAL_PRODUCTS.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="w-[calc(50%-6px)] md:w-[calc(25%-18px)] bg-white rounded-[24px] md:rounded-[40px] p-3 md:p-5 shadow-xl flex flex-col"
                                >
                                    <div className="relative w-full aspect-square flex-shrink-0">
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>

                                    <div className="mt-2 flex flex-col items-start">
                                        <h2
                                            className="shopee-bold text-black text-[20px] md:text-[32px] leading-tight text-left mt-1 line-clamp-2"
                                            style={{
                                                WebkitTextStroke: '4px white',
                                                paintOrder: 'stroke fill'
                                            }}
                                        >
                                            {product.name}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* BOTTOM NAVBAR */}
            <div className="fixed bottom-0 left-0 right-0 z-[60]">
                <BottomNavbar hideDecor={true} />
            </div>
        </div>
    );
}