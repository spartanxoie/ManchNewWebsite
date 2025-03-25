'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import manchLogo from "@/public/manchLogo.png"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky z-20 top-0 bg-background/50 backdrop-blur bg-[#fff9db] border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        
        <div className="w-full lg:w-[20%] flex justify-between items-center">
          <div>
            {/* Logo */}
            <Link href="#" className="flex items-center space-x-3">
              <Image
                src={manchLogo}
                height={70}
                width={190}
                alt="Flowbite Logo"
              />
              {/* <span className="text-2xl font-semibold dark:text-white">Flowbite</span> */}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-500 dark:text-gray-400"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          // className={`${
          //   isMobileMenuOpen ? "block" : "hidden"
          // } w-full lg:flex md:w-auto lg:items-center`}
        >
          <ul className="hidden lg:flex flex-col lg:flex-row lg:space-x-8 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent p-4 lg:p-0 text-md">
            <li><Link href="/rules-and-clauses" className="nav-link">RULES & CLAUSES</Link></li>
            <li className="cursor-pointer">
              <HoverCard>
                <HoverCardTrigger>ADR SERVICES</HoverCardTrigger>
                <HoverCardContent>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>ARBITRATION</HoverCardTrigger>
                        <HoverCardContent className="ml-[722px]">
                          <ul className="flex flex-col gap-2">
                            <li className="">What is Arbitration</li>
                            <li>Expedited Procedure Rules</li>
                            <li>Arbitration Rules</li>
                            <li>Arbitration Request Form</li>
                            <li>Arbitration Procedures</li>
                            <li>Emergency Arbitrators</li>
                            <li>Expedited Procedures</li>
                            <li>Arbitration FAQs</li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>MEDIATION</HoverCardTrigger>
                        <HoverCardContent className="ml-[722px]">
                          <ul className="flex flex-col gap-2">
                            <li className="">What is Mediation</li>
                            <li>Mediation Rules</li>
                            <li>Arbitration Rules</li>
                            <li>Mediation Request Form</li>
                            <li>Mediation Fees</li>
                            <li>Mediation FAQs</li>
                            <li>Emergency Mediation Program</li>
                            <li>Mediation Procedure</li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>MODEL ADR CLAUSES</li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>A-LA-CARTE SERVICES</HoverCardTrigger>
                        <HoverCardContent className="ml-[650px]">
                          <ul className="flex flex-col gap-2">
                            <li className="">Selection & Appointment Services</li>
                            <li>Arbitration & Mediation Logistics</li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>ONLINE DISPUTE RESOLUTION</HoverCardTrigger>
                        <HoverCardContent className="ml-[580px]">
                          <ul className="flex flex-col gap-2">
                            <li className="">Online Arbitration</li>
                            <li className="">Online Mediation</li>
                            <li>Conciliation</li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li><Link href="#" className="nav-link">ABOUT</Link></li>
            <li>
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">RESOURCES</HoverCardTrigger>
                <HoverCardContent>
                  <ul className="flex flex-col gap-2">
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li>Blogs</li>
                    <li>FAQs</li>
                    <li><Link href="/odr-use-cases">ODR Use Cases</Link></li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>ADR Glossary</HoverCardTrigger>
                        <HoverCardContent className="ml-[580px]">
                          <ul className="flex flex-col gap-2">
                            <li className="">Arbitration</li>
                            <li className="">Arbitrator</li>
                            <li>Award</li>
                            <li>Binding Decision</li>
                            <li>Conflict Resolution</li>
                            <li>Dispute Resolution</li>
                            <li>E-Fililng</li>
                            <li>E-Mediation</li>
                            <li>Enforceable Award</li>
                            <li>Escalation Clauses</li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>Academy</li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="cursor-pointer">
              <HoverCard>
                <HoverCardTrigger>ARBITRATORS</HoverCardTrigger>
                <HoverCardContent>
                  <ul className="flex flex-col gap-2">
                    <li>Apply to be an Arbritator</li>
                    <li>Apply to be an Mediator</li>
                    <li>Code of Conduct</li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li><Link href="#" className="nav-link">LOGIN</Link></li>
          </ul>
        </div>
      </div>

        {/* Navbar for the Mobile */}
        {isMobileMenuOpen && 
          <Accordion type="single" collapsible className="w-full lg:hidden">

          <div className="py-2"><Link href="/rules-and-clauses" className="px-5 text-lg">RULES & CLAUSES</Link></div>
          <hr />

          <AccordionItem value="item-1">
            <AccordionTrigger>ADR SERVICES</AccordionTrigger>
            <AccordionContent>
              ARBITRATION
            </AccordionContent>
            <AccordionContent>
              MEDIATION
            </AccordionContent>
            <AccordionContent>
              MODEL ADR CLAUSES
            </AccordionContent>
            <AccordionContent>
              A-LA-CARTE SERVICES
            </AccordionContent>
            <AccordionContent>
              ONLINE DISPUTE RESOLUTION
            </AccordionContent>
          </AccordionItem>

          <div className="py-2"><Link href="/" className="px-5 text-lg">ABOUT</Link></div>
          <hr />

          <AccordionItem value="item-2">
            <AccordionTrigger>RESOURCES</AccordionTrigger>
            <AccordionContent>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </AccordionContent>
            <AccordionContent>
              Blogs
            </AccordionContent>
            <AccordionContent>
              FAQs
            </AccordionContent>
            <AccordionContent>
              <Link href="/odr-use-cases">ODR Use Cases</Link>
            </AccordionContent>
            <AccordionContent>
              ADR Glossory
            </AccordionContent>
            <AccordionContent>
              Academy
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>ARBITRATORS</AccordionTrigger>
            <AccordionContent>
              Apply to be an Arbitrator
            </AccordionContent>
            <AccordionContent>
              Apply to be an Mediator
            </AccordionContent>
            <AccordionContent>
              Code of Conduct
            </AccordionContent>
          </AccordionItem>

          <div className="py-2"><Link href="" className="text-lg px-5">LOGIN</Link></div>

        </Accordion>
        }
    </nav>
  );
};

export default Navbar;

// Tailwind Utility Classes for Better Readability
// const navLinkStyles = "block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent";
// const dropdownItemStyles = "block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600";
