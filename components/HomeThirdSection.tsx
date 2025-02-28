
import React from 'react'

const HomeThirdSection = () => {
  return (
    <section className='bg-primary flex flex-col gap-12 py-6 px-8 lg:py-24 lg:px-28'>
      {/* Flex container for Mediation and Arbitration sections */}
      <div className='flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto'>

        {/* Arbitration Section */}
        <div className='bg-[#FFF8D5] p-6 md:p-8 rounded-3xl flex-1'>
          <h1 className='text-[#d5a9ff] text-2xl md:text-3xl lg:text-4xl font-bold'>
            Online Arbitration:
          </h1>

          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl my-4 md:my-5'>
            Influencer collab turned ‘fake’? Reclaim your ‘brand’ without ‘viral’ shame.
          </h2>
          
          <p className='text-md md:text-lg lg:text-xl'>
            Marwari business partnership gone bad? Save vyapar & dosti! Bengali para land dispute? Mediate, dont jhamela! Speak English, Hindi, Marathi - mediators who get your vibe! Just Tap, Talk & Done!
          </p>
        </div>

        {/* Mediation Section */}
        <div className='bg-[#FFF8D5] p-6 md:p-8 rounded-3xl flex-1'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
            Property Battles?
          </h1>
          <h1 className='text-[#d5a9ff] text-2xl md:text-3xl lg:text-4xl font-bold'>
            Online Mediation:
          </h1>

          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl my-4 md:my-5'>
            Sibling feud over Dad’s flat? Divide assets, not relationships
          </h2>
          
          <p className='text-md md:text-lg lg:text-xl'>
            No ‘awkward calls’ - resolve and settle via chat. Just Tap, Talk and Done
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeThirdSection;