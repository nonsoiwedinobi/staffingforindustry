const Blog = () => {
  return (
    <div className="bg-white py-12 px-[8%] tracking-wide">
      <h4 className="text-2xl font-semibold text-center mb-4 text-amber-400">
        Our Blog
      </h4>
      <h2 className="text-2xl lg:text-4xl font-extrabold text-center mb-12 text-sky-900">
        Latest articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* {Blog post 1} */}
        <div className="border-primary group border-[3px] cursor-pointer bg-secondary rounded-3xl shadow-lg overflow-hidden h-full flex flex-col hover:border-gray-400 transition duration-300">
          <div className="overflow-hidden relative w-full">
            <img
              src="./img1.jpg"
              alt="Industrialization and its effects"
              className="object-cover w-full"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="bg-gray-300 h-7 px-3 rounded-full text-sm font-medium pt-1">
                3 min read
              </span>
              <div className="text-sm font-medium">25 Jun 2024</div>
            </div>
            <h4 className="text-xl font-semibold mt-4 mb-2 text-sky-900">
              Industrialization and its effects
            </h4>
            <p className="text-sm mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="#"
              className="font-medium text-base hover:underline hover:text-tertiary flex items-center"
            >
              Read More
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
                className="ml-2"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
        {/* {Blog post 2} */}
        <div className="border-primary group border-[3px] cursor-pointer bg-secondary rounded-3xl shadow-lg overflow-hidden h-full flex flex-col hover:border-gray-400 transition duration-300">
          <div className="overflow-hidden relative w-full">
            <img
              src="./img2.jpg"
              alt="Sustainable Engineering"
              className="object-cover w-full"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="bg-gray-300 h-7 px-3 rounded-full text-sm font-medium pt-1">
                3 min read
              </span>
              <div className="text-sm font-medium">25 Jun 2024</div>
            </div>
            <h4 className="text-xl font-semibold mt-4 mb-2 text-sky-900">
              Sustainable Engineering
            </h4>
            <p className="text-sm mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="#"
              className="font-medium text-base hover:underline hover:text-tertiary flex items-center"
            >
              Read More
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
                className="ml-2"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
        {/* {Blog post 3} */}
        <div className="border-primary group border-[3px] cursor-pointer bg-secondary rounded-3xl shadow-lg overflow-hidden h-full flex flex-col hover:border-gray-400 transition duration-300">
          <div className="overflow-hidden relative w-full">
            <img
              src="./img3.jpg"
              alt="Tech Innovations in 2024"
              className="object-cover w-full"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="bg-gray-300 h-7 px-3 rounded-full text-sm font-medium pt-1">
                3 min read
              </span>
              <div className="text-sm font-medium">25 Jun 2024</div>
            </div>
            <h4 className="text-xl font-semibold mt-4 mb-2 text-sky-900">
              Tech Innovations in 2024
            </h4>
            <p className="text-sm mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="#"
              className="font-medium text-base hover:underline hover:text-tertiary flex items-center"
            >
              Read More
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
                className="ml-2"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
