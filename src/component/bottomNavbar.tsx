'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FileText,
  Gift,
  HomeIcon,
  List,
  X,
} from 'lucide-react';

export default function BottomNavbar({ hideDecor = false }: { hideDecor?: boolean }) {
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
    <>
      {/* DECOR */}
      {!hideDecor && (
        <>
          <div className="hidden xl:block fixed bottom-[60px] left-0 z-50 w-20 pointer-events-none">
            <Image src="/assets/decor-left.png" alt="Decor Left" width={300} height={300} className="w-full h-auto object-contain" />
          </div>
          <div className="hidden xl:block fixed bottom-[60px] right-0 z-50 w-24 pointer-events-none">
            <Image src="/assets/decor-right.png" alt="Decor Right" width={300} height={300} className="w-full h-auto object-contain" />
          </div>
        </>
      )}

      {/* NAVBAR */}
      <nav className="fixed bottom-0 left-0 w-full bg-black/95 text-white z-40 border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-1 md:px-4">
          <ul className="flex justify-between md:justify-center md:gap-16 items-center py-1.5 h-full">

            <NavItem
              href="/"
              icon={<HomeIcon size={20} />}
              label={<>Trang chủ</>}
              className="hidden md:block"
            />

            {/* THỂ LỆ – MỞ POPUP */}
            <NavItem
              icon={<FileText size={20} />}
              label={<>Thể lệ</>}
              onClick={() => setShowRules(true)}
            />

            <NavItem
              href="/products"
              icon={<Gift size={20} />}
              label={<>Sản phẩm<br />khuyến mại</>}
            />

            <NavItem
              href="/winners"
              icon={<List size={20} />}
              label={<>Danh sách<br />trúng thưởng</>}
            />

            <NavItem
              href="/gifts"
              icon={<Gift size={20} />}
              label={<>Quà tặng</>}
            />
          </ul>
        </div>
      </nav>

      {/* POPUP RULES */}
      {showRules && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-2">
          <div className="relative w-full max-w-5xl h-[85dvh] bg-white rounded-xl overflow-hidden shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setShowRules(false)}
              className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full p-2 hover:scale-110 transition"
            >
              <X size={24} />
            </button>

            {/* PDF */}
            <iframe
              src="/rules-kids.pdf"
              className="w-full h-full"
              title="Thể lệ chương trình"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ===================== */
/* NavItem */
/* ===================== */

interface NavItemProps {
  icon: React.ReactNode;
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

function NavItem({ icon, label, href, onClick, className = '' }: NavItemProps) {
  const Content = () => (
    <>
      <div className="shopee-bold mb-0.5 md:mb-0 md:mr-2 text-white group-hover:text-yellow-400 transition">
        <div className="md:scale-125">{icon}</div>
      </div>
      <span className="shopee-bold text-[10px] md:text-sm leading-tight text-center md:text-left">
        {label}
      </span>
    </>
  );

  return (
    <li className={`flex-1 md:flex-none h-full group ${className}`}>
      {href ? (
        <Link
          href={href}
          className="flex flex-col md:flex-row items-center justify-center w-full h-full px-1 py-1"
        >
          <Content />
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="flex flex-col md:flex-row items-center justify-center w-full h-full px-1 py-1"
        >
          <Content />
        </button>
      )}
    </li>
  );
}
