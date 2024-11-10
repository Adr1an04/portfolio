import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {Cloud, PerspectiveCamera} from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';;
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
import Hooh from "../components/Hooh.jsx";



const Hero = () => {
    const [typeEffect] = useTypewriter({
        words: ["Software Engineer", "Student", "Researcher", "Traveler", "Gamer", "Photographer", "Hiker"],
        loop: {},
        typeSpeed: 105,
        deleteSpeed: 65,
    });

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({ maxWidth: 440 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    useEffect(() => {
        console.log({ isMobile, isTablet, isSmall, sizes });
    }, [isMobile, isTablet, isSmall]);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Text Container */}
            <div className="flex flex-col items-center mt-16 absolute left-1/2 transform -translate-x-1/2 z-10">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-center text-white whitespace-nowrap">
                    Hey, I'm Adrian Osorio!
                </p>
                <div className="typewriter">
                    <h1 className="hero_tag px-2 ">
                        {typeEffect}
                    </h1>
                </div>
            </div>

            {/* Canvas */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30.2]}/>
                        <HeroCamera isMobile={isMobile}>
                            <Floor position={sizes.floorPosition} rotation={[0, Math.PI / 2, 0]}
                                   scale={sizes.floorScale}/>
                            <Sun position={sizes.SunPosition} rotation={[2, 0, Math.PI / 2]} scale={sizes.SunScale}/>
                            <Clouds position={sizes.CloudsPosition} rotation={[0, Math.PI, 0]}
                                    scale={sizes.CloudsScale}/>
                            <Link position={sizes.linkPosition} rotation={[0, 0.8, 0]} scale={sizes.linkScale}/>
                            <Rocks position={sizes.rocksPosition} rotation={[0, 0, 0]} scale={sizes.rocksScale}/>
                            <Hooh position={sizes.HoohPosition} rotation={[0, Math.PI / 2, 0]} scale={sizes.HoohScale}/>
                            <Cabin position={sizes.cabinPosition} rotation={[0, 0.6, 0]}
                                   scale={sizes.cabinScale}/>
                            <NoFace position={sizes.noFacePosition} rotation={[0, -0.5, 0]} scale={sizes.noFaceScale}/>
                            <Sword position={sizes.swordPosition} rotation={[0, Math.PI, 0]} scale={sizes.swordScale}/>
                            <Cube position={sizes.cubePosition}/>
                            <Campfire position={sizes.campPosition} rotation={[0, Math.PI / 2, 0]}
                                      scale={sizes.campScale}/>
                            <ambientLight intensity={0.7}/>
                            <directionalLight position={[100, 50, 50]} intensity={3}/>
                        </HeroCamera>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-24 left-0 right-0 w-full z-10 c-space flex justify-center">
                <a href="#about" className="w-fit sm:w-auto">
                    <Button
                        name="Discovery"
                        isBeam={true}
                        containerClass="sm:w-fit w-full sm:min-w-40 sm:text-lg  mx-auto"
                    />
                </a>
            </div>

        </section>
    );
};

export default Hero;