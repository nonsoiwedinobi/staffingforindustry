import { Helmet } from "react-helmet-async";

const FAQs = () => {
  return (
    <div className="bg-gray-100 py-12 px-[8%] pt-20 mt-10">
      <Helmet>
        <title>FAQs - Staffing4Industry</title>
        <meta
          name="description"
          content="Find answers to the most frequently asked questions about Staffing4Industry's services, pricing, and industry focus. Get in touch for more information."
        />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-extrabold mb-8 text-sky-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-black">
              What services does Staffing4Industry provide?
            </h3>
            <p className="text-sm lg:text-base text-black mt-2">
              We specialize in recruitment for industrial, manufacturing,
              chemical, life sciences, and technology sectors, providing both
              permanent and contracting staffing solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              What makes Staffing4Industry&apos;s pricing competitive?
            </h3>
            <p className="text-sm lg:text-base text-black mt-2">
              Our services are on average 10% to 20% lower in pricing compared
              to most recruitment agencies, offering affordable recruitment
              solutions without compromising quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              What industries do you focus on?
            </h3>
            <p className="text-sm lg:text-base text-black mt-2">
              We focus on the industrial, manufacturing, chemical, life
              sciences, and technology industries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              How does Staffing4Industry ensure quality in recruitment?
            </h3>
            <p className="text-sm lg:text-base text-black mt-2">
              We have a thorough vetting process to ensure that we connect
              companies with the most qualified and talented professionals
              available.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/contact-us"
            className="bg-amber-400 hover:bg-yellow-500 py-3 px-9 mx-3 rounded-lg transition duration-700 ease-in-out"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
