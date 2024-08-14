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
              Our recruitment services empower companies to secure the right
              talent, helping them achieve their business and employment goals.
              Through customized staffing solutions, we enable businesses to
              thrive in a competitive market by connecting them with the skilled
              professionals they need to succeed.
            </p>
            <a href="/About">
              <button className="py-2 px-4 rounded-lg bg-amber-400 hover:bg-yellow-500 transition duration-300 cursor-pointer mx-auto lg:mx-0">
                Learn More
              </button>
            </a>
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
