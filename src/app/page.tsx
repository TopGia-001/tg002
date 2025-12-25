'use client';

import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import Link from "next/link";
import BottomNavbar from "@/src/component/bottomNavbar";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">

            <div className="hidden xl:flex fixed inset-0 z-0 w-full h-full justify-center items-center overflow-hidden">
                <Image
                    src="/assets/bg-desktop.webp"
                    alt="Background Desktop"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute z-10 w-full h-full min-w-[177.78vh] min-h-[56.25vw] flex">
                    <div className="w-1/2 h-full relative"></div>
                    <div className="w-1/2 h-full relative">
                        <div className="absolute top-[60%] left-[10%]">
                            <CtaButton />
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:hidden relative w-full h-screen overflow-hidden">
                <Image
                    src="/assets/bg-mobile.webp"
                    alt="Background Mobile/Tablet"
                    fill
                    className="object-cover object-top mt-10"
                    priority
                />

                {/* Header Mobile */}
                <header className="absolute top-0 left-0 w-full bg-[#b91c1c] text-white px-4 py-3 flex justify-between items-center shadow-lg z-20 border-b border-red-900/30 h-[50px]">
                    <div className="flex items-center gap-2">
                        <Link href="/"><Home className="w-5 h-5 text-white" /></Link>
                        <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">Trang chủ</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-1 rounded"><MoreHorizontal size={24} /></button>
                        <button className="p-1 rounded"><X size={24} /></button>
                    </div>
                </header>

                <div className="absolute left-0 w-full flex justify-center z-10 px-4
                    bottom-[18%]
                    md:bottom-[10%]">
                    <CtaButton mobile />
                </div>
            </div>

            <BottomNavbar />
        </div>
    );
}

function CtaButton({ mobile = false }: { mobile?: boolean }) {
    return (
        <div className={`flex flex-col items-center group cursor-pointer 
            ${mobile ? 'scale-90 md:scale-110' : 'scale-100 origin-left'}`}>

            <div className="relative">
                {/* Luồng sáng vàng phía sau */}
                <div className="absolute top-[20%] left-[5%] w-[90%] h-[80%] bg-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>

                <Link href="/register" className="block">
                    <div className="animate-cta-btn">
                        <button className="relative transition-transform active:scale-95">
                            <Image
                                src="/assets/btn-register.png"
                                alt="Tham gia ngay"
                                width={300}
                                height={80}
                                className="w-auto h-14 sm:h-16 md:h-20 object-contain drop-shadow-2xl"
                                priority
                            />
                        </button>
                    </div>
                </Link>
            </div>

            <Link href="/rules"
                  className="shopee-bold underline underline-offset-4 mt-3 px-4 py-1 text-[16px] md:text-[22px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] hover:text-yellow-300 transition-colors">
                THỂ LỆ ĐIỀU KHOẢN
            </Link>
        </div>
    )
}