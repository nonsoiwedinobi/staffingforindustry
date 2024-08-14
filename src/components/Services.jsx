import servicesImage from "../assets/servicesImage.jpg";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
    {
      title: "Permanent Staffing",
      description:
        "Find the perfect fit for your organization with our expert permanent staffing solutions.",
    },
    {
      title: "Contract Staffing(Freelance)",
      description:
        "Access flexible and skilled freelancers for your short-term projects and contract-based needs.",
    },
    {
      title: "Executive Search",
      description:
        "Secure top executive talent to lead your company with our specialized executive search services.",
    },
  ];

  return (
    <div className="mb-12 bg-gray-100 px-[8%] relative">
      <Helmet>
        <title>Services - Staffing4Industry</title>
        <meta
          name="description"
          content="Explore a wide range of staffing services offered by Staffing4Industry, including permanent staffing, contract staffing, and executive search. We provide customized solutions to meet your talent needs."
        />
      </Helmet>
      <div className="max-w-full text-sky-900 pb-16 md:pb-24 mx-auto sm:px-6 sm:max-w-7xl lg:px-8 pt-20">
        <div className="flex flex-col items-center py-8">
          <p className="text-4xl md:text-5xl font-bold text-center">Services</p>
        </div>
        <section>
          <div className="relative">
            <div className="w-full h-[268px] sm:h-[438px] overflow-hidden">
              <img
                src={servicesImage}
                alt="Services"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </section>

        <div className="w-full mt-[70px] md:mt-[30px] px-5 sm:px-2">
          <p className="text-lg mb-3 last:mb-0">
            Looking for top-tier talent solutions? Staffing4Industry has you
            covered!
          </p>
          <p className="text-lg mb-3 last:mb-0">
            Enhance your business with our customized staffing services,
            tailored to meet your needs in engineering, construction, and
            technical sales. We specialize in connecting you with the best
            candidates for every role.
          </p>
          <p className="text-lg mb-3 last:mb-0">
            Our Comprehensive Staffing Services Include:
          </p>
          <div className="border-y border-white/10 my-10">
            {services.map((service, index) => (
              <div key={index} className="py-4 border-y border-white/10">
                <div className="flex items-center">
                  <div className="flex-1 pl-4">
                    <h3 className="text-3xl font-heading text-left">
                      {service.title}
                    </h3>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg mb-3 last:mb-0">
            At Staffing4Industry, we’re dedicated to providing personalized and
            high-quality staffing solutions. Reach out to us today to discover
            how we can help you hire the right talent and drive your business
            forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
