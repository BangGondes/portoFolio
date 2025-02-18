"use client";
import Link from "next/link";

export default function ProjectList() {
  return (
    <div id="projects" className="bg-gray-50 py-24 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Project 1
            </h3>
            <p className="text-gray-500 mb-4">
              A dynamic web app built with React & Tailwind CSS, showcasing
              modern UI/UX.
            </p>
            <Link
              className="text-teal-500 font-medium hover:underline"
              href="/projects/1"
            >
              View Project
            </Link>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Project 2
            </h3>
            <p className="text-gray-500 mb-4">
              A fully responsive e-commerce platform with real-time updates,
              built with React and Firebase.
            </p>
            <Link
              className="text-teal-500 font-medium hover:underline"
              href="/projects/2"
            >
              View Project
            </Link>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Project 3
            </h3>
            <p className="text-gray-500 mb-4">
              A beautifully designed portfolio website with interactive
              animations using React and GSAP.
            </p>
            <Link
              className="text-teal-500 font-medium hover:underline"
              href="/projects/3"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Tambahan teks di bawah project list */}
        <div className="mt-16 text-gray-600 text-lg">
          <p className="max-w-3xl mx-auto">
            Loosely designed in <span className="font-semibold">Figma</span> and
            coded in <span className="font-semibold">Visual Studio Code</span>{" "}
            by yours truly. Built with{" "}
            <span className="font-semibold">Next.js</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>, deployed with{" "}
            <span className="font-semibold">Vercel</span>. All text is set in
            the <span className="font-semibold">Inter</span> typeface.
          </p>
        </div>
      </div>
    </div>
  );
}
