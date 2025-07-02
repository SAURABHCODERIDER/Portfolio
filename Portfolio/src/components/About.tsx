import { LiaLocationArrowSolid } from "react-icons/lia";
import saurabhimg2 from "../assets/myImage_port.jpg";
const About = () => {
  return (
    <section id="abouts" className="">
      <div className="flex justify-center items-center px-4 pb-2">
        <div className="h-0.5 w-full bg-gray-400 px-4" />
      </div>
      <div className="container mx-auto px-6">
        <h2 className="section-title text-md sm:text-2xl hover:text-teal-500 pb-2 font-serif font-bold text-gray-400">
          About Me:
          <LiaLocationArrowSolid className="transform rotate-90 inline-block" />
        </h2>
        <div className="max-w-6xl mx-auto flex justify-start items-start flex-col md:flex-row gap-2">
          <div className="md:w-full text-center text-sm sm:text-2xl md:text-left text-gray-400 font-serif font-bold">
            <p className="mb-4  ">
              Hello! I'm a dedicated and passionate Front-end developer with a
              knack for building elegant solutions to complex problems. My
              journey into web development started with a simple "Hello World"
              and has since grown into a full-fledged passion for crafting
              beautiful digital experiences.
            </p>
            <p className="mb-4">
              I thrive on turning ideas into reality through code. I'm always
              eager to learn new technologies and improve my skills to deliver
              high-quality, efficient, and scalable products.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails,
              reading a good book, or experimenting with new recipes in the
              kitchen.
            </p>
          </div>
          <div className="md:w-2/3 sm:w-1/2 w-full flex flex-col gap-2 flex-wrap justify-center bg-gray-800 items-center p-1 rounded-lg transform transition-transform hover:scale-95">
            <div className="  md:w-80   md:h-80 lg:w-100 lg:h-100 p-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
              <img
                src={saurabhimg2}
                alt="A second photo of you"
                className="w-120 h-80 lg:h-full object-cover border-3 border-teal-100 p-1 rounded-2xl bg-blue-200"
              />
            </div>
            <h1 className="font-md sm:text-sm md:text-md  lg:text-2xl text-teal-600 font-serif">
              Saurabh Kumar Front-end developer
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-4 pt-4">
        <div className="h-0.5 w-full bg-gray-200 px-4" />
      </div>
    </section>
  );
};

export default About;
