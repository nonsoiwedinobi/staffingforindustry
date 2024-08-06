import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-[8%] pt-20 mt-10">
      <Helmet>
        <title>Privacy Policy - Staffing4Industry</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Staffing4Industry to understand how we collect, use, and protect your personal information. Learn about your rights and our data protection practices."
        />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-extrabold mb-8 text-sky-900 text-center">
          Privacy Policy
        </h2>
        <p className="text-sm lg:text-base mb-6">
          This Privacy Policy describes the policies of Staffing4industry VOF,
          located at Mercartorstraat 132, 2018, Antwerpen, Belgium, on the
          collection, use, and disclosure of your information when you use our
          website (http://staffing4industry.com) (the “Service”). By accessing
          or using the Service, you consent to the collection, use, and
          disclosure of your information in accordance with this Privacy Policy.
          If you do not consent, please do not access or use the Service.
        </p>
        <p className="text-sm lg:text-base mb-6">
          We may modify this Privacy Policy at any time without prior notice to
          you and will post the revised Privacy Policy on the Service. The
          revised Policy will be effective 180 days from when it is posted on
          the Service, and your continued access or use of the Service after
          such time will constitute your acceptance of the revised Privacy
          Policy. We recommend that you periodically review this page.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">
          Information We Collect:
        </h3>
        <p className="text-sm lg:text-base mb-6">
          We will collect and process the following personal information about
          you:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>Name</li>
          <li>Email</li>
          <li>Mobile</li>
          <li>Date of Birth</li>
          <li>Address</li>
          <li>Work experience</li>
        </ul>
        <h3 className="text-xl font-semibold text-black mb-2">
          How We Collect Your Information:
        </h3>
        <p className="text-sm lg:text-base mb-6">
          We collect/receive information about you in the following manner:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>
            When a user fills up the registration form or otherwise submits
            personal information
          </li>
          <li>Interacts with the website</li>
          <li>From public sources</li>
        </ul>
        <h3 className="text-xl font-semibold text-black mb-2">
          How We Use Your Information:
        </h3>
        <p className="text-sm lg:text-base mb-6">
          We will use the information that we collect about you for the
          following purposes:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>Marketing/Promotional</li>
          <li>Creating user account</li>
          <li>Targeted advertising</li>
          <li>Manage user account</li>
        </ul>
        <p className="text-sm lg:text-base mb-6">
          If we want to use your information for any other purpose, we will ask
          you for consent and will use your information only on receiving your
          consent and then, only for the purpose(s) for which you grant consent
          unless we are required to do otherwise by law.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">
          How We Share Your Information:
        </h3>
        <p className="text-sm lg:text-base mb-6">
          We require third parties to use the personal information we transfer
          to them only for the purpose for which it was transferred and not to
          retain it for longer than is required for fulfilling the said purpose.
          We may also disclose your personal information for the following:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>
            To comply with applicable law, regulation, court order, or other
            legal process;
          </li>
          <li>
            To enforce your agreements with us, including this Privacy Policy;
          </li>
          <li>
            To respond to claims that your use of the Service violates any
            third-party rights.
          </li>
        </ul>
        <p className="text-sm lg:text-base mb-6">
          If the Service or our company is merged or acquired by another
          company, your information will be one of the assets that is
          transferred to the new owner.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">
          Retention Of Your Information:
        </h3>
        <p className="text-sm lg:text-base mb-6">
          We will retain your personal information with us for 90 days to 2
          years after user accounts remain idle or for as long as we need it to
          fulfill the purposes for which it was collected as detailed in this
          Privacy Policy. We may need to retain certain information for longer
          periods for purposes such as record-keeping, reporting, fraud
          prevention, etc. Residual anonymous information and aggregate
          information, neither of which identifies you, may be stored
          indefinitely.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">Your Rights:</h3>
        <p className="text-sm lg:text-base mb-6">
          Depending on the law that applies, you may have the right to access,
          rectify, or erase your personal data, restrict or object to its
          processing, ask us to share your personal information with another
          entity, or withdraw any consent provided. You can exercise these
          rights by writing to us at info@staffing4industry.com. We will respond
          in accordance with applicable law.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">Cookies, Etc.</h3>
        <p className="text-sm lg:text-base mb-6">
          To learn more about how we use cookies and your choices in relation to
          these tracking technologies, please refer to our Cookie Policy.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">Security:</h3>
        <p className="text-sm lg:text-base mb-6">
          The security of your information is important to us, and we use
          reasonable security measures to prevent the loss, misuse, or
          unauthorized alteration of your information. However, we cannot
          guarantee absolute security, and you transmit your information to us
          at your own risk.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">
          Grievance / Data Protection Officer:
        </h3>
        <p className="text-sm lg:text-base mb-6">
          If you have any queries or concerns about the processing of your
          information, you may email our Grievance Officer at
          info@staffing4industry.com. We will address your concerns in
          accordance with applicable law.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
