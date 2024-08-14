import { testimonials } from "../constants/";

const Reviews = () => {
  return (
    <div>
      <div className="bg-white py-12 px-[8%] tracking-wide">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-center my-5 lg:my-10 text-sky-900">
          What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="rounded-md p-6 text-md border border-neutral-800">
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
