import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

const GIFTS_LIST = [
    { id: 1, count: "01", name: "Xe máy điện Vinfast Feliz 2025", img: "/assets/Links/gifts-xemay.png" },
    { id: 2, count: "01", name: "Máy hút bụi lau nhà cầm tay Roborock F25 ACE Combo", img: "/assets/Links/gifts-hutbui.png" },
    { id: 3, count: "01", name: "Máy Giặt/Sấy Samsung Inverter 9.5 Kg WD95T4046CE/SV", img: "/assets/Links/gifts-maygiat.png" },
    { id: 5, count: "01", name: "Máy lọc nước nóng lạnh Kangaroo KG10A17", img: "/assets/Links/gifts-locnuoc.png" },
    { id: 6, count: "01", name: "Xiaomi Smart Air Purifier 4 máy lọc không khí diện tích 40 m²", img: "/assets/Links/gifts-lockk.png" },
];

export default function GiftsListPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">

            {/* BACKGROUND (Fixed) */}
            <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
                <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-cover object-top" priority/>
            </div>
            <div className="md:hidden fixed inset-0 top-[45px] z-0 w-full h-full">
                <Image src="/assets/bg-simple-mobile.webp" alt="BG Mobile" fill className="object-cover object-top"
                       priority/>
            </div>

            {/* MOBILE HEADER */}
            <header
                className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 shrink-0 h-[45px]">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Home className="w-5 h-5 text-white"/>
                    </Link>
                    <span
                        className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">DANH SÁCH QUÀ TẶNG</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col min-h-0 z-10 relative">
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

                <div className="flex-1 overflow-y-auto pb-[140px] px-4 custom-scrollbar scroll-smooth scrollbar-hide">
                    <div
                        className="max-w-[1100px] mx-auto flex flex-wrap justify-start md:justify-center gap-3 md:gap-10">

                        {GIFTS_LIST.map((gift) => (
                            <div
                                key={gift.id}
                                className="bg-white rounded-[20px] md:rounded-[40px] shadow-lg p-3 md:p-6 relative
                                           w-[calc(50%-6px)] md:w-[calc(33.333%-27px)]"
                            >
                                <div className="relative w-full aspect-[4/3] md:aspect-square">
                                    <Image
                                        src={gift.img}
                                        alt={gift.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 45vw, 30vw"
                                    />

                                    {/* TEXT OVERLAY */}
                                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 max-w-[90%]">
                                        {/* COUNT */}
                                        <div
                                            className="shopee-extrabold text-black text-[28px] md:text-[56px] leading-none
                              [-webkit-text-stroke:5px_#FFFFFF] md:[-webkit-text-stroke:8px_#FFFFFF]"
                                            style={{paintOrder: 'stroke fill'}}
                                        >
                                            {gift.count}
                                        </div>

                                        {/* NAME */}
                                        <div
                                            className="shopee-bold text-black text-[10px] md:text-[14px] leading-tight line-clamp-2
                              [-webkit-text-stroke:5px_#FFFFFF] md:[-webkit-text-stroke:8px_#FFFFFF]"
                                            style={{paintOrder: 'stroke fill'}}
                                        >
                                            {gift.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </main>

            {/* NAV */}
            <div className="fixed bottom-0 left-0 right-0 z-[60]">
                <BottomNavbar hideDecor/>
            </div>
        </div>
    );
}
