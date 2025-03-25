import React from "react";

interface PrivacySection {
  title: string;
  content: string;
}

const privacySections: PrivacySection[] = [
  {
    title: "A Legal Disclaimer",
    content:
      "The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of a Privacy Policy. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific privacy policies you wish to establish between your business and your customers and visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Privacy Policy.",
  },
  {
    title: "Privacy Policy - The Basics",
    content:
      "Having said that, a privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, processes, and manages the data of its visitors and customers. It usually also includes a statement regarding the website’s commitment to protecting its visitors’ or customers’ privacy, and an explanation about the different mechanisms the website is implementing in order to protect privacy.",
  },
  {
    title: "Different Jurisdictions",
    content:
      "Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. You are responsible to make sure you are following the relevant legislation to your activities and location.",
  },
  {
    title: "What to Include in the Privacy Policy",
    content:
      "Generally speaking, a Privacy Policy often addresses these types of issues: the types of information the website is collecting and the manner in which it collects the data; an explanation about why is the website collecting these types of information; what are the website’s practices on sharing the information with third parties; ways in which your visitors and customers can exercise their rights according to the relevant privacy legislation; the specific practices regarding minors’ data collection; and much much more.",
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-primary">
      <h1 className="text-3xl font-bold text-center">Become an Arbitrator</h1>
      {privacySections.map((section, index) => (
        <div key={index} className="max-w-4xl mx-auto bg-[#FFF8D5] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <p className="text-gray-700">{section.content}</p>
        </div>
      ))}
      <p className="text-blue-600 text-center mt-4">
        To learn more about this, check out our article “Creating a Privacy Policy”.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
