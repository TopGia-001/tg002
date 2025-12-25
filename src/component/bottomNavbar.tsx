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
  Maximize2,
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
          <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-2 md:px-4">
            <div className="relative w-full max-w-5xl h-[90dvh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">

              {/* HEADER POPUP - Thêm thanh điều hướng nhỏ */}
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b">
                <span className="font-bold text-gray-700 text-sm md:text-base">Thể lệ chương trình</span>
                <div className="flex items-center gap-2">
                  {/* NÚT MỞ TOÀN MÀN HÌNH: Giải pháp cho mobile không cuộn được */}
                  <a
                      href="/rules-kids.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition"
                  >
                    <Maximize2 size={16} />
                    <span className="hidden md:inline">Xem toàn màn hình</span>
                    <span className="md:hidden">Mở rộng</span>
                  </a>
                  <button
                      onClick={() => setShowRules(false)}
                      className="bg-gray-300 text-gray-700 rounded-lg p-1.5 hover:bg-gray-400 transition"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* CONTAINER PDF */}
              <div className="flex-1 w-full h-full overflow-y-auto bg-gray-200">
                {/*
                  Sử dụng thẻ <object> kết hợp <iframe>.
                  Trên một số thiết bị, object hoạt động tốt hơn iframe cho PDF.
               */}
                <object
                    data="/rules-kids.pdf#toolbar=0&navpanes=0&scrollbar=1"
                    type="application/pdf"
                    className="w-full h-full"
                >
                  <iframe
                      src="/rules-kids.pdf#toolbar=0&navpanes=0&scrollbar=1"
                      className="w-full h-full border-none"
                      title="Thể lệ"
                  >
                    <p>Trình duyệt của bạn không hỗ trợ xem PDF.
                      <a href="/rules-kids.pdf" className="text-blue-600 underline">Nhấn vào đây để tải về.</a>
                    </p>
                  </iframe>
                </object>
              </div>

              {/* FOOTER POPUP - Nhắc người dùng cuộn hoặc mở rộng */}
              <div className="md:hidden bg-yellow-50 px-4 py-2 text-[10px] text-center text-orange-800 font-medium">
                Nếu không cuộn được, vui lòng nhấn nút <b>"Mở rộng"</b> ở trên để xem đầy đủ.
              </div>
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
          {/* eslint-disable-next-line react-hooks/static-components */}
          <Content />
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="flex flex-col md:flex-row items-center justify-center w-full h-full px-1 py-1"
        >
          {/* eslint-disable-next-line react-hooks/static-components */}
          <Content />
        </button>
      )}
    </li>
  );
}
