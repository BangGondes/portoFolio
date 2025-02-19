import React from "react";
import Link from "next/link";
import Project from "./components/project/page"; // Pastikan path ini benar
import Footer from "./components/footer/page";  
import TechStack from "./components/techstack/page";



const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full py-24 px-8 bg-gradient-to-r from-teal-400 to-teal-600 flex justify-center items-center">
        <img
          src="/images/profile.png" // Pastikan file ada di folder /public
          alt="Profile"
          className="rounded-full w-32 h-32 mr-8"
        />
        <div className="text-left">
          <h1 className="text-6xl text-white font-extrabold mb-4">
            Ahmad Fikri
          </h1>
          <p className="text-2xl text-gray-100 font-semibold mb-2">
            Frontend Developer Intern
          </p>
          <p className="text-l text-gray-200">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hi, I&apos;m Ahmad Fikri! A passionate frontend developer who enjoys
            creating dynamic and responsive web experiences. Currently
            interning, learning, and growing in the world of frontend
            development. Let's build something amazing together!
          </p>
          <Link
            href="#projects"
            className="inline-block bg-teal-500 text-white py-3 px-6 rounded-full text-lg font-medium transform transition duration-300 hover:bg-teal-600 hover:scale-105"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Project Section */}
      <Project />
      <TechStack />
      <Footer />
    </div>
  );
};

export default HomePage;
