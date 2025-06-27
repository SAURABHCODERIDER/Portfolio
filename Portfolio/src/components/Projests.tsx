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
    <section id="projects" className="py-24">
        <div className="container mx-auto px-6 py-6">
           <h2 className="section-title text-2xl hover:text-teal-500 pb-4">
                       My Projects:
                       <LiaLocationArrowSolid className="transform rotate-90 inline-block" />
                     </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} liveUrl={project.liveUrl} sourceUrl={project.sourceUrl} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects