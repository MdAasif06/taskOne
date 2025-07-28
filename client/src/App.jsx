import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import CreatePost from "./Page/CreatePost";
import EditPost from "./Page/EditPost";
import PostDetails from "./Page/PostDetails";
import About from "./Page/About";
import Contact from "./Page/Contact";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Routes>
    <Footer/>
  </>
);

export default App;
