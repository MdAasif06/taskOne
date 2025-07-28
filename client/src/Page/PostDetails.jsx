import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import API from "../Api";
import axios from "axios";
import { getAuthHeader } from "../utils/authHeader";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/post/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${id}`, getAuthHeader());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-12 bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl shadow-2xl border border-purple-200">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 mb-4 text-center">
          {post.title}
        </h1>
        {post.image && (
          <img
            src={post.image}
            alt="Post"
            className="w-full max-w-md h-60 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-white mb-6"
          />
        )}
      </div>
      <p className="mt-2 text-gray-800 text-lg md:text-xl leading-relaxed tracking-wide bg-white/70 p-6 rounded-xl shadow-inner">
        {post.content}
      </p>
      {user && user._id === post.user && (
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Link
            to={`/edit/${post._id}`}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all px-6 py-3 text-white font-bold rounded-xl text-center shadow-md"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all px-6 py-3 text-white font-bold rounded-xl shadow-md"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
