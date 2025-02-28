"use client";

import { useEffect, useRef } from "react";

interface RotatingPlaneProps {
  flag: boolean;
  heading?: string;
  desc?: string;
  svgIcon?: React.ReactNode;
}

const RotatingPlane = ({
  flag,
  heading,
  desc,
  svgIcon,
}: RotatingPlaneProps) => {
  const planeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (planeRef.current) {
        const rect = planeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the center of the div and the center of the viewport
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Calculate the distance from the viewport center
        const distanceFromCenter = elementCenter - viewportCenter;
        const maxTilt = 60; // Maximum tilt angle
        const maxDistance = windowHeight / 2;

        // Threshold to stop tilting when near the center
        const threshold = 20;

        // If within the threshold, stop rotating (keep it parallel)
        if (Math.abs(distanceFromCenter) < threshold) {
          planeRef.current.style.transform = `rotateX(0deg)`;
        } else {
          // Otherwise, calculate rotation angle normally
          const rotationAngle = (distanceFromCenter / maxDistance) * maxTilt;
          planeRef.current.style.transform = `rotateX(${rotationAngle}deg)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative bg-primary md:p-20 w-full flex justify-center items-center overflow-hidden"
      style={{ perspective: "500px" }} // Perspective set to 500px
    >
      <div
        ref={planeRef}
        className={`bg-[#FFF8D5] p-5 pt-8 md:p-10 w-4/5 flex flex-col ${
          flag ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-10 justify-center items-center shadow-lg rounded-xl`}
        style={{
          transformOrigin: "center",
          transition: "transform 0.4s ease-out", // Smooth transition
          backfaceVisibility: "hidden",
        }}
      >
        <div>
          <h1 className="text-lg md:text-5xl font-bold mb-4">{heading}</h1>
          <p className=" text-md md:text-lg">{desc}</p>
        </div>
        <div className="w-full h-[150px] lg:w-[600px] md:h-[300px] flex justify-center items-center bg-primary rounded-lg">
          <div className="flex justify-center items-center">
            {svgIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingPlane;
