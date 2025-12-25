import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FileText,
    Gift, HomeIcon,
    List,
} from 'lucide-react';

export default function BottomNavbar({ hideDecor = false }: { hideDecor?: boolean }) {
    return (
        <>
            {!hideDecor && (
                <>
                    <div className="hidden md:hidden xl:block fixed bottom-[60px] md:bottom-0 left-0 z-50 w-20 md:w-56 pointer-events-none">
                        <Image src="/assets/decor-left.png" alt="Decor Left" width={300} height={300} className="w-full h-auto object-contain" />
                    </div>
                    <div className="hidden md:hidden xl:block fixed bottom-[60px] md:bottom-0 right-0 z-50 w-24 md:w-64 pointer-events-none">
                        <Image src="/assets/decor-right.png" alt="Decor Right" width={300} height={300} className="w-full h-auto object-contain" />
                    </div>
                </>
            )}

            <nav className="fixed bottom-0 left-0 w-full bg-black/95 text-white z-40 border-t border-white/10 shadow-2xl">
                <div className="max-w-7xl mx-auto px-1 md:px-4">
                    <ul className="flex justify-between md:justify-center md:gap-16 items-center py-1.5 h-full">

                        <NavItem
                            href="/"
                            icon={<HomeIcon size={20} className="md:w-4 md:h-4" />}
                            label={<>Trang chủ</>}
                            className="pl-0 hidden md:block"
                        />

                        <NavItem
                            href="/rules"
                            icon={<FileText size={20} className="md:w-4 md:h-4" />} // Tăng size icon mobile lên 20 cho dễ nhìn
                            label={<>Thể lệ</>}
                            className="pl-2 md:pl-0"
                        />

                        <NavItem
                            href="/products"
                            icon={<Gift size={20} className="md:w-4 md:h-4" />}
                            label={<>Sản phẩm <br/> khuyến mại</>}
                        />

                        <NavItem
                            href="/winners"
                            icon={<List size={20} className="md:w-4 md:h-4" />}
                            label={<>Danh sách <br/> trúng thưởng</>}
                        />

                        <NavItem
                            href="/gifts"
                            icon={<Gift size={20} className="md:w-4 md:h-4" />}
                            label={<>Quà tặng</>}
                            className="pr-2 md:pr-0"
                        />

                    </ul>
                </div>
            </nav>
        </>
    );
}

interface NavItemProps {
    icon: React.ReactNode;
    label: React.ReactNode;
    href?: string;
    className?: string;
}

function NavItem({ icon, label, href, className = "" }: NavItemProps) {

    const Content = () => (
        <>
            <div className="shopee-bold shrink-0 mb-0.5 md:mb-0 md:mr-2 text-white group-hover:text-yellow-400 transition-colors">
                <div className="md:scale-125">{icon}</div>
            </div>
            <span className="shopee-bold text-[10px] md:text-sm font-medium leading-tight text-white group-hover:text-yellow-400 text-center md:text-left whitespace-nowrap">
                {label}
            </span>
        </>
    );

    return (
        <li className={`flex-1 md:flex-none h-full group ${className}`}>
            {href ? (
                <Link href={href} className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full h-full px-1 cursor-pointer py-1">
                    {/* eslint-disable-next-line react-hooks/static-components */}
                    <Content />
                </Link>
            ) : (
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full h-full px-1 cursor-default py-1">
                    {/* eslint-disable-next-line react-hooks/static-components */}
                    <Content />
                </div>
            )}
        </li>
    );
}