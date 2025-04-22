import React from "react"

const Button = ({ text, className, onClick }: { text: string; className?: string; onClick?: (e: any) => void }) => {
  return (
    <button onClick={onClick} className={`px-6 py-2 md:px-7 md:py-3 lg:px-10 lg:py-5 rounded-md font-light text-sm md:text-lg lg:text-2xl ${className}`}>
      {text}
    </button>
  )
}

export default Button
