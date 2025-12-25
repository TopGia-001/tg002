import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

const PROMOTIONAL_PRODUCTS = [
    { id: 1, name: "THÙNG GIẤY TẾT 20 GÓI", img: "/assets/Links/giay-tet.png" },
    { id: 2, name: "COMBO CHĂM SÓC GIA ĐÌNH", img: "/assets/combo-csgd.webp" },
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
                <div className="shrink-0 flex justify-center pt-[8vh] pb-6 md:pt-[15vh] md:pb-10 px-4">
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

                <div className="w-full max-w-[1000px] mx-auto px-6 pb-[150px] pt-1 overflow-y-auto scrollbar-hide">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        {PROMOTIONAL_PRODUCTS.map((product) => (
                            <div key={product.id} className="flex flex-col items-center group">

                                {/* WHITE BOX FOR IMAGE */}
                                <div className="bg-white rounded-[32px] md:rounded-[45px] p-6 md:p-10 shadow-2xl w-full aspect-[4/3] flex items-center justify-center transition-transform group-hover:scale-105">
                                    <div className="relative w-full h-full">
                                        {product.img && (
                                            <Image
                                                src={product.img}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* PRODUCT NAME WITH STROKE */}
                                <div className="mt-2 md:mt-4">
                                    <h2 className="shopee-extrabold text-center text-white uppercase font-black tracking-tight
                                        text-[18px] [-webkit-text-stroke:6px_#701318]
                                        md:text-[28px] md:[-webkit-text-stroke:10px_#701318]
                                        drop-shadow-md"
                                        style={{ paintOrder: 'stroke fill' }}
                                    >
                                        {product.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
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