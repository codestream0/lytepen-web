"use client"

import { ArrowRight } from "lucide-react"
import React from "react"

interface GradientButtonProps {
  text?: string
  onClick?: () => void
}

const GradientButton: React.FC<GradientButtonProps> = ({ text = "Get Started Now", onClick }) => {
  return (
    <div onClick={onClick} className="flex gap-1 pl-1.5  bg-white rounded-full items-center hover:scale-101 transition-all duration-200 ">
     <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white">
        <ArrowRight size={16} />
    </span>
    <button
      className=" flex items-center rounded-full bg-linear-to-r from-yellow-400 to-orange-500 px-5 py-3  font-poppins text-[10px] text-[#151A35] shadow-md hover:shadow-lg "
    >

      {text}
    </button>
    </div>
  )
}

export default GradientButton;
