import { useEffect, useState } from "react";
import Logo from '../assets/logo_port.png'
import { TbCloudDownload } from "react-icons/tb";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 border-b border-gray-800 shadow shadow-gray-400' : ''
    }`;

    return (
        <header id="header" className={`${headerClasses}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="transform transition-transform hover:scale-95">
                  <img src={Logo} alt="Saurabh"className="w-28 h-20 rounded-lg shadow shadow-white"/>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <a className="flex gap-2 text-center text-gray-300 hover:text-teal-400 transition-colors" href="https://drive.google.com/file/d/1Vyzul_aBaqT3NuCEO4r3zmuaCX9vIOxR/view?usp=sharing" target="_blank">Resume <TbCloudDownload className="text-xl mr-1" /></a>
                    <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
                    <a href="#skills" className="text-gray-300 hover:text-teal-400 transition-colors">Skills</a>
                    <a href="#contact" className="btn btn-primary text-sm px-5 py-2  hover:text-teal-400 transition-colors">Contact Me</a>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                    <a href="#about" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">About</a>
                    <a href="#projects" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">Projects</a>
                    <a href="#skills" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">Skills</a>
                    <a href="#contact" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header