import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Project from "./components/project/page"; // Pastikan path ini benar

const socialLinks = {
  github: "https://github.com/BangGondes",
  instagram: "https://www.instagram.com/saliem_069",
  linkedin: "https://www.linkedin.com/in/kang-noer-841139337",
};

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full py-24 px-8 bg-gradient-to-r from-teal-400 to-teal-600 flex justify-center items-center">
        <img
          src="/images/profile.jpg" // Pastikan file ada di folder /public
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

      {/* Footer */}
      <footer className="bg-teal-500 text-white py-20 text-center">
        <p className="font-medium text-lg mb-4">
          Designed and Developed by Ahmad Fikri
        </p>
        <p className="text-sm text-gray-200 max-w-md mx-auto mb-6">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All
          text is set in the Inter typeface.
        </p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-200 transition-colors" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-gray-200 transition-colors" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-gray-200 transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
