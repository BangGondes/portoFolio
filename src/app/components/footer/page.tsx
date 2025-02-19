import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = {
  github: "https://github.com/BangGondes",
  instagram: "https://www.instagram.com/saliem_069",
  linkedin: "https://www.linkedin.com/in/kang-noer-841139337",
};
export default function Footer() {
    return (
       
      <div className="bg-teal-500 text-white py-20 text-center">
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
      </div>
    );
}