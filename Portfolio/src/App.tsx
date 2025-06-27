import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projests';
import Skills from './components/Skills';
import SuccessModal from './components/SuccessModal';
import GlobalStyles from './components/GlobalStyle';
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a server.
        // For this example, we'll just show the modal.
        emailjs.sendForm('service_i9mvh8o','template_wulvfr5', e.target as HTMLFormElement, 'OYQaMzqjOrXrW_wRl').then((result)=>{
            console.log("result", result);
            toast.success('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
        })
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <GlobalStyles />
            
            <Header />
            <main className="pt-24 md:pt-32">
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact onFormSubmit={handleFormSubmit} />
            </main>
            <Footer />
            <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
            <ToastContainer/>
        </>
    );
}