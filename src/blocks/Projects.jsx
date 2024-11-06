import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { myProjects } from '../constants/index.js';
import linkIcon from '/assets/link.svg'; // import the link icon

const Projects = () => {
    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2, // Default to 3 on large screens
        slidesToScroll: 1,
        arrows: true, // Default to true (arrows visible)
        responsive: [
            {
                breakpoint: 1024, // Tablet view breakpoint
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablet
                    arrows: true, // Keep arrows visible on tablet
                },
            },
            {
                breakpoint: 780, // Mobile view breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    arrows: false, // Disable arrows on mobile
                },
            },
        ],
    };

    return (
        <section data-aos="fade-up" id="projects" className="relative overflow-hidden py-28 bg-gradient-to-r text-white">
            <div className="container px-5 mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 whitespace-nowrap">Projects</h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-6xl mx-auto" data-aos="fade-up">
                    In my career, I've been very fortunate to have had the opportunity to grow and continue learning
                    as much as I can. Below are some of my most memorable projects I've worked on:
                </p>

                <Slider {...settings} className="space-x-6">
                    {myProjects.map((project) => (
                        <div
                            key={project.id}
                            className="p-6 flex flex-col bg-transparent border-2 border-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform h-[500px]"
                        >
                            {/* Project Logo and Title */}
                            <div className="mb-6 flex items-center text-center">
                                <div className="relative w-20 h-20 mb-4">
                                    <img
                                        src={project.logo}
                                        alt={project.title}
                                        className="w-20 h-20 sm:w- sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-cover"
                                    />
                                </div>
                                <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-white text-left p-3 whitespace-nowrap ">
                                {project.title}
                                    <div
                                        className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-left flex items-center gap-2">
                                        <div>{project.subdesc}</div>
                                        {project.hasLink && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-1 flex-shrink-0 small-icon-container"
                                            >
                                                <img
                                                    src={linkIcon}
                                                    alt="Link Icon"
                                                    className="w-4 h-auto filter brightness-0 invert"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </h3>
                            </div>
                            {/* Project Description */}
                            <p className="text-white text-base sm:text-lg md:text-xl xl:text-2xl text-center max-w-lg mx-auto">
                                {project.desc}
                            </p>


                            {/* Technologies Used */}
                            <div className="flex mt-6 justify-center gap-4 flex-wrap">
                                {project.tags.map((tag) => (
                                    <div key={tag.id} className="small-icon-container">
                                        <img
                                            src={tag.path}
                                            alt={tag.name}
                                            className="small-icon"
                                        />
                                        <span className="small-icon-name">{tag.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Projects;
