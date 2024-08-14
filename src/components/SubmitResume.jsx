import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SubmitResume = () => {
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "General Application";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <section className="py-12 bg-gray-300 px-[8%]" id="form">
      <Helmet>
        <title>Submit Your Resume - Staffing4Industry</title>
        <meta
          name="description"
          content={`Submit your resume to apply for the position of ${jobTitle}. Join Staffing4Industry and connect with top employers in various industries.`}
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-sky-900 text-center mb-4 mt-20">
          Submit Your Resume
        </h2>
        <p className="text-center mb-8">
          {`You are applying for the position of ${jobTitle}. Please fill out the form below to submit your resume.`}
        </p>
        <form
          className="max-w-lg mx-auto p-8 rounded-lg"
          id="resume-form"
          encType="multipart/form-data"
          action="https://formspree.io/f/xnnanayl"
          method="post"
        >
          <input
            type="hidden"
            name="subject"
            value={`Application for ${jobTitle}`}
          />
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-gray-700 font-bold mb-2"
            >
              Attach Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf, .jpg, .doc"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600 mt-2">
              PDF, JPG, DOC files only. Max size 5MB.
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-amber-400 hover:bg-yellow-500 transition duration-700"
          >
            Submit
          </button>
          <div id="result" className="mt-4 text-center">
            {message}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubmitResume;
