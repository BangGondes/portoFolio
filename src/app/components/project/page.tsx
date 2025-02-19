"use client";
import Link from "next/link";

export default function ProjectList() {
  return (
    <div id="projects" className="bg-gray-50 py-24 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">
          My Projects
        </h2>

        {/* Wrapper dengan max-height yang membatasi 3 baris */}
        <div className="relative max-h-[1000px] overflow-y-auto px-4 py-4">
          {/* Grid dengan 3 kolom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Project 1",
                desc: "A dynamic web app built with React & Tailwind CSS.",
              },
              {
                id: 2,
                title: "Project 2",
                desc: "A fully responsive e-commerce platform.",
              },
              {
                id: 3,
                title: "Project 3",
                desc: "A beautifully designed portfolio website.",
              },
 
            ].map((project) => (
              <div
                key={project.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4">{project.desc}</p>
                <Link
                  className="text-teal-500 font-medium hover:underline"
                  href={`/projects/${project.id}`}
                >
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
