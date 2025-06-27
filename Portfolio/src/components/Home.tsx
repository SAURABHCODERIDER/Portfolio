import { RxResume } from "react-icons/rx";
const Home = () => {
  return (
    <section
      id="home"
      className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center"
    >
      <div className="flex flex-col justify-center items-center md:w-full text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Hi, I'm Saurabh Kumar
        </h1>
        <p className="text-lg md:text-xl text-teal-300 font-medium mb-8">
          A highly motivated and detail-oriented Frontend Developer from Uttar
          Pradesh
        </p>
        <p className="text-gray-300 text-2xl max-w-lg mx-auto md:mx-0 mb-8">
          I specialize in creating engaging, high-performance, and user-friendly
          web applications with expertise in React.js, React Native, and
          JavaScript <span className="text-xs align-super">[5, 6]</span>. Let's
          build something amazing together.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="btn btn-primary hover:text-blue-700 font-bold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn btn-secondary hover:text-blue-700 font-bold"
          >
            Get In Touch
          </a>
          <a
            href="#skills"
            className="flex justify-center gap-2 items-center btn btn-secondary hover:text-blue-700 font-bold"
          >
            Add CV <RxResume />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;