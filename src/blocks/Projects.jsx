import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import 'aos/dist/aos.css';
import { myProjects } from '../constants/index.js';
import linkIcon from '/assets/link.svg';

const Projects = () => {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  const projectListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": myProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.desc,
        "image": project.logo,
        "url": project.hasLink ? project.link : "https://adrianosor.io/projects"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Projects | Adrian Osorio Blanchard</title>
        <meta
          name="description"
          content="Explore some of my most memorable projects that showcase my skills and experiences."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://adrianosor.io/projects" />
        <script type="application/ld+json">
          {JSON.stringify(projectListStructuredData)}
        </script>
      </Helmet>
      <section id="projects" data-aos="fade-up" className="py-16 text-white">
        <div className="container mx-auto px-5">
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 mt-16">
              Projects
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-6xl mx-auto text-center">
              Below are some of my most memorable projects that showcase my skills and experiences.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project) => (
              <article
                key={project.id}
                className="bg-transparent border border-blue-100/50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <span className="text-sm opacity-80">{project.subdesc}</span>
                    {project.hasLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block ml-2 align-middle"
                      >
                        <img
                          src={linkIcon}
                          alt="External Link Icon"
                          className="w-4 h-auto filter brightness-0 invert"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag.id} className="small-icon-container flex items-center">
                      <img
                        src={tag.path}
                        alt={`${tag.name} icon`}
                        className="small-icon mr-1"
                      />
                      <span className="small-icon-name">{tag.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;