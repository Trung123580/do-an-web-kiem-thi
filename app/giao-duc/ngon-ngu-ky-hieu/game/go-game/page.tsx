"use client";
import { game } from "@/utils/contanst";
import { div } from "framer-motion/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [arrAnswer, setArrAnswer] = useState<any>(null);
    const [isCorrect, setIsCorrect] = useState<number>(0);
    const [pointer, setPointer] = useState<number>(0);
    useEffect(() => {
        const level = game.find((item: any) => item.level === currentLevel);
        if (!level) {
            setArrAnswer(null);
        }
        setArrAnswer(level);
    }, [currentLevel]);
    const handleAnswer = (idTrue: number) => {
        setIsCorrect(idTrue);
        if (idTrue === arrAnswer?.idTrue) {
            setPointer((prev: number) => prev + 1);
        }
        setTimeout(() => {
            setCurrentLevel((prev: number) => prev + 1);
            setIsCorrect(0);
        }, 1000);
    };
    console.log(pointer);
    return (
        <div className=" bg-gray-50 pt-28 pb-8">
            <div className="container mx-auto px-4 max-w-7xl flex justify-center flex-col items-center">
                {!arrAnswer && (
                    <>
                        <h1 className="text-5xl font-bold text-center mb-6">
                            Chúc mừng bạn đã đạt <span className="text-[#3A63ED]">{pointer}/8</span> điểm xuất sắc!
                        </h1>
                        <img src="/image/game-done.png" alt="" />
                        <ul className="flex justify-center flex-col w-full space-y-6 text-gray-600 text-base mt-11 mb-11">
                            <li className="flex text-lg font-bold text-[#3A63ED] items-center justify-center gap-2 group">
                                <Link href={"/giao-duc/ngon-ngu-ky-hieu"} className="group-hover:-translate-x-1 transition-all duration-1000">
                                    Tham gia học ngôn ngữ ký hiệu để biết thêm nhiều từ vựng mới
                                </Link>
                                <img className="group-hover:translate-x-1 transition-all duration-1000" src="/image/arrow2.png" alt="" />
                            </li>
                        </ul>
                    </>
                )}
                {arrAnswer && (
                    <>
                        <section className="w-full max-w-[630px] ">
                            <video src={arrAnswer?.video && `/image/${arrAnswer?.video}.mp4`} className="w-full h-full object-cover aspect-video rounded-2xl" autoPlay={true} loop playsInline />
                        </section>
                        <div className="text-sm font-normal text-[#A0A3A9] mt-2">Nội dung được hỗ trợ bởi QIPEDC</div>
                        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                            <div className={`bg-[#f9fafb] rounded-xl space-y-8 p-4 mt-5`}>
                                <h1 className="md:text-5xl text-3xl font-bold text-center mb-6  tracking-[2%]">{arrAnswer?.title}</h1>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-center mt-9">
                                    {arrAnswer &&
                                        arrAnswer?.array &&
                                        arrAnswer?.array.map((item: any, index: number) => (
                                            <div onClick={() => handleAnswer(item.id)} key={index} className={`${isCorrect === arrAnswer?.idTrue && isCorrect !== 0 && isCorrect === item.id ? `after:bg-[#00fe055e] after:content-[''] !border-[#00fe05]` : isCorrect !== arrAnswer?.idTrue && isCorrect !== 0 && isCorrect === item.id ? `after:bg-[#ff000094] after:content-[''] !border-[red]` : ""} cursor-pointer aspect-[1/1]  h-full max-h-[240px] overflow-hidden relative border-4 border-transparent hover:border-[#72a7ff4a] hover:shadow-lg shadow-blue-500/40  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:opacity-50 transition-all duration-300 rounded-2xl`}>
                                                <img src={`/image/${item.name}.jpg`} alt="" className="cursor-pointer object-cover w-full h-full" />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default page;
