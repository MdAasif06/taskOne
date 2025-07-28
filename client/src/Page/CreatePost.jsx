import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import API from "../Api";
import axios from "axios"

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("user"))?.token;

    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", post.content);
    formData.append("image", image);

    try {
      await axios.post("/api/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-4">
          Create Post
        </h2>

        <input
          className="w-full border border-indigo-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />

        <textarea
          className="w-full border border-indigo-200 rounded-lg p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          required
        />

        <label className="block">
          <span className="text-indigo-600 font-medium">Upload Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
          />
        </label>

        {preview && (
          <div className="w-full flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="w-full max-h-64 object-cover rounded-lg border border-indigo-200 shadow"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 rounded-lg shadow hover:from-indigo-600 hover:to-blue-600 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
