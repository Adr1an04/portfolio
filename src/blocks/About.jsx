import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import '../index.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adrian Osorio Blanchard",
    "url": "https://adrianosor.io/about",
    "image": "https://adrianosor.io/assets/me.JPG",
    "jobTitle": "Software Engineer & More",
    "description": "I’m Adrian Osorio, a computer science student at the University of Central Florida, Knight Hacks Treasurer, and Researcher at the U.N.A.R.Y lab. In my free time, I enjoy hiking, photography, working on cars, playing video games, and spending time with friends and family.",
    "sameAs": [
      "https://github.com/Adr1an04",
      "https://www.linkedin.com/in/adrianosoriob/"
    ]
  };

  return (
    <>
      <Helmet>
        <title>About | Adrian Osorio Blanchard</title>
        <meta
          name="description"
          content="A brief introduction about Adrian Osorio Blanchard."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://adrianosor.io/about" />
        <script type="application/ld+json">
          {JSON.stringify(aboutStructuredData)}
        </script>
      </Helmet>
      <section className="my-20 p-8 md:p-20 text-white" id="about">
        <div className="flex flex-col items-center transition-transform ease-in-out duration-1000 transform animate-on-scroll">
          <img
            src="assets/me.JPG"
            alt="Who am I?"
            loading="lazy"
            className="w-10/12 max-w-[1000px] h-[250px] md:h-[500px] object-cover rounded-lg lg:rounded-xl shadow-lg mb-8"
            data-aos="fade-up"
          />
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 whitespace-nowrap">
              Who am I?
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 max-w-6xl mx-auto">
              I’m Adrian Osorio, a computer science student at the University of Central Florida,
              Knight Hacks Treasurer, and Researcher at the U.N.A.R.Y lab.
              In my free time, I enjoy hiking, photography, working on cars, playing video games, and spending
              time with friends and family.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-6 md:flex-row max-w-7xl mx-auto">
          <div
            className="md:flex-1 md:mr-8 text-center md:w-full md:pr-1 md:py-1 md:border-r-2 border-b-0 border-r-blue-400 border-b-blue-400 p-4 md:p-1 ml-0"
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
              I have committed myself to learning new skills across various zones.
              As I continue to learn more, here are some of the technologies I am now familiar with:
            </p>
          </div>

          <div className="flex-1">
            <div className="mt-4">
              <h4 className="text-2xl" data-aos="fade-right">
                Frameworks:
              </h4>
              <div className="flex gap-5 flex-wrap mt-3" data-aos="fade-right">
                {['React', 'Express', 'SpringBoot', 'Tailwind', 'ThreeJS', 'NodeJS', 'PyTorch', 'TensorFlow'].map(
                  (framework, index) => (
                    <div className="icon-container" key={framework} data-aos-delay={index * 100}>
                      <img src={`assets/${framework.toLowerCase()}.svg`} alt={framework} className="icon" />
                      <span className="icon-name text-center">{framework}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-2xl" data-aos="fade-right">
                Languages:
              </h4>
              <div className="flex gap-5 flex-wrap mt-3" data-aos="fade-right">
                {['Java', 'JavaScript', 'TS', 'Python', 'HTML', 'CSS', 'C', 'C++'].map((language, index) => (
                  <div className="icon-container" key={language}>
                    <img src={`assets/${language.toLowerCase()}.svg`} alt={language} className="icon w-12 h-12" />
                    <span className="icon-name text-center">{language}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-2xl" data-aos="fade-right">
                Tools:
              </h4>
              <div className="flex gap-5 flex-wrap mt-3" data-aos="fade-right">
                {['Blender', 'MongoDB', 'Github', 'Anaconda', 'VS code'].map((tool, index) => (
                  <div className="icon-container" key={tool}>
                    <img
                      src={`assets/${tool.toLowerCase().replace(/\s+/g, '')}.svg`}
                      alt={tool}
                      className="icon w-12 h-12"
                    />
                    <span className="icon-name text-center">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-2xl" data-aos="fade-right">
                AI &amp; LLMs:
              </h4>
              <div className="flex gap-5 flex-wrap mt-3" data-aos="fade-right">
                {['GPT', 'Llama', 'LangChain', 'Hugging Face'].map((aiTool, index) => (
                  <div className="icon-container" key={aiTool}>
                    <img
                      src={`assets/${aiTool.toLowerCase().replace(/\s+/g, '')}.svg`}
                      alt={aiTool}
                      className="icon w-12 h-12"
                    />
                    <span className="icon-name text-center">{aiTool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center text-center" data-aos="fade-up">
          <div className="text-2xl md:text-3xl text-nowrap mt-8 mb-6" data-aos="fade-up">
            Check out some of my links!
          </div>

          <div className="flex gap-16 mt-4 md:mt-8" data-aos="fade-up">
            <a
              href="https://github.com/Adr1an04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-500 flex flex-col items-center"
            >
              <img
                src="/assets/github.svg"
                alt="GitHub"
                className="w-12 h-12 transition duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="mt-2 text-center text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/adrianosoriob/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-500 flex flex-col items-center"
            >
              <img
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                className="w-12 h-12 transition duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="mt-2 text-center text-sm">LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-500 flex flex-col items-center"
            >
              <img
                src="/assets/resume.svg"
                alt="Resume"
                className="w-12 h-12 transition duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="mt-2 text-center text-sm">Resume</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;