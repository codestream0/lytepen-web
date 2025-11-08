"use client"


import Image, { type StaticImageData } from "next/image";
import GradientButton from "@/components/gradientButton";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "../../public/LYTE-PEN-1.png"
import journeyInService from "../../public/A journey in service 1.png"
import HighSchool from "../../public/forcados high school.png"
import waterBaby from "../../public/Water-Baby 1.png"
import ruwanBagaja from "../../public/ruwan bajaga 1.png"
import auraForAura from "../../public/aura-for-aura-selar.com.png" 
import unUsualGrief from "../../public/AnUnusualGrief 1.png"


export default function Home() {
  const [topEmail,setTopEmail] = useState("")
  
  return (
    <div className="min-h-screen px-20 py-4 bg-[#0A0E27]">

      <div className="flex justify-between items-center mb-20 px-5">
        <Image alt="Lytepen-logo" src={logo} width={90} height={20}/>
        <GradientButton />
      </div>

      <div className=" place-items-center " >
        <h1 className="font-galdeano text-white font-normal text-6xl ">Unlimited Books,</h1>
        <h1 className="font-galdeano text-white font-normal text-6xl "> Audiobooks, and more.</h1>
        <p className="text-[#FFB300] font-inter font-normal text-[20px] ">Starts at N0. Absolutely free!</p>
        <p className="text-[#B0B3C7] font-inter font-normal text-[12px] ">Ready to read or listen? Enter your email to join our early adopters</p>
        <div className=" gap-3 mt-16 mb-16 flex items-center  ">
          <Input 
            placeholder="email address"
            value={topEmail}
            onChange={(e)=>setTopEmail(e.target.value) }
            className="border-[#2A2F4A] text-[#CCCCCC] w-2/4 "
            required
          />
          <GradientButton/>      
        </div>
      </div>

      <div>
        <h1 className="font-galdeano text-white font-normal text-4xl" >Trending Now</h1>
        <div className=" grid grid-cols-3 items-center gap-24 mt-10 ">
          <TrendingBook src={journeyInService} description="A Journey in Service Ibrahim Babangida" alt="journey in service" />
          <TrendingBook src={HighSchool} description="The last day of Forcados high School" alt="The last day of Forcados high School" />
          <TrendingBook src={waterBaby} description="Water Baby" alt="waterBaby" />
          <TrendingBook src={ruwanBagaja} description="Ruwan Bagaja" alt="ruwanBagaja" />
          <TrendingBook src={auraForAura} description="Aura for Aura" alt="auraForAura" />
          <TrendingBook src={unUsualGrief} description="An unusual grief " alt="unUsualGrief" />
        </div>
      </div>
      
      {/* <div className="mt-16">
        <h1 className="font-galdeano text-white font-normal text-4xl">More Reasons to Join</h1>

      </div> */}
    </div>
  );
}

const TrendingBook=({src,description,alt}:{src: string | StaticImageData, description:string, alt:string})=>{
  return(
    <div>
      <Image className="h-[390px] mb-4 " src={src} alt={alt} />
      <p className="font-inter text-[#B0B3C7] font-medium text-[12px] text-center ">{description}</p>
    </div>
  )
}


