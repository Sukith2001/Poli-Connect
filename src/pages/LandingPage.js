import React from "react";
import Navbar from "../components/Navrbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-white">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Connecting Politicians with Society
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            PoliConnect bridges the gap between political leaders and the people. 
            Stay informed, engage, and analyze political trends effortlessly.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                For Politicians
              </h3>
              <p className="text-gray-700">
                Share updates, policies, and engage with the public directly.
              </p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                For Citizens
              </h3>
              <p className="text-gray-700">
                Stay informed about political activities and trends.
              </p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Data Analytics
              </h3>
              <p className="text-gray-700">
                Understand political trends and public sentiment through data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">About Us</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            PoliConnect empowers citizens by fostering political awareness and enabling 
            politicians to build trust and transparency. Our platform is dedicated to bridging 
            communication and fostering an engaged society.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-700 text-white py-10">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg">Email: contact@policonnect.com</p>
          <p className="text-lg">Phone: +1 123-456-7890</p>
          <div className="mt-6">
            <a
              href="mailto:contact@policonnect.com"
              className="inline-block bg-white text-blue-700 px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
