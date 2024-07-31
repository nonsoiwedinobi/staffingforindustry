import servicesImage from "../assets/servicesImage.jpg"; // Ensure this path is correct

const Services = () => {
  const services = [
    {
      title: "Permanent Staffing",
      description:
        "Providing expert staffing solutions for permanent positions.",
    },
    {
      title: "Contract Staffing",
      description:
        "Offering flexible staffing solutions for contract positions.",
    },
    {
      title: "Executive Search",
      description: "Finding top executive talent for leadership roles.",
    },
  ];

  return (
    <div className="mb-12 bg-gray-300 px-[8%] relative">
      <div className="max-w-full text-sky-900 font-bold pb-16 md:pb-24 mx-auto sm:px-6 sm:max-w-7xl lg:px-8 pt-20">
        <div className="flex flex-col items-center py-8">
          <p className="font-heading text-4xl md:text-5xl text-center">
            Services
          </p>
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

        <div className="px-5 grid grid-cols-1 mt-[70px] md:mt-[30px] md:grid-cols-4 md:gap-x-10 md:text-lg sm:px-2">
          <div className="flex flex-col md:col-span-1 sticky top-header self-start pt-6 -mt-6">
            <div className="hidden md:block">
              <div className="flex">
                <a
                  className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-tertiary py-0 px-0 text-tertiary text-lg"
                  target="_self"
                  aria-label=""
                  href="/en/contact-us"
                >
                  Post your vacancy now
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-base overflow-auto mb-3 last:mb-0">
              Your complete talent solution - From permanent to contract
              staffing, We&apos;ve got you covered!
            </p>
            <p className="overflow-auto mb-3 last:mb-0 text-base">
              Transform your business with customised staffing solutions from
              our company - Your partner for top talent in IT (tech),
              engineering, construction, finance, digital marketing, and
              technical sales.
            </p>
            <p className="overflow-auto mb-3 last:mb-0 text-base">
              Here are some of the main services we provide:
            </p>
            <div className="border-y border-white/10 my-10">
              {services.map((service, index) => (
                <div key={index} className="py-4 border-y border-white/10">
                  <div className="flex items-center">
                    <div className="flex-1 pl-4">
                      <h3 className="text-3xl font-heading text-left">
                        {service.title}
                      </h3>
                      <p className="text-base">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base overflow-auto mb-3 last:mb-0">
              At Staffing4Industry, we pride ourselves on delivering
              personalized and high-quality staffing solutions to our clients.
              Contact us today to learn more about our services and how we can
              help you find the right talent for your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
