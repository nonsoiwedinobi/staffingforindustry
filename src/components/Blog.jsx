import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client from "../services/contentful/client";
import "../index.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost",
          order: "fields.date",
          limit: 3,
        });
        setPosts(response.items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-200 py-12 px-[8%] tracking-wide">
      <h4 className="text-2xl font-semibold text-center mb-4 text-amber-400">
        Our Blog
      </h4>
      <h2 className="text-2xl lg:text-4xl font-extrabold text-center mb-12 text-sky-900">
        Latest articles
      </h2>
      <div className="flex justify-center mb-12">
        <Link
          to="/blog"
          className="flex items-center font-bold text-base hover:underline hover:text-tertiary text-sky-900"
        >
          See more
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
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.sys.id}
            className="border-primary group border-[3px] cursor-pointer bg-secondary rounded-3xl shadow-lg overflow-hidden h-full flex flex-col hover:border-gray-400 transition duration-300"
          >
            <div className="overflow-hidden relative w-full">
              <img
                src={post.fields.image.fields.file.url}
                alt={post.fields.title}
                className="object-cover w-full"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="bg-gray-300 h-7 px-3 rounded-full text-sm font-medium pt-1">
                  {post.fields.readTime}
                </span>
                <div className="text-sm font-medium">{post.fields.date}</div>
              </div>
              <h4 className="text-xl font-semibold mt-4 mb-2 text-sky-900">
                {post.fields.title}
              </h4>
              <p className="text-sm mb-4">{post.fields.summary}</p>
              <Link
                to={`/blog/${post.sys.id}`}
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
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
