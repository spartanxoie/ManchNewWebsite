import Image from 'next/image'
import React from 'react'
import rulesAndClauses from "@/public/rulesAndClauses.png"

const page = () => {
  return (
    <section className='bg-primary flex flex-col-reverse md:flex-row px-3 py-5 md:px-10 md:py-16 gap-8'>
        <div className='flex flex-col md:w-[70%] gap-5'>
            <h1 className='text-4xl lg:text-5xl font-bold'>Rules & Clauses</h1>
            <p className='text-md md:text-lg lg:text-xl'>You can add an arbitration clause to your agreement todesignate Manch as the preferred forum for resolvingdisputes.</p>
            <h4 className='text-xl lg:text-2xl font-weight-600'>SAMPLE ARBITRATION CLAUSE</h4>
            <p className='text-md md:text-lg lg:text-xl'>Any dispute, controversy, or claim arising out of or relating tothis agreement, including its interpretation, breach,termination, or invalidity, shall be resolved by arbitrationadministered by Manch in accordance with its ArbitrationRules as applicable at the time a claim is made. The arbitralaward rendered shall be final and binding on the parties, andjudgment on the award may be enforced in accordance withthe provisions of the Arbitration and Conciliation Act, 1996, asamended.</p>
            <p className='text-md md:text-lg lg:text-xl'>Arbitrators shall be appointed by Manch. The place ofarbitration shall be Mumbai, Maharashtra, in India, and anyhearing may be conducted physically or virtually (via video ortelephone conference). The parties agree that no objectionshall be raised to the arbitral decision or award based on themode of hearing.</p>
            <p className='text-md md:text-lg lg:text-xl'>The parties consent to the electronic service of process, withservice to be made to the following email addresses: [PARTY1 EMAIL ADDRESS] and [PARTY 2 EMAIL ADDRESS]. Allcommunications, notices, and documents from Manch shallbe sent to these email addresses, including from the officialemail ID efile@manch.live. The parties shall ensure theseemail addresses are marked as “safe senders” to avoid anydisruption in communication and shall regularly check theirinbox, including &quot;spam&quot; or &quot;junk&quot; folders.</p>
            <div>
                <p className='text-md md:text-lg lg:text-xl'>Note for Incorporation</p>
                <p className='text-md md:text-lg lg:text-xl'>This sample arbitration clause is provided for generalinformational purposes only and should not be construed aslegal advice. The specific terms of the clause and itsapplication may vary based on individual agreements and circumstances</p>
                <p className='text-md md:text-lg lg:text-xl'>Parties are advised to consult with a qualified attorney toensure proper incorporation of this clause into their contractsand compliance with the Arbitration and Conciliation Act,1996, and other relevant Indian laws.For further assistance or inquiries on using Manch as yourpreferred arbitration forum, please email info@manch.live.</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <Image
                src={rulesAndClauses}
                alt='Rules And Clauses'
                width={400}
                height={400}
                className='h-96'
            />
        </div>
    </section>
  )
}

export default page
