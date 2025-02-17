import React from 'react'
import heroHomeSvg from '@/public/svgs/heroHomeSvg.svg'
import Image from 'next/image'

const HomeThirdSection = () => {
  return (
    <section className='bg-primary flex flex-col-reverse lg:flex-row gap-12 py-6 px-8 lg:py-24 lg:px-28'>
        <div className='flex justify-center items-center'>
            <Image 
                src={heroHomeSvg}
                alt="work online"
                height={500}
                width={500}
            />
        </div>
      <div className='lg:w-[70%]'>
        <h2 
            className='font-weight-600 text-[4rem]'
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
            Say goodbye to adjournments and courtroom chaos, and hello to quick resolutions, real-time updates, and peace of mind.
        </h2>
      </div>
      
    </section>
  )
}

export default HomeThirdSection
