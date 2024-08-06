import { testimonials } from "../constants/";

const ReviewsPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-12 px-[8%] pt-20">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center my-5 lg:my-10 text-sky-900">
        Customer Reviews
      </h1>
      <p className="text-lg text-center mb-12 lg:mb-16 text-gray-700">
        Hear what our clients have to say about their experiences with our
        services.
      </p>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="rounded-md p-6 bg-white shadow-md">
              <p className="text-md text-gray-800">{testimonial.text}</p>
              <div className="flex mt-8 items-center">
                
                <div>
                  <h6 className="font-semibold text-gray-900">
                    {testimonial.user}
                  </h6>
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
  );
};

export default ReviewsPage;
