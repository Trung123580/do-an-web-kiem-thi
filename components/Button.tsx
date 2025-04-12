import React from "react"

const Button = ({ text, className, onClick }: { text: string; className?: string; onClick?: (e: any) => void }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-medium text-sm md:text-base ${className}`}>
      {text}
    </button>
  )
}

export default Button
