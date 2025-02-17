import React from "react";
import { Button } from "./ui/button";

const HomeHero = () => {
  return (
    <section className="bg-primary flex flex-col-reverse lg:flex-row gap-12 py-6 px-8 lg:py-24 lg:px-28">
      <div className="flex flex-col justify-center gap-4 lg:w-[70%]">
        <h2
          className="font-bold text-[4rem]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Tired of Court Room Drama? <br />
          So are we!
        </h2>
        <p className="text-xl">
          Traditional court cases can take years to resolve. That’s why we
          created Manch, the go-to platform wheredisputes can be resolved in
          just 45-60 days.
        </p>
        <div>
          <Button className="bg-white text-black hover:bg-gray-200 py-2 px-4 text-xl">
            Book a Demo
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* <Image 
            src={heroHomeSvg}
            src="../public/hero.mp4"
            alt="work online"
            height={500}
            width={500}
        /> */}
        <video autoPlay loop muted playsInline>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeHero;
