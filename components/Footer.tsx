// components/Footer.tsx
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

interface MenuItem {
  title: string;
  href: string;
}

interface SocialLink {
  name: ReactNode;
  href: string;
}

const Footer = () => {
  const menuItems: MenuItem[] = [
    { title: "Rules & Clauses", href: "/rules-clauses" },
    { title: "Become An Arbitrator", href: "/become-an-arbitrator" },
    { title: "Join Us", href: "/join-us" },
  ];

  const resourceItems: MenuItem[] = [
    { title: "FAQ", href: "/faq" },
    { title: "Terms & Conditions", href: "/terms-conditions" },
  ];

  const Social: SocialLink[] = [
    { name: <FaFacebook />, href: "/" },
    { name: <FaWhatsapp />, href: "/" },
  ];

  return (
    <footer className="bg-purple-300 py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Contact Info */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-700">info@manch.live</p>
          <p className="text-gray-700">123-456-7890</p>
          <p className="text-gray-700">
            500 Terry Francine Street, San Francisco, CA 94158
          </p>
        </div>

        {/* Menu */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourceItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Get in touch!</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-700">
                Yes, subscribe me to your newsletter.
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/*Social Links*/}
        <div className="flex space-x-6">
          {" "}
          {/* Increased space between icons */}
          {Social.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-blue-500 hover:text-blue-700 transition duration-300 text-4xl" // Larger icons
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-600">
        <p>Manch 2025 Built on Wix Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
