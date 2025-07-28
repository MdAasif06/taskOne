import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // 👈

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth(); // 👈
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/api/user/login", form);
      login(res.data); // 👈 update context state
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    // same as previous
     <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-16 bg-white shadow-lg rounded-2xl p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">Login to Your Account</h2>

      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded border border-red-300 text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Login
      </button>

      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline font-medium">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
 
 
