const Efficiency = () => {
  return (
    <div>
      <div className="bg-white py-12 px-[8%]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <article className="w-full lg:w-1/2 p-4 text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-extrabold mb-8 text-sky-900">
              Efficiency
            </h2>
            <h3 className="text-xl lg:text-2xl mb-4">
              Unlocking Potential, Driving Success for Businesses
            </h3>
            <p className="text-sm lg:text-base mb-8 text-black">
              Our services provide companies with the right talent, enabling
              them to achieve their business and employment goals. With our
              tailored recruitment solutions and affordable pricing, we help
              businesses thrive in a competitive market.
            </p>
            <button className="py-2 px-4 rounded-lg bg-amber-400 hover:bg-yellow-500 transition duration-300 cursor-pointer mx-auto lg:mx-0">
              Learn More
            </button>
          </article>
          <div className="w-full lg:w-1/2 flex-1 p-4">
            <img
              src="./efficiency.jpg"
              alt="Efficiency"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Efficiency;
