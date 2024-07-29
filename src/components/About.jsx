import aboutImage from "../assets/aboutImage.jpg"; 

const About = () => {
  return (
    <div className="mb-10 bg-gray-300 px-[8%] relative">
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
              Staffing4Industry is a specialized Recruitment Agency based in
              Antwerpen, Belgium. We assist Industrial, Manufacturing, Chemical,
              Life sciences, and Technology companies in Belgium in the search
              for Engineering, Manufacturing, and Technical Sales profiles like:
              Technicians, Engineers, Managers, and Directors. It’s our aim to
              help companies achieve their business & Employment fulfillment
              goals, by providing different tailor-made recruitment services for
              affordable prices which are on average between 10% to 20% lower in
              pricing than most recruitment agencies.
            </p>
          </div>
        </section>
        <section className="py-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-sky-900">
              Mission Statement
            </h2>
            <p className="text-lg overflow-auto mb-3 last:mb-0 ">
              It’s our mission to staff beautiful industrial companies in the
              Benelux with the best technical employees available within the
              industry. We want to connect experienced professionals that are
              talented, motivated, and driven to excel in their work with
              amazing companies by opening up opportunities for both parties as
              a specialized intermediate party.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-sky-900">
              Vision Statement
            </h2>
            <p className="text-lg overflow-auto mb-3 last:mb-0 ">
              We are dedicated to providing the best permanent or contracting
              staffing solutions for you as a technical professional and you as
              an employer. By building long-term client and candidate
              relationships, we try hard to be a partner and trusted advisor in
              your business or career progression.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-sky-900">
              Core Values
            </h2>
            <ul className="list-disc pl-5 text-lg space-y-3">
              <li>
                <strong>Integrity:</strong> We follow the highest standards of
                professional ethics, openness, and honesty.
              </li>
              <li>
                <strong>Respect:</strong> We always treat others the way we
                would like to be treated.
              </li>
              <li>
                <strong>Accountability:</strong> We take ownership and
                initiatives in seizing opportunities, and honor our promises and
                commitments.
              </li>
              <li>
                <strong>Boldness:</strong> We are driven, ambitious,
                enthusiastic, and adventurous, and are not afraid to learn from
                failure.
              </li>
              <li>
                <strong>Commitment:</strong> We are committed to providing
                solutions for our customers. We exist to meet and solve the
                challenges that our customers face.
              </li>
              <li>
                <strong>Professionalism:</strong> We are seasoned professionals,
                continuously educating ourselves and preparing for the
                challenges ahead.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
