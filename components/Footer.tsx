// components/Footer.tsx
'use client'
import Link from "next/link";
import { ReactNode, useState } from "react";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

interface MenuItem {
  title: string;
  href: string;
}

interface SocialLink {
  name: ReactNode;
  href: string;
}

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { email, isSubscribed });
    setEmail('');
    setIsSubscribed(false);
  };

  const menuItems: MenuItem[] = [
    { title: "Rules & Clauses", href: "/rules-clauses" },
    { title: "Become An Arbitrator", href: "/become-an-arbitrator" },
    { title: "Join Us", href: "/join-us" },
  ];

  const resourceItems: MenuItem[] = [
    { title: "FAQ", href: "/faq" },
    { title: "Terms & Conditions", href: "/terms-conditions" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Blog", href: "/blog" },
  ];

  const Social: SocialLink[] = [
    { name: <FaFacebook />, href: "/" },
    { name: <FaWhatsapp />, href: "/" },
    { name: <FaTwitter />, href: "/" },
    { name: <FaLinkedin />, href: "/" },
  ];

  return (
    <div className="w-full px-4 pb-4 bg-purple-200">
      {/* <footer className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden max-w-screen-xl mx-auto"> */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between">
            {/* Contact Info */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
              <p className="text-gray-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@manch.live
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                123-456-7890
              </p>
              <p className="text-gray-700 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>500 Terry Francine Street, San Francisco, CA 94158</span>
              </p>
            </div>

            {/* Menu */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Menu</h3>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Resources</h3>
              <ul className="space-y-2">
                {resourceItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Get in touch!</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 opacity-0 absolute" 
                      checked={isSubscribed}
                      onChange={(e) => setIsSubscribed(e.target.checked)}
                    />
                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${isSubscribed ? 'bg-purple-600 border-purple-600' : 'border-gray-300 group-hover:border-purple-400'}`}>
                      {isSubscribed && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Yes, subscribe me to your newsletter.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-md"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              {Social.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-purple-600 hover:text-purple-800 transition duration-300 text-2xl bg-purple-100 p-3 rounded-full hover:shadow-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-600">
              <p>Manch © 2017-2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      {/* </footer> */}
    </div>
  );
};

export default Footer;