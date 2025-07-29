import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext"; 

const Navbar = () => {
  const { user, logout } = useAuth();// it is comming from contextAPI
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyBlog
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center text-base">
          {user ? (
            <>
              <Link to="/create" className="hover:underline">Create</Link>
              <button
                onClick={logout}
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/about" className="hover:underline">About us</Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-3">
          {user ? (
            <>
              <Link to="/create" className="block hover:underline">Create</Link>
              <button
                onClick={logout}
                className="block bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:underline">Login</Link>
              <Link to="/register" className="block hover:underline">Register</Link>
              <Link to="/contact" className="block hover:underline">Contact</Link>
              <Link to="/about" className="block hover:underline">About us</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
