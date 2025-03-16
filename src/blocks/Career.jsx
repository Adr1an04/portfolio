import React, { useEffect } from 'react';
import { workExperiences } from '../constants/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

function Career() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const careerStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": workExperiences.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": item.pos,
        "description": item.title,
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Career | Adrian Osorio Blanchard</title>
        <meta
          name="description"
          content="Explore my career journey, showcasing my professional growth and milestones."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://adrianosor.io/career" />
        <script type="application/ld+json">
          {JSON.stringify(careerStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen text-white relative overflow-hidden">
        <section id="timeline" className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-100 to-transparent z-20" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 mt-16" data-aos="fade-up">
              Career
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-6xl mx-auto text-center"
              data-aos="fade-up"
            >
              Here are some of the most important milestones in my career. I have been fortunate to have
              had the opportunity to work with some amazing companies and teams.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-600 to-transparent z-20" />

            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Line */}
              <div
                className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-300 to-blue-400 h-full rounded-full shadow-xl -ml-px"
                data-aos="zoom-in"
                data-aos-delay="200"
              />

              {workExperiences.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`mb-16 flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
                    data-aos={`fade-${isEven ? 'right' : 'left'}`}
                    data-aos-delay={index * 100}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 p-6 rounded-2xl backdrop-blur-lg border border-blue-100/50 shadow-xl hover:shadow-2xl ${
                        isEven ? 'mr-8' : 'ml-8'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)',
                        willChange: 'transform, filter',
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                          />
                        )}
                        <div>
                          <p className="text-sm text-white-400 font-mono">{item.duration}</p>
                          <h3 className="text-2xl font-bold break-words">{item.pos}</h3>
                          <p className="text-white">{item.name}</p>
                        </div>
                      </div>
                      <p className="text-white-400 leading-relaxed">{item.title}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tech?.map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-sm bg-gray-700/50 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <div className="absolute w-8 h-8 bg-blue-300 rounded-full shadow-lg ring-4 ring-blue-400/30 animate-pulse" />
                      <span className="absolute text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/5 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s infinite`,
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Career;