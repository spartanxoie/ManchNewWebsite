import React from 'react'
import heroHomeSvg from '@/public/svgs/heroHomeSvg.svg'
import { Button } from './ui/button'
import Image from 'next/image'

const HomeSecondSection = () => {
  return (
    <section className='bg-primary flex flex-col-reverse lg:flex-row gap-12 py-6 px-8 lg:py-24 lg:px-28'>
      <div className='flex flex-col justify-center gap-4 lg:w-[70%]'>
        <h2 
            className='font-bold text-[4rem] leading-tight'
            style={{ fontSize: "clamp(1rem, 5vw, 3rem)" }}
        >
            Why Manch? Because Indian Courts have 4 crore pending cases...and counting. Resolve yours in 45 days!

        </h2>
        {/* <p className='text-xl'>
            At Manch, we believe that resolving disputes should not be timeconsuming, expensive, or stressful. Our platform integrates cutting-edge technology with legal processes to offer arbitration, mediation, and conciliation services that are legally binding and efficient. Whether you are an individual, business, or institution.
        </p> */}
        <div>
            <Button className='rounded-full bg-white text-black py-2 px-8 text-xl hover:bg-black hover:text-white transition-all duration-500'>
                SKIP THE BACKLOG
            </Button>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Image 
            src={heroHomeSvg}
            alt="work online"
            height={500}
            width={500}
        />
      </div>
    </section>
  )
}

export default HomeSecondSection
