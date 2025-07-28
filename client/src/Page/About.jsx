const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        About Us
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        Welcome to <span className="font-semibold">MyBlog</span>, your go-to platform for insightful articles, tech news, and creative blogs. We are a passionate group of writers, developers, and dreamers who believe in the power of sharing ideas.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h3>
          <p className="text-gray-600">
            To create a community where knowledge flows freely, creativity thrives, and every voice finds a platform.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">What We Offer</h3>
          <p className="text-gray-600">
            From technology updates to lifestyle articles, we provide a range of content crafted by passionate contributors worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
