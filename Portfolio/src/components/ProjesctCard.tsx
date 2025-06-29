import type { ProjectCardType } from "../types/project";

const ProjectCard = ({
    title,
    description,
    imageUrl,
    liveUrl,
    sourceUrl,
}: ProjectCardType) => (
    <div className="flex w-full  glass-effect rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex-col ">
        <div className="w-full">
            <img
                className="object-cover w-full h-48"
                src={imageUrl}
                alt={`${title} Screenshot`}
            />
        </div>
        <div className="p-6   justify-between  w-full font-serif font-bold text-gray-400">
            <div>
                <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
                <p className="text-gray-400 text-base mb-4">{description}</p>
            </div>
            <div className="flex space-x-4 mt-4">
                <a
                    href={liveUrl}
                    className="text-teal-400 hover:text-teal-300 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
                <a
                    href={sourceUrl}
                    className="text-gray-400 hover:text-white font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Source Code
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;