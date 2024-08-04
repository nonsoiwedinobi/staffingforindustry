import { Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import contactImage from "../assets/contactImage.jpg";

const ContactUs = () => {
  return (
    <div className="mb-12 bg-gray-100 px-[8%]">
      <Helmet>
        <title>Contact Us - Staffing4Industry</title>
        <meta
          name="description"
          content="Get in touch with Staffing4Industry. Fill out the contact form to reach our team for inquiries, support, or more information about our services."
        />
      </Helmet>
      <section className="flex flex-col lg:flex-row items-center justify-center h-full py-20">
        <div className="w-full lg:w-1/2 h-full">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover p-12"
          />
        </div>
        <div className="w-full lg:w-1/2 ">
          <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-sky-900">
            Contact Us
          </h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
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
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center py-2 px-4 bg-amber-400 hover:bg-yellow-500 rounded-lg transition duration-300"
            >
              <Mail size={16} className="mr-2" /> Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
