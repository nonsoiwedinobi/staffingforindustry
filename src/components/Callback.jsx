const Callback = () => {
  return (
    <section className="py-12 bg-gray-200 px-[8%]" id="form">
      <div className="container mx-auto px-4">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-sky-900 text-center mb-4">
          Request a Call Back
        </h2>
        <p className="text-center mb-8">
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p>
        <form
          className="max-w-lg mx-auto p-8 rounded-lg"
          id="callback-form"
          action="https://formspree.io/f/xnnanayl"
          method="post"
        >
          <input
            type="hidden"
            name="subject"
            value="New Call Back Submission"
          />
          <input type="checkbox" name="botcheck" className="hidden" />
          <div className="mb-4">
            <label
              htmlFor="full-name"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone-number"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-amber-400 hover:bg-yellow-500 transition duration-400"
          >
            Submit
          </button>
          <div id="result" className="mt-4"></div>
        </form>
      </div>
    </section>
  );
};

export default Callback;
