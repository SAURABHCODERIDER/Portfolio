import { useContext, useEffect, useState } from "react";
import Logo from "../assets/logo_port.png";
import { TbCloudDownload } from "react-icons/tb";
import { ThemeContext } from "../ContextApi/ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 ${
    isScrolled
      ? "bg-gray-900/80 border-b border-gray-800 shadow shadow-gray-400"
      : ""
  }`;

  return (
    <header
      id="header"
      className={`${headerClasses} ${theme === "light" ? "dark:bg-black" : ""}`}
    >
      <nav className="">
        <div className="flex justify-between items-center mx-auto px-2">
          <div className="transform transition-transform hover:scale-95">
            <img
              src={Logo}
              alt="Saurabh"
              className="sm:w-24 w-12 sm:h-12 h-8 rounded-lg shadow shadow-white"
            />
          </div>
         
          <div className="flex basis-auto gap-8">
             <div className="flex gap-8 justify-center items-center">
            <div>
              <button
                onClick={toggleTheme}
                className="bg-gradient-to-r  p-1 dark:from-teal-100 rounded-full shadow shadow-gray-600"
              >
                <span className="flex items-center">
                  {theme === "dark" ? (
                    <MdDarkMode
                      size={22}
                      className="transition-colors duration-300 text-gray-900"
                    />
                  ) : (
                    <CiLight
                      size={22}
                      className="transition-colors duration-300 text-yellow-300"
                    />
                  )}
                </span>
              </button>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a
                className="flex gap-2 text-center text-gray-300 hover:text-teal-400 transition-colors font-serif"
                href="https://drive.google.com/file/d/1Vyzul_aBaqT3NuCEO4r3zmuaCX9vIOxR/view?usp=sharing"
                target="_blank"
              >
                Resume <TbCloudDownload className="text-xl mr-1" />
              </a>
              <a
                href="#home"
                className="text-gray-300 hover:text-teal-400 transition-colors font-serif"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-teal-400 transition-colors font-serif"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-teal-400 transition-colors font-serif"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-teal-400 transition-colors font-serif"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="btn btn-primary text-sm px-5 py-2  hover:text-teal-400 transition-colors font-serif"
              >
                Contact Me
              </a>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                ></path>
            </svg>
          </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-gray-800 mt-1 w-24 absolute right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <a
            href="#home"
            className="block py-2 px-4 text-md font-bold text-gray-300 hover:bg-gray-700 font-serif"
          >
            Home
          </a>
          <a
            href="#abouts"
            className="block py-2 px-4  text-gray-300 hover:bg-gray-700 text-md font-bold font-serif"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 text-md font-bold text-gray-300 hover:bg-gray-700 font-serif"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 px-4 text-md font-bold text-gray-300 hover:bg-gray-700 font-serif"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-md font-bold text-gray-300 hover:bg-gray-700 font-serif"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
