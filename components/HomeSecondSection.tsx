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
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
            Manch is built to ensure that you can resolve disputes within 45 days – without the need to step inside a courtroom.
        </h2>
        <p className='text-xl'>
            At Manch, we believe that resolving disputes should not be timeconsuming, expensive, or stressful. Our platform integrates cutting-edge technology with legal processes to offer arbitration, mediation, and conciliation services that are legally binding and efficient. Whether you are an individual, business, or institution.
        </p>
        <div>
            <Button className='bg-white text-black hover:bg-gray-200 py-2 px-4 text-xl'>
                Find Out How
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
