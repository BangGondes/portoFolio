import { FaReact, FaNodeJs, } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  // { name: "Laravel", icon: FaLaravel },
  { name: "MySQL", icon: SiMysql },
];

const TechStack = () => {
  return (
    <section className="py-24 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Tech Stack</h2>
      <p className="text-lg text-gray-600 mb-8">
        The technologies I use to build websites and applications.
      </p>
      <div className="flex justify-center flex-wrap gap-6">
        {techStack.map(({ name, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-32 hover:scale-105 transition-transform"
          >
            <Icon className="text-4xl text-teal-500 mb-2" />
            <p className="text-gray-800 font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
