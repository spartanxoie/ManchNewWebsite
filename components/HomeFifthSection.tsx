"use client";
import useObserver from "@/hooks/use-observer";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import GetStarted from "@/public/svgs/GetStarted";

const HomeFifthSection = () => {
  const { Observer, isVisible } = useObserver();
  console.log({isVisible});
  
  return (
    <section className="bg-purple-200 relative">
      <Observer className="absolute top-1/4" />
      <div
        className={cn(
          "fourthSectionWrapper container mx-auto text-center py-10 opacity-0 translate-y-full transition duration-1000",
          {
            "opacity-100 translate-y-0": isVisible,
          }
        )}
      >
        <h2 className="text-lg md:text-3xl font-medium">Get Started</h2>
        <p className="mt-4 text-2xl md:text-5xl">
        Choose the Perfect Plan <br />
        For Your Needs
        </p>
        <Button className="rounded-full bg-primary border-[1px] border-black text-black mt-6 px-10 hover:bg-black hover:text-white transition-all duration-500">
          See Plans
        </Button>
      </div>

      <div className="w-full">
        <GetStarted className="mx-auto w-4/5 h-4/5 md:h-1/2 md:w-1/2" />
      </div>
    </section>
  );
};

export default HomeFifthSection;
