import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

export default function WinnersPage() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">

            {/* MOBILE HEADER */}
            <header
                className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-10 relative border-b border-red-900/30 shrink-0 h-[45px]">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Home className="w-5 h-5 text-white" />
                    </Link>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">DANH SÁCH TRÚNG THƯỞNG</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>
            
            <div className="hidden xl:block fixed inset-0 z-0 w-full h-full overflow-hidden">
                <Image src="/assets/bg-winner.webp" alt="BG Desktop" fill className="object-fill" priority/>
            </div>
            <div className="hidden md:block xl:hidden fixed inset-0 z-0 w-full h-full overflow-hidden">
                <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-cover object-top" priority/>
            </div>
            <div className="md:hidden z-0 relative w-full h-screen overflow-hidden">
              <Image
                src="/assets/bg-winner-mobile.webp"
                alt="BG Mobile"
                fill
                priority
                className="object-cover object-top bg-mobile-fill"
              />
            </div>

            <main className="relative z-10 flex-1 flex flex-col items-center overflow-hidden">

                <div className="flex-1 flex flex-col items-center justify-start pt-[12vh] md:pt-[15vh] px-6">

                    <h1
                        className="shopee-extrabold text-center text-white font-black leading-tight tracking-wide
                            text-[24px] [-webkit-text-stroke:6px_#701318]
                            md:text-[42px] md:[-webkit-text-stroke:10px_#701318]
                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        style={{paintOrder: 'stroke fill'}}
                    >
                        Thời gian công bố <br className="md:hidden"/> kết quả đợt 1
                    </h1>

                    <div
                        className="my-2 md:my-4 px-8 py-2 md:px-14 md:py-4 border-[3px] md:border-[5px] border-white rounded-full bg-[#701318] shadow-2xl">
                        <span
                            className="shopee-extrabold text-white text-[26px] md:text-[56px] font-black leading-none block tracking-tighter">
                            17h ngày 12/01/2026
                        </span>
                    </div>

                    <h3 className="shopee-extrabold text-center text-white font-black tracking-tight
                        text-[24px] [-webkit-text-stroke:6px_#701318]
                        md:text-[42px] md:[-webkit-text-stroke:10px_#701318]
                        drop-shadow-md"
                        style={{ paintOrder: 'stroke fill' }}
                    >
                        Trên fanpage TOPGIA
                    </h3>
                </div>

            </main>

            {/* BOTTOM NAVBAR */}
            <div className="fixed bottom-0 left-0 right-0 z-[60]">
                <BottomNavbar hideDecor={true} />
            </div>

        </div>
    );
}
