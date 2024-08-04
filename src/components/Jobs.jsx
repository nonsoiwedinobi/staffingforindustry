import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import client from "../services/contentful/client";
import "../index.css";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [workType, setWorkType] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await client.getEntries({
          content_type: "job",
        });
        setJobs(response.items);
        setFilteredJobs(response.items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword, location, workType]);

  const filterJobs = () => {
    let filtered = jobs;

    if (searchKeyword) {
      filtered = filtered.filter(
        (job) =>
          job.fields.title
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          job.fields.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.fields.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (workType) {
      filtered = filtered.filter(
        (job) =>
          job.fields.employmentType.toLowerCase() === workType.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
  };

  return (
    <section className="bg-gray-100 pb-20 pt-20">
      <Helmet>
        <title>Latest Jobs - Staffing4Industry</title>
        <meta
          name="description"
          content="Discover the latest job opportunities available at Staffing4Industry. Explore a variety of positions across multiple industries."
        />
      </Helmet>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-sky-900 mb-10 mt-20 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Available Jobs
        </h2>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="text"
              placeholder="Search by keyword"
              className="mb-4 sm:mb-0 sm:mr-4 p-2 border border-slate-800 rounded-lg"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              className="mb-4 sm:mb-0 sm:mr-4 p-2 border border-slate-800 rounded-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <select
              className="p-2 border border-slate-800 rounded-lg"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <a key={job.sys.id} href={`/job/${job.sys.id}`} className="group">
              <div className="border-2 bg-gray-200 rounded-3xl relative overflow-hidden p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
                <div className="flex justify-between">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                      {job.fields.category}
                    </span>
                  </span>
                  <div className="text-sm">
                    {new Date(job.fields.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold">{job.fields.title}</h2>
                  <p className="mt-1 text-md flex-1 line-clamp-3">
                    {job.fields.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="pr-2 block">
                      <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                        <span className="-ml-1.5">
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>{job.fields.employmentType}</span>
                      </span>
                    </span>
                    <span className="pr-2 block">
                      <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                        <span className="-ml-1.5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>{job.fields.location}</span>
                      </span>
                    </span>
                    <span className="pr-2 block">
                      <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                        <span className="-ml-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-euro"
                          >
                            <path d="M4 10h12" />
                            <path d="M4 14h9" />
                            <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
                          </svg>
                        </span>
                        <span>{job.fields.salary}</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0">
                    Job details
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17L17 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Job;
