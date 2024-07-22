const Specialties = () => {
  return (
    <div>
      <section className="specialties py-12 bg-gray-200">
        <h2 className="section-head text-center mb-12 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-sky-900">
          What We Offer
        </h2>
        <div className="mx-auto flex flex-wrap gap-8 px-[8%]">
          <article className="specialties-info flex-1 min-w-[300px]">
            <h2 className="section-title text-sky-900 mb-8 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Specialized recruitment services for industrial, manufacturing,
              chemical, life sciences, and technology sectors.
            </h2>
            <p className="specialties-text text-sky-900 text-base leading-6">
              At Staffing4Industry, we offer tailored recruitment solutions to
              meet the unique needs of companies in the industrial,
              manufacturing, chemical, life sciences, and technology sectors.
              Our team of experts understands the specific requirements of these
              industries and works diligently to connect businesses with
              top-notch talent.
            </p>
          </article>
          <div className="flex-1 min-w-[300px]">
            <img
              src="/specialty.jpg"
              alt="Specialty Image"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specialties
