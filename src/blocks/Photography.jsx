import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import natureImg from '/assets/wilderness.jpg';
import cityImg from '/assets/nyc.jpg';
import portraitImg from '/assets/mando.jpg';
import architectureImg from '/assets/elk.jpg';
import wildlifeImg from '/assets/boomer.jpg';
import fam from '/assets/fam.jpg';
import heart from '/assets/gyal.jpg';
import cityImg2 from '/assets/nyc2.jpg';
import leo from '/assets/leo.jpg';
import orlando from '/assets/orlando.jpg';
import car from '/assets/car.jpg';
import mePic from '/assets/mePic.jpg';

const photos = [
  { id: 1, url: natureImg, title: 'Rocky Mountains', category: 'Nature' },
  { id: 2, url: cityImg, title: 'New York', category: 'City' },
  { id: 3, url: portraitImg, title: 'The Mandalorian', category: 'Portrait' },
  { id: 4, url: architectureImg, title: 'Elk', category: 'Nature' },
  { id: 5, url: wildlifeImg, title: 'Boomer', category: 'Golden Retriever' },
  { id: 6, url: fam, title: 'Machas', category: 'Family' },
  { id: 7, url: heart, title: '<3', category: 'Family' },
  { id: 8, url: cityImg2, title: 'New York', category: 'City' },
  { id: 9, url: leo, title: 'Leo', category: 'Cavalier' },
  { id: 10, url: orlando, title: 'Orlando', category: 'City' },
  { id: 11, url: mePic, title: 'Me', category: 'Photography' },
  { id: 12, url: car, title: 'Mustang', category: 'My Car' },
];

const photographyStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Photography Portfolio",
  "description": "Explore my photography portfolio, showcasing a collection of my favorite photos.",
  "itemListElement": photos.map((photo, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "ImageObject",
      "name": photo.title,
      "description": photo.category,
      "contentUrl": photo.url
    }
  }))
};

const Photography = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Helmet>
        <title>Photography | Adrian Osorio Blanchard</title>
        <meta
          name="description"
          content="Explore my photography portfolio, showcasing my favorite photos."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://adrianosor.io/photography" />
        <script type="application/ld+json">
          {JSON.stringify(photographyStructuredData)}
        </script>
      </Helmet>
      <section 
        className="h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center relative cursor-pointer"
        style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?code,developer")' }}
        data-aos="zoom-out"
        onClick={() => {
          const timeline = document.getElementById('timeline');
          if (timeline) {
            timeline.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white bg-clip-text"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Photography
          </h1>
          <p 
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            My favorite photos that I have taken
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <svg 
            className="w-6 h-6 text-white animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <p className="mt-2 text-white text-sm">Scroll Down</p>
        </div>
      </section>
      <div id="timeline"></div>

      {/* Gallery Grid */}
      <div className="relative py-20 bg-gradient-to-b from-blue-200 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-80 object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
                    <span className="inline-block px-3 py-1 text-sm bg-blue-600/80 rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative py-16 bg-blue-800">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Thanks for watching!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Made with &lt;3 - Adrian
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photography;