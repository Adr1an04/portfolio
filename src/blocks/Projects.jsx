// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import { myProjects } from '../constants/index.js';
import linkIcon from '/assets/link.svg';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <section data-aos="fade-up" id="projects" className="relative overflow-hidden py-34 bg-gradient-to-r text-white ">
            <div className="container px-5 mx-auto text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 whitespace-nowrap">Projects</div>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-6xl mx-auto">
                    In my career, I&#39;ve been very fortunate to have had the opportunity to grow and continue learning
                    as much as I can. Below are some of my most memorable projects I&#39;ve worked on:
                </p>

                <Slider {...settings} className="space-x-6">
                    {myProjects.map((project) => (
                        <div
                            key={`${project.id}-${project.id}`}
                            className="p-6 flex flex-col bg-transparent border-2 border-white rounded-xl transition-all duration-300 transform sm:h-[450px] md:h-[520px] lg: h-[500px]"
                        >
                            <div className="mb-2 flex items-center text-center">
                                <div className="relative w-20 h-20 mb-4 ">
                                    <img
                                        src={project.logo}
                                        alt={project.title}
                                        className="w-20 h-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 object-cover p-2 "
                                    />
                                </div>
                                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-white text-left p-3 whitespace-nowrap ">
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
                            <p className="text-white text-base sm:text-lg md:text-xl xl:text2xl text-center max-w-lg mx-auto">
                                {project.desc}
                            </p>

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
