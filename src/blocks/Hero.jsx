import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Rocks from "../components/Rocks.jsx";
import NoFace from "../components/NoFace.jsx";
import { useTypewriter } from "react-simple-typewriter";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Campfire from "../components/Campfire.jsx";
import Floor from "../components/Floor.jsx";
import Sun from "../components/Sun.jsx";
import Link from "../components/Link.jsx";
import Cabin from "../components/Cabin.jsx";
import Clouds from "../components/Clouds.jsx";
import Sword from "../components/Sword.jsx";
import { Rayquaza } from '../components/Rayquaza.jsx';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Software Engineer",
      "Student",
      "Researcher",
      "Treasurer",
      "Traveler",
      "Gamer",
      "Photographer",
      "Hiker"
    ],
    loop: {},
    typeSpeed: 105,
    deleteSpeed: 65,
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Adrian Osorio Blanchard",
    "description": "Explore the creative portfolio of Adrian Osorio Blanchard.",
    "url": "https://adrianosor.io"
  };

  return (
    <>
      <Helmet>
        <title>Hero | Adrian Osorio Blanchard</title>
        <meta
          name="description"
          content="Welcome to my personal website, where I share my journey as a software engineer, student, researcher, and treasurer. Explore my projects, photography, and more."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://adrianosor.io" />
        <script type="application/ld+json">
          {JSON.stringify(heroStructuredData)}
        </script>
      </Helmet>

      <noscript>
        <div className="text-center p-4 bg-gray-800 text-white">
          Interactive 3D experience requires JavaScript to run.
        </div>
      </noscript>

      <section className="min-h-screen w-full flex flex-col relative" id="home" aria-label="Hero Section">
        <div className="flex flex-col items-center mt-16 absolute left-1/2 transform -translate-x-1/2 z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-center text-white whitespace-nowrap">
            Hey, I&#39;m Adrian Osorio!
          </h1>
          <div className="typewriter">
            <h2 className="hero_tag px-2">{typeEffect}</h2>
          </div>
        </div>
        
        {/* Canvas with ARIA label */}
        <div className="w-full h-full absolute inset-0" role="img" aria-label="3D visual representation of my portfolio">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30.2]} />
              <HeroCamera isMobile={isMobile}>
                <Floor position={sizes.floorPosition} rotation={[0, Math.PI / 2, 0]} scale={sizes.floorScale} />
                <Sun position={sizes.SunPosition} rotation={[2, 0, Math.PI / 2]} scale={sizes.SunScale} />
                <Clouds position={sizes.CloudsPosition} rotation={[0, Math.PI, 0]} scale={sizes.CloudsScale} />
                <Link position={sizes.linkPosition} rotation={[0, 0.8, 0]} scale={sizes.linkScale} />
                <Rocks position={sizes.rocksPosition} rotation={[0, 0, 0]} scale={sizes.rocksScale} />
                <Rayquaza position={sizes.HoohPosition} rotation={[0, Math.PI / 2, 0]} scale={sizes.HoohScale} />
                <Cabin position={sizes.cabinPosition} rotation={[0, 0.6, 0]} scale={sizes.cabinScale} />
                <NoFace position={sizes.noFacePosition} rotation={[0, -0.5, 0]} scale={sizes.noFaceScale} />
                <Sword position={sizes.swordPosition} rotation={[0, Math.PI, 0]} scale={sizes.swordScale} />
                <Cube position={sizes.cubePosition} />
                <Campfire position={sizes.campPosition} rotation={[0, Math.PI / 2, 0]} scale={sizes.campScale} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[100, 50, 50]} intensity={3} />
              </HeroCamera>
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-24 left-0 right-0 w-full z-10 c-space flex justify-center">
          <a href="/about" className="w-fit sm:w-auto">
            <Button
              name="Discovery"
              containerClass="sm:w-fit w-full sm:min-w-40 sm:text-lg mx-auto"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;