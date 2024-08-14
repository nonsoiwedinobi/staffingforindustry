const Hero = () => {
  return (
    <div className="relative min-h-screen w-full h-screen bg-hero-image bg-cover bg-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0"></div> */}
      <div className="relative flex flex-col items-center justify-center h-full z-10 mt-10 overflow-hidden px-4 lg:px-8 pt-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide mx-auto text-white pt-20">
          Connecting top talent
          <span className="bg-gradient-to-r from-amber-400 to-amber-700 text-transparent bg-clip-text">
            {" "}
            with leading industries
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-white max-w-5xl mx-auto px-6 lg:px-12">
          Your expert recruitment agency in Antwerp, Belgium, connecting
          industrial, manufacturing, chemical, life sciences, and technology
          companies with top engineering, manufacturing, and technical sales
          talent.
        </p>
        <div className="flex justify-center pb-20 my-10">
          <a
            href="https://staffing4industry.app.loxo.co/staffing4industry"
            className="bg-sky-600 hover:bg-sky-700 py-3 px-9 mx-3 rounded-lg text-white transition duration-700 ease-in-out mb-10"
          >
            <span>Find job</span> <i className="fas fa-arrow-right ml-1"></i>
          </a>
          <a
            href="/Services"
            className="bg-amber-400 hover:bg-yellow-500 py-3 px-4 mx-3 rounded-lg transition duration-700 ease-in-out mb-10"
          >
            <span>Explore more</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
