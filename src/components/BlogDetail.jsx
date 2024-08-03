import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../services/contentful/client";
import "../index.css";

const BlogDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntry(postId);
        setPost(response.fields);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="container mx-auto px-[8%] py-12 pt-20 mt-20">
      <header className="bg-sky-900 text-white py-6 px-4 rounded-lg mb-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-lg">{post.date}</p>
      </header>
      <section>
        {post.image && post.image.fields && (
          <div className="mb-6">
            <img
              src={post.image.fields.file.url}
              alt={post.title}
              className="w-full rounded-lg"
            />
          </div>
        )}
        <div className="text-lg mb-6">
          {post.content && documentToReactComponents(post.content)}
        </div>
        <div className="flex items-center justify-between">
          <span className="bg-gray-300 h-7 px-3 rounded-full text-sm font-medium pt-1">
            {post.readTime}
          </span>
          <div className="text-sm font-medium">{post.author}</div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
