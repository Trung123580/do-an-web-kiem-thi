"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { boTuVung } from "@/utils/contanst";


export default function Slider() {
  const [items, setItems] = useState(boTuVung);
  console.log(items);
  const next = (id: number) => {
    const currentIndex = items.findIndex((item) => item.id === id);
    if (currentIndex !== -1) {
      const newItems = [...items];
      newItems.splice(currentIndex, 1);
      newItems.unshift(items[currentIndex]);
      setItems(newItems);
    }
  };

  const prev = (id: number) => {
    console.log(1);
    const currentIndex = items.findIndex((item) => item.id === id);
    if (currentIndex !== -1) {
      const newItems = [...items];
      const itemsNew = newItems[0];
      newItems.splice(0, 1);
      newItems.push(itemsNew);
      console.log(newItems);
      setItems(newItems);
    }
  };

  return (
    <div className="relative overflow-hidden h-[450px] w-full">
      <div className="absolute inset-0 -z-10">
        {items.map((item, idx) => (
          <div key={idx} className={clsx("absolute inset-0 transition-all duration-500", item.bgColor, idx === items.length - 1 ? "visible opacity-100" : "invisible opacity-0")} />
        ))}
      </div>

      <div className="relative mx-auto mt-12 h-[350px] perspective">
        <div className="relative h-full w-full px-12">
          {items.map((item, idx) => {
            const pos = idx + 1;
            let transform = "";
            let imgcss = "";
            let zIndex = 1;

            if (pos === items.length) {
              transform = "translate-x-0 scale-100 animate-slider";
              zIndex = 7;
            } else if (pos === items.length - 1) {
              transform = "-translate-x-[15%] scale-[0.85] bg-transparent shadow-sm bg-[#F5F5F5]";
              imgcss = "opacity-50";
              zIndex = 6;
            } else if (pos === items.length - 2) {
              transform = "-translate-x-[20%] scale-[0.85] bg-transparent shadow-sm";
              imgcss = "opacity-50";
              zIndex = 5;
            } else if (pos === items.length - 3) {
              transform = "-translate-x-[25%] scale-[0.85] bg-transparent shadow-sm";
              imgcss = "opacity-50";
              zIndex = 4;
            } else if (pos === items.length - 4) {
              transform = "-translate-x-[30%] scale-[0.85] bg-transparent shadow-sm";
              imgcss = "opacity-50";
              zIndex = 3;
            } else if (pos === items.length - 5) {
              transform = "-translate-x-[35%] scale-[0.85] bg-transparent shadow-sm";
              imgcss = "opacity-50";
              zIndex = 2;
            } else if (pos === items.length - 6) {
              transform = "-translate-x-[40%] scale-[0.85] bg-transparent shadow-sm";
              imgcss = "opacity-50";
              zIndex = 1;
            }

            return (
              <Link key={idx} href={`/giao-duc/ngon-ngu-ky-hieu/bo-tu-vung/${item.router}`} className={clsx("absolute right-0 w-2/3 transition-transform duration-700 h-full flex flex-row bg-white gap-7 p-4 rounded-2xl mx-11 ", transform, `${pos === items.length ? "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)]" : ""}`)} style={{ zIndex }}>
                <div className="w-full h-full basis-1/3">
                  <img src={item.src} alt="slider" className={clsx("object-cover h-full border-l border-white rounded-2xl", imgcss)} />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-start basis-2/3">
                  <h1 className="text-4xl font-normal">{item.title}</h1>
                  <p className="text-base mt-4">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <button onClick={() => prev(items[items.length - 1].id)} className=" absolute top-1/2 left-4 rotate-180 translate-y-[-50%] z-10">
          <svg className="w-8 h-8" viewBox="0 0 51.401 51.401">
            <path d="M32.246,0V33.178L0,31.953" transform="translate(0.094 25.276) rotate(-45)" fill="none" stroke="#A0A3A9" strokeWidth={7} strokeMiterlimit={10} />
          </svg>
        </button>
        <button onClick={() => next(items[items.length - 1].id)} className="absolute top-1/2 right-0 translate-y-[-50%] z-10">
          <svg className="w-8 h-8" viewBox="0 0 51.401 51.401">
            <path d="M32.246,0V33.178L0,31.953" transform="translate(0.094 25.276) rotate(-45)" fill="none" stroke="#A0A3A9" strokeWidth={7} strokeMiterlimit={10} />
          </svg>
        </button>
      </div>
    </div>
  );
}
