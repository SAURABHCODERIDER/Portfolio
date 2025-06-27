import type {ProjectCardType } from "../types/project";

const ProjectCard = ({ title, description, imageUrl, liveUrl, sourceUrl }:ProjectCardType) => (
    <div className="glass-effect rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <img className="w-full h-56 object-cover" src={imageUrl} alt={`${title} Screenshot`} />
        <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
            <p className="text-gray-400 text-base mb-4">{description}</p>
            <div className="flex space-x-4">
                <a href={liveUrl} className="text-teal-400 hover:text-teal-300 font-semibold">Live Demo</a>
                <a href={sourceUrl} className="text-gray-400 hover:text-white font-semibold">Source Code</a>
            </div>
        </div>
    </div>
);

export default ProjectCard