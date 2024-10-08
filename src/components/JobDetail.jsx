import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import client from "../services/contentful/client";
import "../index.css";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await client.getEntry(jobId);
        setJob(response.fields);
      } catch (error) {
        console.error("Error fetching job details: ", error);
      }
    };

    fetchJob();
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  const handleApplyNow = () => {
    navigate("/submit-resume", { state: { jobTitle: job.title } });
  };

  return (
    <div className="container mx-auto px-[8%] py-12 pt-20 mt-20">
      <Helmet>
        <title>{job.title} - Job Details - Staffing4Industry</title>
        <meta
          name="description"
          content={`Learn more about the ${job.title} position located in ${job.location}. Explore the job description, requirements, and how to apply.`}
        />
      </Helmet>
      <header className="bg-sky-900 text-white py-6 px-4 rounded-lg mb-6">
        <h1 className="text-4xl font-bold">{job.title}</h1>
        <p className="text-lg">{job.location}</p>
      </header>

      {/* Job Details Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <p className="mb-6">{job.description}</p>

        <h3 className="text-xl font-semibold mb-2">Details</h3>
        <ul className="mb-6">
          <li>
            <strong>Category:</strong> {job.category}
          </li>
          <li>
            <strong>Employment Type:</strong> {job.employmentType}
          </li>
          <li>
            <strong>Salary:</strong> €{job.salary}
          </li>
        </ul>

        <button
          onClick={handleApplyNow}
          className="bg-amber-400 text-black py-2 px-4 rounded-lg font-medium hover:bg-amber-500"
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default JobDetail;
