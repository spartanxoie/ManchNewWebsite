import React from "react";
import { Button } from "./ui/button";
import HeroHomeSvg from "@/public/svgs/HeroHome";
import barchart from "@/public/barchart.png"
import piechart from "@/public/piechart.png"
import mountainchart from "@/public/mountainchart.png"
import zigzagchart from "@/public/zigzagchart.png"
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="bg-primary flex flex-col lg:flex-row gap-12 py-6 px-8 lg:py-24 lg:px-16 xl:px-28">
      <div className="flex flex-col justify-center gap-4 lg:w-[70%]">
        <h2
          className="font-bold text-[4rem]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Tired of Court Room Drama? <br />
          So are we!
        </h2>
        <p className="text-xl">
        Resolve Client/Vendor Disputes in 45-90 days!

        Court-Approved Solutions Without Getting Into Court!
        </p>
        <div>
          <Button className="rounded-full bg-white text-black py-2 px-8 text-sm md:text-xl hover:bg-black hover:text-white transition-all duration-500">
            SAVE YOUR BUSINESS NOW
          </Button>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <HeroHomeSvg width={500} />
        <div className="">
          <Image
            src={barchart}
            alt="zigzagChart"
            width={200}
            height={200}
            className="w-28 md:w-40 absolute top-20 -right-3 md:top-8 md:-right-1 lg:top-8 lg:-right-10 animate-float"
          />
          <Image
            src={zigzagchart}
            alt="zigzagChart"
            width={200}
            height={200}
            className="w-20 md:w-40 absolute top-20 left-2 md:top-8 lg:top-1 lg:-left-3 animate-float"
          />
          <Image
            src={mountainchart}
            alt="zigzagChart"
            width={200}
            height={200}
            className="w-20 md:w-40 absolute bottom-36 -left-2 md:bottom-16 lg:bottom-8 lg:-left-10 animate-float"
          />
          <Image
            src={piechart}
            alt="zigzagChart"
            width={200}
            height={200}
            className="w-28 md:w-40 absolute bottom-28 -right-3 md:bottom-16 md:-right-1 lg:bottom-8 lg:-right-10 animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;


// lg:w-2/5 absolute -top-10 right-5 lg:top-1 lg:-right-20