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
import Link from "next/link";



export default function Home() {
  const [topEmail,setTopEmail] = useState("")
  const [bottomEmail,setBottomEmail] = useState("")
  
  return (
    <div>
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
          <AccordionDemo id="item-1" title="What is Lytepen?" description="Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." />
          <AccordionDemo id="item-2" title="How much does Lytepen cost?" description="Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." />
          <AccordionDemo id="item-3" title="Which device can I use Lytepen on?" description="Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." />
          <AccordionDemo id="item-4" title="If Lytepen is free, how do I earn as an author or audiobook creator?" description="Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." />
          <AccordionDemo id="item-5" title="Is Lytepen good for kids" description="Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." />

        </div>
      </div>

      <div className="place-items-center mt-14 " >
        <p className="text-[#B0B3C7] font-inter text-[12px]  ">Ready to read or listen? Enter your email to join our early adopters</p>  
        <div className=" ml-10 gap-3 mt-6 mb-16 flex ">
          <Input 
            placeholder="email address"
            value={bottomEmail}
            onChange={(e)=>setBottomEmail(e.target.value) }
            className="border-[#2A2F4A] text-[#CCCCCC] w-2/4 "
            required
          />
          <GradientButton />    
        </div>
      </div>
    </div>
    <div>
      <Footer/>
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


const AccordionDemo=({title,description,id}:{title:string,description:string,id:string})=> {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg "
      
    >
      <AccordionItem className="mb-7 border-none bg-[#151A35] px-7 items-center rounded-lg " value={id}>
        <AccordionTrigger className="text-white font-normal font-inter text-[20px] ">{title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#B0B3C7] font-inter font-normal " >
            {description}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


function Footer () {
  return(
    <div className="bg-[#151A35] min-h-72 px-20 py-7 " >
      <h1 className="text-white font-inter font-semibold text-center " >Questions? Contact Us.</h1>
      <div className="text-[#B0B3C7] mb-12 mt-14 ml-5 grid grid-cols-3 gap-3 font-inter font-normal text-[12px] " >
        <Link href="#">FAQs</Link>
        <Link href="#"> Help Center </Link>
        <Link href="#">Account</Link>
         <Link href="#">For Investors</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Media Center</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Corporate Information</Link>
        <Link href="#">Terms of Use</Link>
        {/* <Link href="#">English</Link> */}
    </div>
      <p className="text-[#B0B3C7] font-inter text-[11px] text-center " >Lytepen Technologies Limited</p>
    </div>
  )
}