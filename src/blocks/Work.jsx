// eslint-disable-next-line no-unused-vars
import React from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
    return (
        <section className="text-white " id="experience">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 whitespace-nowrap"
                    data-aos="fade-right">
                    Experience & <span className="text-blue-500">Education</span>
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-6xl mx-auto"
                   data-aos="fade-up">
                    I have hands-on experience in both front-end and back-end development.
                    In my previous roles, I&#39;ve worked on real-world projects, collaborated with teams,
                    and more. Below are some of the key experiences that have shaped my
                    career so far:
                </p>


                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10">
                        {workExperiences.map((item, index) => (
                            <div key={item.id} className="pl-5" data-aos="fade-up"
                                 data-aos-delay={index * 100}>
                                <p className="text-blue-500 mb-1 text-sm text-left">{item.duration}</p>
                                <h3 className="text-lg md:text-xl lg:text-2xl whitespace-nowrap text-left">
                                    {item.name} <span className="text-blue-500">— {item.pos}</span>
                                </h3>
                                <p className="text-gray-100 mt-1 text-sm md:text-lg lg:text-l text-left">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
