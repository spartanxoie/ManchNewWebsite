"use client"
import useObserver from '@/hooks/use-observer'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'

export default function HomeFourthSection() {
    const {Observer, isVisible } = useObserver()

  return (
    <section className='bg-primary relative'>
            <Observer className='absolute top-1/4'/>
        <div className={cn("fourthSectionWrapper container mx-auto text-center pb-3 opacity-0 translate-y-full transition duration-1000",{
            "opacity-100 translate-y-0": isVisible 
        })}>
            <h2 className='text-lg md:text-3xl font-medium'>Features & Benefits</h2>
            <p className='mt-4 text-2xl md:text-5xl'>Revolutionize Your <br /> Dispute Management</p>
            <Button className='rounded-full bg-[#FFF8D5] text-black mt-6 px-10 hover:bg-black hover:text-white transition-all duration-500'>Learn More</Button>
        </div>
    </section>
  )
}
