import React from "react";

const ODRUseCase = () => {
  return (
    <div>
      <section className="bg-purple-700 text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Accessibility Statement
          </h2>
          <p className="text-lg mb-6">
            We are committed to ensuring that our Online Dispute Resolution
            (ODR) platform is accessible to everyone, including individuals with
            disabilities. Our goal is to provide a seamless, inclusive
            experience for all users.
          </p>
          <h3 className="text-2xl font-semibold mb-3">Our Commitment</h3>
          <p className="mb-6">
            We strive to adhere to the Web Content Accessibility Guidelines
            (WCAG) to enhance usability and ensure accessibility for all users.
            Our team continuously works to improve accessibility features across
            our platform.
          </p>
          <h3 className="text-2xl font-semibold mb-3">
            Feedback & Support
          </h3>
          <p className="mb-6">
            If you encounter any accessibility barriers while using our platform
            or have suggestions for improvement, please contact us at{" "}
            <a
              href="mailto:support@odrplatform.com"
              className="text-yellow-300 underline"
            >
              support@odrplatform.com
            </a>
            . Your feedback helps us make our services better for everyone.
          </p>
        </div>
      </section>
      <section className="bg-[#FFF8D5] text-black py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Accessibility Statement</h2>
          <p className="text-lg mb-6">
            This statement was last updated on [enter relevant date].
          </p>

          <p className="mb-6">
            We at [enter organization / business name] are working to make our
            site [enter site name and address] accessible to people with
            disabilities.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            What Web Accessibility Is
          </h3>
          <p className="mb-6">
            An accessible site allows visitors with disabilities to browse the
            site with the same or a similar level of ease and enjoyment as other
            visitors. This can be achieved with the capabilities of the system
            on which the site is operating, and through assistive technologies.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Accessibility Adjustments on This Site
          </h3>
          <p className="mb-6">
            We have adapted this site in accordance with WCAG [2.0 / 2.1 / 2.2 -
            select relevant option] guidelines, and have made the site
            accessible to the level of [A / AA / AAA - select relevant option].
            This site&apos;s contents have been adapted to work with assistive
            technologies, such as screen readers and keyboard use. As part of
            this effort, we have also:
          </p>

          <ul className="list-disc list-inside mb-6">
            <li>
              Used the Accessibility Wizard to find and fix potential
              accessibility issues
            </li>
            <li>Set the language of the site</li>
            <li>Set the content order of the site’s pages</li>
            <li>Defined clear heading structures on all of the site’s pages</li>
            <li>Added alternative text to images</li>
            <li>
              Implemented color combinations that meet the required color
              contrast
            </li>
            <li>Reduced the use of motion on the site</li>
            <li>
              Ensured all videos, audio, and files on the site are accessible
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3">
            Declaration of Partial Compliance
          </h3>
          <p className="mb-6">
            The accessibility of certain pages on the site depends on contents
            that do not belong to the organization, and instead belong to [enter
            relevant third-party name]. The following pages are affected by
            this: [list the URLs of the pages]. We therefore declare partial
            compliance with the standard for these pages.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Accessibility Arrangements in the Organization
          </h3>
          <p className="mb-6">
            [Enter a description of the accessibility arrangements in the
            physical offices / branches of your site&apos;s organization or business.
            The description can include all current accessibility arrangements -
            starting from the beginning of the service (e.g., the parking lot
            and/or public transportation stations) to the end (such as the
            service desk, restaurant table, classNameroom, etc.). It is also
            required to specify any additional accessibility arrangements, such
            as disabled services and their location, and accessibility
            accessories (e.g., audio inductions and elevators) available for
            use.]
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Requests, Issues, and Suggestions
          </h3>
          <p className="mb-6">
            If you find an accessibility issue on the site, or if you require
            further assistance, you are welcome to contact us through the
            organization&apos;s accessibility coordinator:
          </p>

          <p className="mb-6 font-semibold">
            [Name of the accessibility coordinator]
          </p>
          <p className="mb-6">
            [Telephone number of the accessibility coordinator]
          </p>
          <p className="mb-6">
            [Email address of the accessibility coordinator]
          </p>
          <p className="mb-6">
            [Enter any additional contact details if relevant/available]
          </p>
        </div>
      </section>
    </div>
  );
};

export default ODRUseCase;
