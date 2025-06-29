import { useState } from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { SiTypescript, SiTailwindcss, SiJest, SiPostman } from "react-icons/si";
import { TbCloudDownload } from "react-icons/tb";

const skillsData = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Github", icon: <FaGithub className="text-gray-300" /> },
  { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
  { name: "Testing Jest", icon: <SiJest className="text-red-500" /> },
];

const Skills = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
  return (
    <section id="skills" className="font-serif font-bold text-gray-400">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h2  className="section-title text-md pt-2 sm:text-2xl hover:text-teal-500">
            Technical Skills:
            <LiaLocationArrowSolid className="transform rotate-90 inline-block" />
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-4xl mx-auto text-center items-center justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-0.5 sm:gap-2 bg-gray-800 rounded-full px-5 py-2 m-2 shadow-md hover:bg-gray-700 transition-all duration-200 skill-badge"
              >
                <span className="text-xs sm:text-xl">{skill.icon}</span>
                <span className="text-gray-100 font-medium text-xs sm:text-xl">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            {/* <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              className="block w-full text-sm text-gray-300
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded-full file:border-0
                                   file:text-sm file:font-semibold
                                   file:bg-blue-600 file:text-white
                                   hover:file:bg-blue-700
                                   transition"
            /> */}
            {/* {selectedFile && ( */}
              <button
                className="flex items-center px-3 py-0.5  sm:py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                /* onClick={() => {
                  if (selectedFile) {
                    const fileURL = URL.createObjectURL(selectedFile);
                    window.open(fileURL, "_blank");
                  }
                }}
                title="Open file" */
              >
                <a className="flex gap-2 text-center" href="https://drive.google.com/file/d/1Vyzul_aBaqT3NuCEO4r3zmuaCX9vIOxR/view?usp=sharing" target="_blank">Resume <TbCloudDownload className="text-xl mr-1" /></a>
                
              </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;