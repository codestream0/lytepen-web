"use client"

import { ArrowRight } from "lucide-react"
import React from "react"

interface GradientButtonProps {
  text?: string
  onClick?: () => void
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text = "Get Started Now",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        group flex items-center gap-2 h-9 min-w-44 rounded-full 
        bg-linear-to-r from-yellow-400 to-orange-500
        font-poppins text-[10px] text-[#151A35]
        shadow-md hover:shadow-lg transition-all duration-200
      "
    >
      <span
        className="
          flex items-center justify-center h-9 px-3 w-14 rounded-full bg-white
          opacity-0 scale-75 -translate-x-2
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
          transition-all duration-300
        "
      >
        <ArrowRight size={20} className="text-blue-900 font-extrabold " />
      </span>

      <span className="pr-5 py-3" >{text}</span>
    </button>
  )
}

export default GradientButton
