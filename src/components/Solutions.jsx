const Solutions = () => {
  return (
    <div>
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center px-[8%]">
          <h2 className="text-center text-sky-900 mb-8 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Solutions
          </h2>
          <p className="text-3xl mt-6 mb-6 mx-auto w-13/12 sm:w-8/12 md:w-7/12 leading-none text-black">
            Why Choose Staffing4Industry for Your Recruitment Needs
          </p>
          <p className="text-base mb-10 mx-auto w-full sm:w-6/12 text-black truncate-lines">
            At Staffing4Industry, we offer customized recruitment solutions
            tailored to various industries with unparalleled expertise. Our
            dedicated team leverages deep industry knowledge and extensive
            networks to connect you with top-tier talent, ensuring a perfect
            match for your business needs. Choose us for personalized service
            and a commitment to driving your success through strategic staffing
            solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
            <div className="bg-white rounded-lg p-5 flex flex-col items-center justify-center text-center">
              <span>
                <i className="fas fa-cube text-4xl mb-8 text-sky-900"></i>
              </span>
              <h4 className="font-extrabold text-sky-900 pb-2">
                Affordable Pricing
              </h4>
              <p className="text-base mb-6 text-black">
                We provide recruitment services at competitive prices.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-5 flex flex-col items-center justify-center text-center">
              <span>
                <i className="fas fa-cube text-4xl mb-8 text-sky-900"></i>
              </span>
              <h4 className="font-extrabold text-sky-900 pb-2">
                Tailor-made Recruitment Services
              </h4>
              <p className="text-base mb-6 text-black ">
                Our recruitment services are customized to meet your specific
                needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col items-center justify-center text-center">
              <span>
                <i className="fas fa-cube text-4xl mb-8 text-sky-900"></i>
              </span>
              <h4 className="font-extrabold text-sky-900 pb-2">
                Expertise in Various Industries
              </h4>
              <p className="text-base mb-6 text-black">
                We have extensive knowledge and experience in multiple
                industries.
              </p>
            </div>
          </div>
          <a href="/Services">
            <button className="mt-10 py-2 px-4 bg-amber-400 hover:bg-yellow-500 rounded-lg transition duration-700 ease-in-out cursor-pointer">
              Learn More
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
