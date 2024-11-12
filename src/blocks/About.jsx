import 'aos/dist/aos.css';
import Button from "../components/Button.jsx";

const About = () => {

    return (
        <section className="my-20 p-8 md:p-20 text-white" id="about">
            <div
                className="flex flex-col items-center transition-transform ease-in-out duration-1000 transform animate-on-scroll">
                <img
                    src="assets/me.JPG"
                    alt="Who am I?"
                    loading="lazy"
                    className="w-10/12 max-w-[1000px] h-[250px] md:h-[500px] object-cover rounded-lg lg:rounded-xl shadow-lg mb-8"
                    data-aos="fade-up"
                />
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 whitespace-nowrap">Who am I?</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 max-w-6xl mx-auto">
                        I’m Adrian Osorio, a computer science student at the University of Central Florida and
                        researcher at the U.N.A.R.Y lab. In my free time, I enjoy hiking, photography, working
                        on cars, playing video games, and spending time with friends and family.
                    </p>
                </div>
            </div>

            <div className="flex flex-col mt-6 md:flex-row max-w-7xl mx-auto">
                <div
                    className="md:flex-1 md:mr-8 text-center md:w-full md:pr-1 md:py-1 md:border-r-2 border-b-0 border-r-blue-400 border-b-blue-400 p-4 md:p-1 ml-0"  // Adjusted padding and added consistent borders
                    data-aos="fade-up"
                >
                    <div className="mb-4 flex justify-center">
                        <img
                            src="assets/skills.svg"
                            loading="lazy"
                            alt="skills"
                            className="w-full max-w-[500px] h-[250px] md:h-[300px] mx-auto"
                            data-aos="fade-right"
                        />
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 whitespace-nowrap">Skills</h3>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-[500px] text-center mx-auto">
                        Over the past year, I have committed myself to learning new skills across various technologies.
                        As I continue to expand my knowledge, here are some of the technologies I am now familiar with:
                    </p>
                </div>

                <div className="flex-1">

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

            <div className="mt-16 text-center">
                <img src="assets/usa.svg"
                     alt="USA"
                     loading="lazy"
                     className="w-auto h-auto mx-auto"
                     data-aos="fade-right"
                     style={{filter: "invert(34%) sepia(58%) saturate(1309%) hue-rotate(180deg) brightness(95%) contrast(91%)"}}/>
                <h3 className="text-3xl sm:text-4xl md:text-5xl text-center mt-4 whitespace-nowrap"
                    data-aos="fade-up">Located in the U.S.</h3>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mt-6 max-w-5xl mx-auto" data-aos="fade-up">
                    I am an aspiring software engineer seeking opportunities across the U.S.
                    With experience in full-stack development, I’m eager to contribute and take on challenging projects.
                </p>
            </div>

            <div className="mt-16 flex flex-col items-center text-center" data-aos="fade-up">
                <img
                    src="assets/mountains.JPG"
                    alt="Your Portfolio"
                    loading="lazy"
                    data-aos="fade-right"
                    className="w-10/12 max-w-[1000px] h-[250px] md:h-[500px] object-cover rounded-lg lg:rounded-xl shadow-lg mb-8"
                />

                <div className="flex gap-6 mt-3md:mt-8" data-aos="fade-up">
                    <a href="https://github.com/Adr1an04" target="_blank" rel="noopener noreferrer"
                       className="social-icon hover:text-blue-500">
                        <img
                            src="/assets/github.svg"
                            alt="GitHub"
                            className="w-1-0 h-10 transition duration-300 ease-in-out transform hover:scale-110"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/adrianosoriob/" target="_blank" rel="noopener noreferrer"
                       className="social-icon hover:text-blue-500">
                        <img
                            src="/assets/linkedin.svg"
                            alt="LinkedIn"
                            className="w-10 h-10 transition duration-300 ease-in-out transform hover:scale-110"
                        />
                    </a>

                    <a href="/assets/Adrian_Osorio_Resume.pdf" target="_blank" rel="noopener noreferrer"
                       className="social-icon hover:text-blue-500">
                        <img
                            src="/assets/resume.svg"
                            alt="Resume"
                            className="w-10 h-10 transition duration-300 ease-in-out transform hover:scale-110"
                        />
                    </a>
                </div>

                <div className="text-3xl md:text-4xl text-nowrap mt-3" data-aos="fade-up">
                    Like my portfolio so far?
                </div>
                <p className="mt-2 text-lg md:text-xl text-gray-100" data-aos="fade-up">
                    Feel free to reach out to me!
                </p>

                <div className="mt-8 mb-10 sm:w-fit w-full z-10 flex justify-center" data-aos="fade-up">
                    <a href="#contact" className="w-full sm:w-auto">
                        <Button
                            name="Contact"
                            containerClass="sm:w-fit w-full sm:min-w-40 sm:text-lg mx-auto"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;