import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import Mustang from "../components/Mustang.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Rocks from "../components/Rocks.jsx";
import NoFace from "../components/NoFace.jsx";
import MoneyBags from "../components/MoneyBags.jsx";
import { useTypewriter } from "react-simple-typewriter";
import Cube from "../components/Cube.jsx";

const Hero = () => {
    const [typeEffect] = useTypewriter({
        words: ["Software Engineer", "Student", "Brother", "Photographer", "Gamer", "Researcher", "Hiker"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60,
    });

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({ maxWidth: 440 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // Debugging to ensure responsiveness is working
    useEffect(() => {
        console.log({ isMobile, isTablet, isSmall, sizes });
    }, [isMobile, isTablet, isSmall]);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            {/* Text Container */}
            <div className="flex flex-col items-center mt-24 absolute left-1/2 transform -translate-x-1/2 z-10">
                <p className="text-4xl sm:text-6xl lg:text6xl text-center text-white text-nowrap">
                    Hi, I'm Adrian!
                </p>
                <div className="typewriter">
                    <h1 className="hero_tag">
                        {typeEffect}
                    </h1>
                </div>
            </div>

            {/* Canvas */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30.2]} />
                        <MoneyBags position={sizes.moneyPosition} rotation={[0, 0.7, 0]} scale={sizes.moneyScale} />
                        <Rocks position={sizes.rocksPosition} rotation={[0.1, 0, 0]} scale={sizes.rocksScale} />
                        <Mustang position={sizes.carPosition} rotation={[3.25, 5.55, Math.PI]} scale={sizes.carScale} />
                        <NoFace position={sizes.noFacePosition} rotation={[0, -0.5, 0]} scale={sizes.noFaceScale} />
                        <Cube position={sizes.cubePosition}/>
                        <ambientLight intensity={0.7} />
                        <directionalLight position={[100, 50, 50]} intensity={3} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
