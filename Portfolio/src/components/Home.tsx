import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCloudDownload } from "react-icons/tb";
const Home = () => {
  const [currentIndex,setCurrentIndex] =useState(0)
  const [displayText,setDispalyText] = useState('')
  const date = new Date();
  const greetings = date.getHours();
  let greetText = " ";
  if (greetings < 12) {
    greetText = "Good Morning!,";
  } else if (greetings > 12 && greetings<17) {
    greetText = "Good Afternoon!,";
  } else if (greetings < 21) {
    greetText = "Good Evening!,";
  } else {
    greetText = "Good Night!";
  }

  const showText = `${greetText} Hi I'm Saurabh Kumar`;
  useEffect(()=>{
   if(currentIndex<showText.length){
    const id = setTimeout(()=>{
      setDispalyText((prev)=>prev+showText[currentIndex])
      setCurrentIndex((prev)=>prev+1)
    },100)
    return ()=>clearTimeout(id)
   }
  },[currentIndex,showText])
  return (
    <section
      id="home"
      className="container mx-auto px-6 py-4 md:py-8 flex flex-col md:flex-row items-center"
    >
      <div className="flex flex-col justify-center items-center md:w-full text-center md:text-left">
      <span className="text-xl">
        {date.toLocaleString()}
      </span>
      <div className="flex  flex-wrap px-4 justify-center items-center">
        <AnimatePresence>
        {displayText.split("").map((char, ind) => (
          <motion.span
          key={ind}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: ind * 0.05, type: "spring" }}
          className={`${
            ind < greetText.length ? "text-cyan-800" : "text-white"
          } text-4xl md:text-6xl sm:text-3xl font-extrabold leading-tight${char === " " ? " mx-2" : ""}`}
          >
          {char === " " ? "" : char}
          </motion.span>
        ))}
        </AnimatePresence>
      </div>
      <p className="md:text-lg lg:text-sm sm:text-xl text-teal-100 font-medium mb-8">
        A highly motivated and detail-oriented Frontend Developer from Uttar
        Pradesh
      </p>
      <p className="text-gray-300 text-sm sm:text-2xl max-w-lg mx-auto md:mx-0 mb-8">
        I specialize in creating engaging, high-performance, and user-friendly
        web applications with expertise in React.js, React Native, and
        JavaScript. Let's
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
        Download<TbCloudDownload className="text-xl mr-1" />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Home;