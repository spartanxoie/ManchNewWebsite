import RotatingPlane from '@/components/AnimatedPlane'
import HomeFourthSection from '@/components/HomeFourthSection'
import HomeHero from '@/components/HomeHero'
import HomeSecondSection from '@/components/HomeSecondSection'
import HomeThirdSection from '@/components/HomeThirdSection'
import CaseManagementIcon from '@/public/svgs/CaseManagementSvg'
import SecurityCompliance from '@/public/svgs/SecurityCompliance'
import ProjectPlanningScheduling from '@/public/svgs/ProjectPlanningScheduling'
import React from 'react'
import HomeFifthSection from '@/components/HomeFifthSection'
import HomeSixthSection from '@/components/HomeSixthSection'

const page = () => {
  return (
    <div>
      <HomeHero />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection/>
      <RotatingPlane
        flag={true} 
        heading="Case Management"
        desc="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
        svgIcon={<CaseManagementIcon  className="w-[80%] h-[80%] md:w-full md:h-full object-contain" />}
      />
      <RotatingPlane
        flag={false} 
        heading="Security and Compliance"
        desc="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
        svgIcon={<SecurityCompliance  className="w-[80%] h-[80%] md:w-full md:h-full object-contain" />}
      />
      <RotatingPlane
        flag={false} 
        heading="Security and Compliance"
        desc="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
        svgIcon={<ProjectPlanningScheduling  className="w-[80%] h-[80%] md:w-full md:h-full object-contain" />}
      />
      <HomeFifthSection />
      <HomeSixthSection />
    </div>
  )
}

export default page
