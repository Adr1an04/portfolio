import { useRef, useState } from 'react';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cube = ({ ...props }) => {
    const cubeRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Load the texture
    const texture = useTexture('textures/boomer.png');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    texture.encoding = THREE.sRGBEncoding;
    texture.anisotropy = 16;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.transparent = true;

    // GSAP animation trigger
    useGSAP(() => {
        gsap.to(cubeRef.current.rotation, {
            y: hovered ? '+=0.5' : '+=0.05',
            x: hovered ? '+=0.5' : '+=0.05',
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.to(cubeRef.current.scale, {
            x: hovered ? 1.3 : 1,
            y: hovered ? 1.3 : 1,
            z: hovered ? 1.3 : 1,
            duration: 0.,
            ease: "elastic.out(1, 0.75)"
        });

    }, [hovered]);

    return (
        <Float floatIntensity={2}>
            <mesh
                ref={cubeRef}
                castShadow
                receiveShadow
                geometry={new THREE.BoxGeometry(2, 2, 2)}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                {...props}
            >
                {/* Apply the texture to all sides */}
                <meshStandardMaterial
                    attach="material-0"
                    map={texture}
                    transparent
                />
                <meshStandardMaterial
                    attach="material-1"
                    map={texture}
                    transparent
                />
                <meshStandardMaterial
                    attach="material-2"
                    map={texture}
                    transparent
                />
                <meshStandardMaterial
                    attach="material-3"
                    map={texture}
                    transparent
                />
                <meshStandardMaterial
                    attach="material-4"
                    map={texture}
                    transparent
                />
                <meshStandardMaterial
                    attach="material-5"
                    map={texture}
                    transparent
                />
            </mesh>
        </Float>
    );
};

export default Cube;
