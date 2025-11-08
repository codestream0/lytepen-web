"use client"


import Image, { type StaticImageData } from "next/image";
import GradientButton from "@/components/gradientButton";
import { Input } from "@/components/ui/input";
import { ReactNode, useState } from "react";
import logo from "../../public/LYTE-PEN-1.png"
import journeyInService from "../../public/A journey in service 1.png"
import HighSchool from "../../public/forcados high school.png"
import waterBaby from "../../public/Water-Baby 1.png"
import ruwanBagaja from "../../public/ruwan bajaga 1.png"
import auraForAura from "../../public/aura-for-aura-selar.com.png" 
import unUsualGrief from "../../public/AnUnusualGrief 1.png"
import { Card } from "@/components/ui/card";
import { BookOpen, Globe, Headphones } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



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
      
      <div className="mt-16">
        <h1 className="font-galdeano text-white font-normal text-4xl">More Reasons to Join</h1>
        <div className="flex gap-16 mt-10">
          <ReasonCard icon={<BookOpen />} title="Multi-Device Access" description="Enjoy books and audiobooks on your phone, iPad, tablet,  computer, and more." />
          <ReasonCard icon={<Headphones/>} title="Offline Listening" description="Download books or audiobooks to read or listen to later" />
          <ReasonCard icon={<Globe/>} title="Global Content" description="Create profile for kids to read children's books or listen to local children's folklore in many local languages" />
        </div>
      </div>

      <div className="mt-24" >
        <h1 className="font-galdeano text-white font-normal text-4xl">Frequently Asked Questions</h1>
        <div className="mt-10" >
          <AccordionDemo/>
        </div>
      </div>
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


const ReasonCard=({icon,title,description}:{icon:ReactNode,title:string,description:string})=>{
  return(
    <Card className=" bg-[#151A35] min-w-[330px] px-7 py-10 border-[#2A2F4A]">
      <button className="  bg-[#FF9800] px-3 py-3 rounded-lg w-[50px] text-center " >{icon}</button>
      <h1 className="font-galdeano text-white font-normal text-[20px] " >{title}</h1>
      <p className="font-galdeano text-[#B0B3C7] font-normal text-[15px] " >{description}</p>
    </Card>
  )
}




const AccordionDemo=()=> {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full  rounded-lg "
      defaultValue="item-1"
    >
      <AccordionItem className="mb-20 border-none bg-[#151A35] px-7 items-center rounded-lg " value="item-1">
        <AccordionTrigger className="text-white font-normal font-inter text-[20px] ">What is Lytepen?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#B0B3C7] font-inter font-normal text-[15px] " >
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  )
}
