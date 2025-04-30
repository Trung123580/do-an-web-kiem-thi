'use client';
import { bangChuCai } from "@/utils/contanst";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
    const router = useRouter();
    const [currentName, setCurrentName] = useState<any>([]);
    const handleName = (id: string) => {
        const chuCai = bangChuCai.find((item) => item.id === id);
        if (chuCai) {
            setCurrentName((prev: any) => [...prev, chuCai]);
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                    <div className={`bg-[#f9fafb] rounded-xl space-y-8 p-4`}>
                        <h1 className="text-5xl font-bold text-[#3A63ED] text-center mb-6">Tên của bạn là?</h1>
                        <div className="flex justify-between rounded-lg bg-[#F2F2F3] p-8 border-4 border-[#CFD1D4] gap-4">
                            <div className="overflow-x-auto py-1 flex max-w-[85%]">
                                {currentName.map((item: any, index: number) => {
                                    return <img key={index} src={`/image/${item.id}.png`} alt="" className="cursor-pointer object-cover md:w-[120px] w-[60px] md:h-[120px] h-[60px]" />;
                                })}
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="" onClick={() => router.push('game/go-game')}>
                                    <img className="md:h-[120px] h-[60px] object-contain" src="/image/buttonArrow.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 md:grid-cols-9 gap-4 justify-center mt-20">
                            {bangChuCai.map((item, index) => {
                                return <img onClick={() => handleName(item.id)} key={index} src={`/image/${item.id}.png`} alt="" className="cursor-pointer object-cover w-full h-full" />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
