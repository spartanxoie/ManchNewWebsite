"use client";
import useObserver from "@/hooks/use-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface Proffesional {
  desc: string;
  img: string;
  name: string;
  role: string;
}

interface company {
  image: string;
  alt: string;
}

const data: Proffesional[] = [
  {
    desc: "Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "Lee Berger",
    role: "CEO of TechCorp",
  },
  {
    desc: "Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "Michael Brown",
    role: "CTO of NextGen Solutions",
  },
  {
    desc: "Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "Jane Smith",
    role: "Founder of Innovate Inc.",
  },
];

const companies: company[]= [
  {
    image: "https://static.wixstatic.com/media/a4c183_fa96d65a31d84048b9d19952782354b2~mv2.jpg/v1/fit/w_297,h_95,q_90,enc_avif,quality_auto/a4c183_fa96d65a31d84048b9d19952782354b2~mv2.jpg",
    alt:"Gamerance",
  },
  {
    image: "https://static.wixstatic.com/media/a4c183_950cd97ac3d74c728470d150b22f496a~mv2.jpg/v1/fit/w_1341,h_428,q_90,enc_avif,quality_auto/a4c183_950cd97ac3d74c728470d150b22f496a~mv2.jpg",
    alt:"Airy Veil",
  },
  {
    image: "https://static.wixstatic.com/media/a4c183_863d101643954c1d9519d507f5092dfd~mv2.jpg/v1/fit/w_1341,h_428,q_90,enc_avif,quality_auto/a4c183_863d101643954c1d9519d507f5092dfd~mv2.jpg",
    alt:"3TERNET",
  },
  {
    image: "https://static.wixstatic.com/media/a4c183_52d8dd45a87c4380aa37041e5ec74c85~mv2.jpg/v1/fit/w_1341,h_428,q_90,enc_avif,quality_auto/a4c183_52d8dd45a87c4380aa37041e5ec74c85~mv2.jpg",
    alt:"Datox.Ai",
  },
  {
    image: "https://static.wixstatic.com/media/a4c183_02dfde9ebe6642ab9e5cba6cdd60d9b3~mv2.jpg/v1/fit/w_1341,h_428,q_90,enc_avif,quality_auto/a4c183_02dfde9ebe6642ab9e5cba6cdd60d9b3~mv2.jpg",
    alt:"Helveior",
  },
  {
    image: "https://static.wixstatic.com/media/a4c183_79b0e0d67a6440d9a65fa49a02b910e9~mv2.jpg/v1/fit/w_1341,h_428,q_90,enc_avif,quality_auto/a4c183_79b0e0d67a6440d9a65fa49a02b910e9~mv2.jpg",
    alt:"Ocean",
  },
  {
    image: "https://static.wixstatic.com/media/a4c183_e55a0bef05134f76899262b71dfb3120~mv2.jpg/v1/fit/w_1341,h_428,q_90,enc_avif,quality_auto/a4c183_e55a0bef05134f76899262b71dfb3120~mv2.jpg",
    alt:"Gasparyan",
  },
]

const HomeSixthSection = () => {
  const { Observer, isVisible } = useObserver();

  return (
    <section className="bg-purple-800 relative px-2 md:px-10">
      <Observer className="absolute top-1/4" />
      <div
        className={cn(
          "fourthSectionWrapper container text-white mx-auto text-center py-10 opacity-0 translate-y-full transition duration-1000",
          {
            "opacity-100 translate-y-0": isVisible,
          }
        )}
      >
        <h2 className="text-lg md:text-3xl font-medium">Testimonials</h2>
        <p className="mt-4 text-2xl md:text-5xl">
          Real Feedback from Satisfied Customers
        </p>
      </div>

      <div
        className={cn(
          "fourthSectionWrapper container mx-auto py-10 opacity-0 translate-y-full transition duration-1000",
          {
            "opacity-100 translate-y-0": isVisible,
          }
        )}
      >
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-between">
          {data.map((profile, id) => (
            <div
              key={id}
              className="rounded-xl p-8 w-full lg:w-[30%] bg-purple-400"
            >
              <p className="text-md md:text-2xl lg:text-xl xl:text-2xl">
                &quot;{profile.desc}&quot;
              </p>
              <div className="flex items-center gap-5 mt-5">
                <div>
                  <Image
                    src={profile.img}
                    alt="profile pic"
                    width={50}
                    height={50}
                    className="rounded-full h-16 w-16"
                  />
                </div>
                <div>
                  <p className="text-md md:text-lg">{profile.name}</p>
                  <p className="text-sm md:text-md">{profile.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "fourthSectionWrapper container text-white mx-auto text-center py-10 opacity-0 translate-y-full transition duration-1000",
          {
            "opacity-100 translate-y-0": isVisible,
          }
        )}
      >
        <h2 className="text-lg md:text-3xl font-medium">Testimonials</h2>
        <p className="mt-4 text-2xl md:text-5xl">
          Real Feedback from Satisfied Customers
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <InfiniteMovingCards
            items={companies}
            direction="right"
            speed="slow"
        />
      </div>

    </section>
  );
};

export default HomeSixthSection;
