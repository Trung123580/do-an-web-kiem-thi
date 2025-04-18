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
        className={`gap-2 h-[100px] flex ${isOpen ? 'rounded-tl-lg rounded-tr-lg':'rounded-lg'}  p-6 bg-gray-100  justify-between items-center w-full text-left`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="text-2xl transition-transform duration-200" style={{
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
        }}>
          +
        </span>
      </button>
      <div className={`p-6 bg-gray-100  text-gray-600 transition-all duration-200 ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
} 