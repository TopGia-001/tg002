'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import Link from "next/link";
import BottomNavbar from "@/src/component/bottomNavbar";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import('@/src/component/pdfViewer'), {
    ssr: false,
    loading: () => <div className="p-10 text-center font-bold">Đang khởi tạo trình xem...</div>
});

export default function LandingPage() {
    const [showRules, setShowRules] = useState(false);

    // Chặn scroll khi popup mở
    useEffect(() => {
        if (showRules) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [showRules]);
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
                            <CtaButton onRulesClick={() => setShowRules(true)}/>
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
                    <CtaButton mobile onRulesClick={() => setShowRules(true)}/>
                </div>
            </div>

            {showRules && (
                <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center px-2">
                    <div className="relative w-full max-w-5xl h-[85dvh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col">

                        <button
                            onClick={() => setShowRules(false)}
                            className="absolute top-3 right-3 z-[1010] bg-black/60 text-white rounded-full p-2 hover:scale-110 transition"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex-1 overflow-y-auto">
                            <PdfViewer file="/rules-kids.pdf" />
                        </div>
                    </div>
                </div>
            )}

            <BottomNavbar />
        </div>
    );
}

function CtaButton({ mobile = false, onRulesClick }: { mobile?: boolean, onRulesClick: () => void }) {
    return (
        <div className={`flex flex-col items-center group cursor-pointer 
            ${mobile ? 'scale-90 md:scale-110' : 'scale-100 origin-left'}`}>

            <div className="relative">
                <div
                    className="absolute top-[20%] left-[5%] w-[90%] h-[80%] bg-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>

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

            <button
                onClick={onRulesClick}
                className="shopee-bold underline underline-offset-4 mt-3 px-4 py-1 text-[16px] md:text-[22px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] hover:text-yellow-300 transition-colors"
            >
                THỂ LỆ ĐIỀU KHOẢN
            </button>
        </div>
    )
}