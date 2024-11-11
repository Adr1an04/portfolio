// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './blocks/Navbar.jsx';
import Hero from './blocks/Hero.jsx';
import About from "./blocks/About.jsx";
import Work from "./blocks/Work.jsx";
import Projects from "./blocks/Projects.jsx";
import Contact from "./blocks/Contact.jsx";
import Footer from "./blocks/Footer.jsx";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <main className="max-auto mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
