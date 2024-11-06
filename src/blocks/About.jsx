import { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';
import Button from "../components/Button.jsx"; // Import AOS styles

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const handleScrollToContact = () => {
        // Scroll to the contact section with id "contact"
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="my-20 p-8 md:p-20 text-white" id="about">
            <div
                className="flex flex-col items-center transition-transform ease-in-out duration-1000 transform animate-on-scroll">
                <img
                    src="assets/me.JPG"
                    alt="Who am I?"
                    className="w-9/12 max-w-[1000px] h-[250px] md:h-[500px] object-cover rounded-lg lg:rounded-xl shadow-lg mb-8"
                    data-aos="fade-up"
                />
                <div className="text-center max-w-[1000px] w-9/12" data-aos="fade-up">
                    <h2 className="text-4xl md:text-4xl">Who am I?</h2>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl flex-wrap">
                        I’m Adrian Osorio, a computer science student at the University of Central Florida and
                        researcher at the U.N.A.R.Y lab. In my free time, I enjoy hiking, photography, working
                        on cars, playing video games, and spending time with friends and family.
                    </p>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="flex flex-col mt-8 md:flex-row max-w-7xl mx-auto">
                {/* Skills Section Paragraph */}
                <div
                    className="md:flex-1 md:mr-8 text-center md:w-full md:pr-1 md:py-1 md:border-r-2 border-b-0 border-r-blue-400 border-b-blue-400 p-4 md:p-1 ml-0"  // Adjusted padding and added consistent borders
                    data-aos="fade-up"
                >
                    <div className="mb-4 flex justify-center">  {/* Centering the image */}
                        <img
                            src="assets/skills.svg"
                            alt="skills"
                            className="w-full max-w-[500px] h-[250px] md:h-[300px] mx-auto"
                            data-aos="fade-right"
                        />
                    </div>
                    <h3 className="text-4xl md:text-4xl">Skills</h3>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-[500px] text-center mx-auto">
                        Over the past year, I have committed myself to learning new skills across various technologies.
                        As I continue to expand my knowledge, here are some of the technologies I am now familiar with:
                    </p>
                </div>

                {/* Frameworks, Languages, Tools, AI & LLMs Section */}
                <div className="flex-1">

                    {/* Frameworks */}
                    <div className="mt-4">
                        <h4 className="text-2xl" data-aos="fade-right">Frameworks:</h4>
                        <div className="flex gap-5 flex-wrap mt-3 " data-aos="fade-right">
                            {['React', 'Express', 'SpringBoot', 'Tailwind', 'ThreeJS', 'NodeJS', 'PyTorch', 'TensorFlow'].map((framework, index) => (
                                <div className="icon-container" key={framework}
                                     data-aos-delay={index * 100}>
                                    <img src={`assets/${framework.toLowerCase()}.svg`} alt={framework}
                                         className="icon"/>
                                    <span className="icon-name text-center">{framework}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mt-5">
                        <h4 className="text-2xl" data-aos="fade-right">Languages:</h4>
                        <div className="flex gap-5 flex-wrap mt-3 " data-aos="fade-right">
                            {['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'C', 'C++'].map((language, index) => (
                                <div className="icon-container" key={language}>
                                    <img src={`assets/${language.toLowerCase()}.svg`} alt={language}
                                         className="icon w-12 h-12"/>
                                    <span className="icon-name text-center">{language}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="mt-5">
                        <h4 className="text-2xl" data-aos="fade-right">Tools:</h4>
                        <div className="flex gap-5 flex-wrap mt-3" data-aos="fade-right">
                            {['Blender', 'MongoDB', 'Github', 'Anaconda', 'VS code'].map((tool, index) => (
                                <div className="icon-container" key={tool}>
                                    <img src={`assets/${tool.toLowerCase().replace(/\s+/g, '')}.svg`} alt={tool}
                                         className="icon w-12 h-12"/>
                                    <span className="icon-name text-center">{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI & LLMs */}
                    <div className="mt-5">
                        <h4 className="text-2xl" data-aos="fade-right">AI & LLMs:</h4>
                        <div className="flex gap-5 flex-wrap mt-3" data-aos="fade-right">
                            {['GPT', 'Llama', 'LangChain', 'Hugging Face'].map((aiTool, index) => (
                                <div className="icon-container" key={aiTool}>
                                    <img src={`assets/${aiTool.toLowerCase().replace(/\s+/g, '')}.svg`} alt={aiTool}
                                         className="icon w-12 h-12"/>
                                    <span className="icon-name text-center">{aiTool}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Open to Work Section */}
            <div className="mt-16 text-center">
                <img src="assets/usa.svg"
                     alt="USA"
                     className="w-auto h-auto mx-auto"
                     data-aos="fade-right"
                     style={{filter: "invert(36%) sepia(58%) saturate(1809%) hue-rotate(197deg) brightness(95%) contrast(91%)"}}/>
                <h3 className="text-4xl" data-aos="fade-up">Located in the U.S.</h3>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center" data-aos="fade-up">
                    I am an aspiring software engineer seeking opportunities across the U.S.<br/>
                    With experience in full-stack development, I’m eager to contribute and take on challenging projects.
                </p>
            </div>

            {/* Contact Section */}
            <div className="mt-16 flex flex-col items-center" data-aos="fade-up">
                {/* Image above the email */}
                <img src="assets/mountains.JPG"
                     alt="Your Portfolio"
                     data-aos="fade-right"
                     className=" w-9/12 max-w-[1000px] h-[250px] md:h-[500px] object-cover rounded-lg lg:rounded-xl shadow-lg mb-8"/>

                <h4 className="text-3xl md:text-3xl text-nowrap" data-aos="fade-up">Like my portfolio so far?</h4>
                <p className="mt-2 "
                   data-aos="fade-up">
                    Feel free to reach out to me!
                </p>

                {/* Email Box */}
                <div className=" mt-4 left-0 right-0 w-full z-10 c-space flex justify-center " data-aos="fade-up">
                    <a href="#contact" className="w-fit sm:w-auto">
                        <Button
                            name="Contact"
                            isBeam={true}
                            containerClass="sm:w-fit w-full sm:min-w-40 sm:text-lg  mx-auto"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
