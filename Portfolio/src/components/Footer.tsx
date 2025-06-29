import { FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className=" border-t  shadow shadow-gray-200 font-serif font-bold text-gray-400">
    <div className="container mx-auto px-6 py-6 text-gray-500 flex flex-col md:flex-row items-center justify-between">
      <a href="#home" className="hover:text-teal-500 mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
        &copy; {new Date().getFullYear()} Saurabhkumar. All Rights Reserved.
      </a>
      <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-end">
        <a
          href="https://www.linkedin.com/in/saurabh-kumar-full-stack-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white transition-colors duration-200 p-1 rounded-full"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-6 h-6 text-blue-800" />
        </a>
        <a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTO_pHXcNk8sGESmfKoy3_oFPp9i8gzJuCQQ&s"
            alt="Naukri"
            className="w-8 h-8 rounded-full object-contain"
          />
        </a>
        <a href="https://in.indeed.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.prod.website-files.com/5e1452b8eb497cb0d999c76f/64917c35f83116b982484b53_thumb-indeed.webp"
            alt="Indeed"
            className="w-8 h-8 rounded-full object-contain"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
