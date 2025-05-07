'use client'
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button 
        className={`gap-2 h-[100px] flex ${isOpen ? 'rounded-tl-lg rounded-tr-lg bg-[#D8E0FB]':'rounded-lg bg-gray-100'}  p-6   justify-between items-center w-full text-left`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-normal">{question}</h3>
        <span className="text-3xl transition-transform duration-200" style={{
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
        }}>
          +
        </span>
      </button>
      <div className={`pt-0 text-2xl font-normal p-6 bg-[#D8E0FB]  text-[#111827] transition-all duration-200 ${isOpen ? 'block rounded-bl-lg rounded-br-lg' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
} 