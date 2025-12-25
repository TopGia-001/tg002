"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X, Calendar, Loader2 } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const registerSchema = z.object({
    rewardCode: z.string().min(1, "Vui lòng nhập mã dự thưởng"),
    fullName: z.string().min(1, "Vui lòng nhập họ tên"),
    phone: z.string().regex(/^[0-9]{10}$/, "SĐT phải gồm 10 chữ số"),
    dob: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/, "Định dạng đúng: DD/MM/YYYY"),
    address: z.string().min(1, "Vui lòng nhập địa chỉ"),
    terms: z.boolean().refine((val) => val === true, {
        message: "Bạn cần đồng ý điều khoản",
    }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

// Kiểu trạng thái kết quả
type SubmitStatus = 'IDLE' | 'SUCCESS' | 'USED' | 'INVALID' | 'EXCEED'| 'ERROR';

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<SubmitStatus>('IDLE');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: { terms: false }
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('SUCCESS');
                reset(); // Xóa form sau khi thành công
            } else if (result.status === 'USED') {
                setStatus('USED');
            } else if (result.status === 'INVALID') {
                setStatus('INVALID');
            } else if (result.status === 'EXCEED') {
                setStatus('EXCEED');
            } else {
                alert(result.message || "Có lỗi xảy ra");
            }
        } catch (error) {
            alert("Lỗi kết nối server");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">
            <div className="hidden xl:block fixed inset-0 z-0 w-full h-full">
              <Image
                src="/assets/bg-no-prizes.webp"
                alt="BG Desktop"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="hidden md:block xl:hidden fixed inset-0 z-0 w-full h-full">
              <Image
                src="/assets/bg-simple.webp"
                alt="BG Tablet"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="md:hidden fixed top-[50px] left-0 right-0 bottom-0 z-0 w-full">
              <Image
                src="/assets/bg-no-prizes-mobile.webp"
                alt="BG Mobile"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* HEADER GIỮ NGUYÊN */}
            <header className="md:hidden bg-[#b91c1c] text-white px-4 py-3 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 shrink-0 h-[50px]">
                <div className="flex items-center gap-2">
                    <Link href="/">
                      <Home className="w-5 h-5 text-white" />
                    </Link>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">Trang chủ</span>
                </div>
                <div className="flex items-center gap-3">
                    <button type="button" className="p-1 rounded"><MoreHorizontal size={24}/></button>
                    <button type="button" className="p-1 rounded" onClick={() => setStatus('IDLE')}><X size={24}/></button>
                </div>
            </header>

            <main className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-[1400px] mx-auto px-4 md:px-6 xl:px-8 pb-32 md:pb-16 pt-4 md:pt-0">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col xl:flex-row items-center md:items-start justify-center w-full gap-3 md:gap-4 lg:gap-12">
                    <div className="w-full max-w-md xl:w-1/3 flex flex-col items-center md:items-end">
                        <div className="w-full max-w-sm md:max-w-[350px]">
                            <div className="h-auto md:h-[60px] flex items-end justify-center pb-1 md:pb-2 w-full">
                                <label className="shopee-bold text-center text-white font-bold uppercase drop-shadow-md text-sm xl:text-base block w-full">
                                    Nhập mã dự thưởng
                                </label>
                            </div>
                            <div className={`relative group transition-transform ${errors.rewardCode ? 'animate-shake' : ''}`}>
                                <div className="absolute inset-0 bg-[#8B0000] rounded-full blur opacity-75 translate-y-1"></div>
                                <input
                                    {...register("rewardCode")}
                                    type="text"
                                    placeholder="Mã dự thưởng"
                                    className={`shopee-bold relative w-full bg-white text-center text-gray-700 font-bold text-xl md:text-2xl py-2 md:py-3 rounded-full border-[3px] md:border-4 shadow-inner focus:outline-none placeholder:text-gray-400 ${errors.rewardCode ? 'border-yellow-400' : 'border-[#b91c1c]'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CỘT 2: THÔNG TIN CÁ NHÂN */}
                    <div className="w-full max-w-md xl:w-1/3 flex flex-col items-center">
                        <div className="w-full max-sm space-y-1.5 md:space-y-2">
                            <div className="h-auto md:h-[60px] flex items-end justify-center pb-1 md:pb-2">
                                <p className="shopee-medium text-center text-white leading-[1.2] flex items-end justify-center text-xs font-bold [-webkit-text-stroke:0.5px_#701318] md:text-[16px] md:font-medium md:[-webkit-text-stroke:6px_#701318]" style={{paintOrder: 'stroke fill'}}>
                                    Vui lòng cung cấp chính xác <br/> các thông tin dưới đây
                                </p>
                            </div>
                            <FormInput register={register("fullName")} placeholder="Họ và tên" error={errors.fullName?.message}/>
                            <FormInput register={register("phone")} placeholder="SĐT" type="tel" error={errors.phone?.message}/>

                            <div className="relative w-full">
                                <FormInput register={register("dob")} placeholder="Ngày sinh (DD/MM/YYYY)" error={errors.dob?.message}/>
                                <label className="absolute right-4 top-1/2 -translate-y-[70%] cursor-pointer p-1">
                                    <Calendar className="text-gray-500 w-4 h-4 md:w-5 md:h-5"/>
                                    <input
                                        type="date"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={(e) => {
                                            if(!e.target.value) return;
                                            const date = new Date(e.target.value);
                                            const formatted = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
                                            const el = document.getElementsByName("dob")[0] as HTMLInputElement;
                                            if (el) {
                                                el.value = formatted;
                                                el.dispatchEvent(new Event('input', { bubbles: true }));
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                            <FormInput register={register("address")} placeholder="Địa chỉ" error={errors.address?.message}/>
                        </div>
                    </div>

                    {/* CỘT 3: NÚT SUBMIT */}
                    <div className="w-full max-w-md xl:w-1/3 flex flex-col items-center md:items-start">
                        <div className="w-full max-w-sm md:max-w-[380px] space-y-3 md:space-y-4">
                            <div className="hidden md:block md:h-[60px] pb-2"></div>
                            <div className={`relative ${errors.terms ? 'animate-shake' : ''}`}>
                                <div className="flex items-start gap-2 md:gap-3">
                                    <div className="relative flex items-center pt-1 shrink-0">
                                        <input {...register("terms")} type="checkbox" id="terms"
                                               className="peer h-5 w-5 md:h-6 md:w-6 cursor-pointer appearance-none rounded border-2 border-white bg-white checked:bg-white transition-all shadow-md"/>
                                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none font-bold text-base md:text-lg">✓</span>
                                    </div>
                                    <label htmlFor="terms" className="shopee-medium text-left leading-[1.2] cursor-pointer text-[10px] font-bold text-white md:text-[14px] [-webkit-text-stroke:0.5px_#701318] md:[-webkit-text-stroke:6px_#701318]" style={{paintOrder: 'stroke fill'}}>
                                        Tôi xác nhận tham gia chương trình trên cơ sở tôi đã đọc, hiểu, đồng ý với các Điều kiện và Điều khoản áp dụng, Chính sách bảo mật, và đồng ý cung cấp thông tin cá nhân để đăng ký tham gia chương trình
                                    </label>
                                </div>
                            </div>

                            <div className="relative mt-2 md:mt-0 w-full flex justify-center md:block">
                                <button type="submit" disabled={isLoading} className="relative w-full transition-transform active:scale-95 hover:scale-105 flex justify-center xl:justify-start">
                                    {isLoading ? <Loader2 className="animate-spin text-white w-10 h-10 my-2 md:my-5" /> :
                                        <Image src="/assets/btn-register-real.png" alt="Đăng ký" width={300} height={80} className="w-auto h-12 md:h-20 object-contain drop-shadow-md" priority/>}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>

            {status !== 'IDLE' && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-2xl flex flex-col items-center">
                        <button
                            onClick={() => setStatus('IDLE')}
                            className="absolute -top-15 -right-2 md:top-25 md:-right-10 text-white p-2 hover:scale-110 transition-transform"
                        >
                            <X size={40}/>
                        </button>

                        {status === 'SUCCESS' && (
                            <>
                                <Image src="/assets/code-sucess.webp" alt="Success" width={600} height={400}
                                       className="hidden md:block w-full h-auto object-contain"/>
                                <Image src="/assets/code-sucess-mobile.webp" alt="Success" width={400} height={500} className="md:hidden w-full h-auto object-contain" />
                            </>
                        )}

                        {status === 'USED' && (
                            <>
                                <Image src="/assets/code-used.webp" alt="Used" width={600} height={400} className="hidden md:block w-full h-auto object-contain" />
                                <Image src="/assets/code-used-mobile.webp" alt="Used" width={400} height={500} className="md:hidden w-full h-auto object-contain" />
                            </>
                        )}

                        {status === 'INVALID' && (
                            <>
                                <Image src="/assets/code-invalid.webp" alt="Invalid" width={600} height={400} className="hidden md:block w-full h-auto object-contain" />
                                <Image src="/assets/code-invalid-mobile.webp" alt="Invalid" width={400} height={500} className="md:hidden w-full h-auto object-contain" />
                            </>
                        )}

                        {status === 'EXCEED' && (
                            <>
                                <Image src="/assets/exceed-limit.webp" alt="Exceed" width={600} height={400} className="hidden md:block w-full h-auto object-contain" />
                                <Image src="/assets/exceed-limit-mobile.webp" alt="Exceed" width={400} height={500} className="md:hidden w-full h-auto object-contain" />
                            </>
                        )}

                        {status === 'ERROR' && (
                            <div className="bg-white p-6 rounded-lg text-red-600 font-bold">Lỗi hệ thống, vui lòng thử lại!</div>
                        )}
                    </div>
                </div>
            )}

            <BottomNavbar/>
        </div>
    );
}

function FormInput({placeholder, type = "text", register, error}: { placeholder: string, type?: string, register: any, error?: string }) {
    return (
        <div className={`relative group w-full mb-2 md:mb-4 transition-transform ${error ? 'animate-shake' : ''}`}>
            <input
                {...register}
                type={type}
                placeholder={placeholder}
                className={`shopee-bold relative w-full bg-white text-center text-gray-800 font-bold text-sm xl:text-base py-2 md:py-2.5 rounded-full border-2 md:border-[3px] shadow-sm focus:outline-none ${error ? 'border-yellow-400 bg-yellow-50' : 'border-[#a12828]'}`}
            />
        </div>
    )
}
