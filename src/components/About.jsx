import aboutImage from "../assets/aboutImage.jpg";
import { Helmet } from "react-helmet-async"; 

const About = () => {
  return (
    <div className="mb-10 bg-gray-100 px-[8%] relative">
      <Helmet>
        <title>About Us - Staffing4Industry</title>
        <meta
          name="description"
          content="Learn more about Staffing4Industry, a specialized Recruitment Agency in Antwerpen, Belgium. We provide tailor-made recruitment services for various industries, focusing on engineering, manufacturing, and technical sales profiles."
        />
      </Helmet>
      <div className="max-w-full text-sky-900 pb-16 md:pb-24 mx-auto sm:px-6 sm:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center pt-20">
          <p className="text-3xl font-bold text-center pt-10">About Us</p>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-center h-full py-20">
          <div className="w-full lg:w-1/2 h-full">
            <img
              src={aboutImage}
              alt="About Staffing4Industry"
              className="w-full h-full object-cover p-12"
            />
          </div>
          <div className="w-full lg:w-1/2 ">
            <p className="text-lg overflow-auto mb-2 last:mb-0">
              Staffing4Industry is a specialized recruitment agency based in
              Antwerp, Belgium, dedicated to serving the Industrial,
              Manufacturing, Chemical, Life Sciences, and Technology sectors. We
              excel at connecting businesses with top talent.
            </p>
            <p className="text-lg overflow-auto mb-2 last:mb-0">
              Our mission is to help companies achieve their business and
              employment goals through tailored recruitment services. We pride
              ourselves on our deep industry knowledge and proven track record
              of matching the right talent with the right opportunities,
              ensuring long-term success for both our clients and candidates.
            </p>
            <p className="text-lg overflow-auto mb-2 last:mb-0">
              Partner with Staffing4Industry and experience the difference that
              expertise and dedication can make in your recruitment process.
            </p>
          </div>
        </section>
        <section className="py-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-sky-900">
              Mission Statement It’s
            </h2>
            <p className="text-lg overflow-auto mb-3 last:mb-0 ">
              Our mission is to staff the leading industrial companies in the
              Benelux region with the best technical talent available in the
              industry. We are committed to connecting skilled, motivated, and
              driven professionals with exceptional companies, creating valuable
              opportunities for both parties through our specialized recruitment
              services.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-sky-900">
              Vision Statement
            </h2>
            <p className="text-lg overflow-auto mb-3 last:mb-0 ">
              We are committed to delivering the best permanent and contract
              staffing solutions for technical professionals and employers
              alike. By fostering long-term relationships with our clients and
              candidates, we strive to be a trusted partner and advisor in your
              business success and career advancement.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-sky-900">
              Core Values
            </h2>
            <ul className="list-disc pl-5 text-lg space-y-3">
              <li>
                <strong>Integrity:</strong> We adhere to the highest standards
                of professional ethics, transparency, and honesty.
              </li>
              <li>
                <strong>Respect:</strong> We treat others with the same respect
                we expect for ourselves.
              </li>
              <li>
                <strong>Accountability:</strong> We take ownership of our
                actions, seize opportunities, and fulfill our promises and
                commitments.
              </li>
              <li>
                <strong>Boldness:</strong> We are ambitious, enthusiastic, and
                unafraid to learn from failure as we strive for excellence.
              </li>
              <li>
                <strong>Commitment:</strong> We are dedicated to solving the
                challenges our customers face by providing tailored staffing
                solutions.
              </li>
              <li>
                <strong>Professionalism:</strong> We are seasoned professionals,
                continuously enhancing our skills and preparing for future
                challenges.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
