import ProjectCard from "./ProjesctCard";
import netflix from '../assets/netflix_port.png'
import swiggy from '../assets/swiggy_port.png'
import { LiaLocationArrowSolid } from "react-icons/lia";

// Example project data; replace with your actual data or import
const projectData = [
    {
        title: "Netflix clone",
        description: "This is an onilne show and movie website",
        imageUrl: netflix,
        liveUrl: "https://example.com/project1",
        sourceUrl: "https://github.com/SAURABHCODERIDER"
    },
    {
        title: "swiggy clone",
        description: "This is Food delivery web site",
        imageUrl: swiggy,
        liveUrl: "https://example.com/project2",
        sourceUrl: "https://github.com/SAURABHCODERIDER"
    },
     {
        title: "swiggy clone",
        description: "This is Food delivery web site",
        imageUrl: swiggy,
        liveUrl: "https://example.com/project2",
        sourceUrl: "https://github.com/SAURABHCODERIDER"
    },
     {
        title: "swiggy clone",
        description: "This is Food delivery web site",
        imageUrl: swiggy,
        liveUrl: "https://example.com/project2",
        sourceUrl: "https://github.com/SAURABHCODERIDER"
    },
    // Add more projects as needed
];

const Projects = () => (
    <section id="projects" className="">
        <div className="container mx-auto px-6 py-2">
           <h2 className="section-title text-md sm:text-2xl hover:text-teal-500 pb-4">
                       My Projects:
                       <LiaLocationArrowSolid className="transform rotate-90 inline-block" />
                     </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-4">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} liveUrl={project.liveUrl} sourceUrl={project.sourceUrl} />
                ))}
            </div>
        </div>
        <div className="flex justify-center items-center px-4 pt-2">
      <div className="h-0.5 w-full bg-gray-400 px-4" />
      </div>
    </section>
);

export default Projects