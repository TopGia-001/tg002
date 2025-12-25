import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

const GIFTS_LIST = [
    { id: 1, img: "/assets/Gifts/xemay.png" },
    { id: 2, img: "/assets/Gifts/hutbui.png" },
    { id: 3, img: "/assets/Gifts/maygiat.png" },
    { id: 4, img: "/assets/Gifts/tivi.png" },
    { id: 5, img: "/assets/Gifts/locnuoc.png" },
    { id: 6, img: "/assets/Gifts/lockk.png" },
];

export default function GiftsListPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">

            {/* BACKGROUND (Fixed) */}
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
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">DANH SÁCH QUÀ TẶNG</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col min-h-0 z-10 relative">

                {/* FIXED TITLE */}
                <div className="shrink-0 flex justify-center pt-[8vh] pb-6 md:pt-[15vh] md:pb-10 px-4">
                    <h1
                        className="shopee-extrabold text-center text-white uppercase font-black leading-tight tracking-wide
                            text-[22px] [-webkit-text-stroke:6px_#701318]
                            md:text-[48px] md:[-webkit-text-stroke:12px_#701318]
                            drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                        style={{paintOrder: 'stroke fill'}}
                    >
                        DANH SÁCH QUÀ TẶNG
                    </h1>
                </div>

                <div className="flex-1 overflow-y-auto pb-[120px] custom-scrollbar scroll-smooth scrollbar-hide">
                    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {GIFTS_LIST.map((gift) => (
                                <div
                                    key={gift.id}
                                    className="bg-white rounded-2xl md:rounded-[40px] shadow-xl transition-transform hover:scale-105
                       w-[calc(50%-8px)] md:w-[calc(31%-22px)]
                       p-3 md:p-6 flex flex-col items-center justify-center"
                                >
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src={gift.img}
                                            alt="Quà tặng Top Gia"
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 40vw, 25vw"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-[60]">
                <BottomNavbar hideDecor={true}/>
            </div>

        </div>
    );
}
