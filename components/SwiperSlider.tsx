"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
const images = [
  {
    id: 1,
    src: "/image/slider-1.png",
    bgColor: "bg-red-500",
    title: "Thiên nhiên",
    description: "Bộ từ vựng ngôn ngữ ký hiệu về thiên nhiên",
  },
  {
    id: 2,
    src: "/image/banner-2.png",
    bgColor: "bg-blue-500",
    title: "Quốc gia",
    description: "Bộ từ vựng ngôn ngữ ký hiệu tên các Quốc gia trên thế giới",
  },
  {
    id: 3,
    src: "/image/banner-3.png",
    bgColor: "bg-green-500",
    title: "Bảng chữ cái",
    description: "Bộ từ vựng ngôn ngữ ký hiệu bảng chữ cái Tiếng Việt",
  },
  {
    id: 4,
    src: "/image/banner-4.png",
    bgColor: "bg-purple-500",
    title: "Ẩm thực",
    description: "Bộ từ vựng ngôn ngữ ký hiệu ẩm thực thông dụng bao gồm 30 từ vựng",
  },

  {
    id: 5,
    src: "/image/banner-4.png",
    bgColor: "bg-pink-500",
    title: "Động vật",
    description: "Bộ từ vựng ngôn ngữ ký hiệu các loài động vật bao gồm 30 từ vựng thông dụng",
  },
  {
    id: 6,
    src: "/image/banner-4.png",
    bgColor: "bg-pink-500",
    title: "Nghề nghiệp",
    description: "Bộ từ vựng ngôn ngữ ký hiệu về nghề nghiệp",
  },
];

export default function Slider() {
  const [items, setItems] = useState(images);
console.log(items)
  const next = (id: number) => {
    const currentIndex = items.findIndex(item => item.id === id);
    if (currentIndex !== -1) {
      const newItems = [...items];
      newItems.splice(currentIndex, 1);
      newItems.unshift(items[currentIndex]);
      setItems(newItems);
    }
  };

  const prev = (id: number) => {
    console.log(1)
    const currentIndex = items.findIndex(item => item.id === id);
    if (currentIndex !== -1) {
      const newItems = [...items];
      const itemsNew = newItems[0]
      newItems.splice(0, 1);
      newItems.push(itemsNew);
      console.log(newItems)
      setItems(newItems);
    }
  };

  return (
    <div className="relative overflow-hidden h-[450px] w-full">
      <div className="absolute inset-0 -z-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={clsx(
              "absolute inset-0 transition-all duration-500",
              item.bgColor,
              idx === items.length - 1 ? "visible opacity-100" : "invisible opacity-0"
            )}
          />
        ))}
      </div>

      <div className="relative mx-auto mt-12 h-[350px] perspective">
        <div className="relative h-full w-full px-12">
          {items.map((item, idx) => {
            const pos = idx + 1;
            let transform = "";
            let zIndex = 1;

            if (pos === items.length) {
              transform = "translate-x-0 scale-100 animate-slider";
              zIndex = 7;
            } else if (pos === items.length - 1 ) {
              transform = "-translate-x-[15%] scale-[0.85] bg-transparent shadow-sm";
              zIndex = 6;
            } else if (pos === items.length - 2) {
              transform = "-translate-x-[20%] scale-[0.85] bg-transparent shadow-sm";
              zIndex = 5;
            } else if (pos === items.length - 3) {
              transform = "-translate-x-[25%] scale-[0.85] bg-transparent shadow-sm";
              zIndex = 4;
            } else if (pos === items.length - 4) {
              transform = "-translate-x-[30%] scale-[0.85] bg-transparent shadow-sm";
              zIndex = 3;
            } else if (pos === items.length - 5) {
              transform = "-translate-x-[35%] scale-[0.85] bg-transparent shadow-sm";
              zIndex = 2;
            } else if (pos === items.length - 6) {
              transform = "-translate-x-[40%] scale-[0.85] bg-transparent shadow-sm";
              zIndex = 1;
            }

            return (
              <motion.div
                key={idx}
                className={clsx(
                  "absolute right-0 w-2/3 overflow-hidden transition-transform duration-700 h-full grid grid-cols-2 bg-white gap-7 p-4 rounded-2xl mx-11 ",
                  transform,
                  `${pos === items.length ? "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)]" : ""}`
                )}
                style={{ zIndex }}
              >
                <img
                  src={item.src}
                  alt="slider"
                  className="object-cover h-full border-l border-white rounded-2xl"
                />
                <div className="w-full h-full flex flex-col justify-center items-start">
                  <h1 className="text-4xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={() => prev(items[items.length - 1].id)}
          className=" absolute top-1/2 left-4 rotate-180 translate-y-[-50%] z-10"
        >
          <svg className="w-8 h-8" viewBox="0 0 51.401 51.401">
            <path
              d="M32.246,0V33.178L0,31.953"
              transform="translate(0.094 25.276) rotate(-45)"
              fill="none"
              stroke="#A0A3A9"
              strokeWidth={7}
              strokeMiterlimit={10}
            />
          </svg>
        </button>
        <button
          onClick={() => next(items[items.length - 1].id)}
          className="absolute top-1/2 right-0 translate-y-[-50%] z-10"
        >
          <svg className="w-8 h-8" viewBox="0 0 51.401 51.401">
            <path
              d="M32.246,0V33.178L0,31.953"
              transform="translate(0.094 25.276) rotate(-45)"
              fill="none"
              stroke="#A0A3A9"
              strokeWidth={7}
              strokeMiterlimit={10}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
