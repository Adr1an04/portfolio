import React from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
    return (
        <section className="text-white">
            <div className="container mx-auto text-center px-4 sm:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 mt-16 whitespace-nowrap text-center"
                    id="experience"
                    data-aos="fade-right">
                    Experience
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-6xl mx-auto" data-aos="fade-up">
                    I have experience in both front-end and back-end development.
                    In my previous roles, I’ve worked on real-world applications, with teams,
                    and more. Below are some of the key experiences that have shaped my career:
                </p>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                        {workExperiences.map((item, index) => (
                            <div key={item.id} className="flex items-start px-4 sm:px-0" data-aos="fade-up" data-aos-delay={index * 100}>
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" // Adjust image size for mobile
                                />
                                <div className="text-left">
                                    <p className="text-blue-500 mb-1 text-sm sm:text-base">{item.duration}</p>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl text-left">
                                        {item.name} <span className="text-blue-500">— {item.pos}</span>
                                    </h3>
                                    <p className="text-gray-100 mt-1 text-sm sm:text-base lg:text-lg text-left">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
