import { LiaLocationArrowSolid } from "react-icons/lia";
import saurabhimg2 from "../assets/myImg_port.png";
const About = () => {
  return (
    <section id="about" className="pt-36 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-2xl hover:text-teal-500 pb-4">
          About Me:
          <LiaLocationArrowSolid className="transform rotate-90 inline-block" />
        </h2>
        <div className="max-w-6xl mx-auto flex justify-start items-start flex-col md:flex-row gap-12">
          <div className="md:w-full text-center text-2xl md:text-left text-gray-300">
            <p className="mb-4">
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
          <div className="md:w-1/2 flex flex-col gap-4 flex-wrap justify-center bg-gray-800 items-center p-10 rounded-lg transform transition-transform hover:scale-95">
            <div className="w-84 h-80 md:w-80 md:h-72 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
              <img
                src={saurabhimg2}
                alt="A second photo of you"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-gray-100 font-bold text-2xl">
              Saurabh Kumar Front-end developer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;