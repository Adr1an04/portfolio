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
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Ensure it repeats
  texture.repeat.set(1, 1);  // One image per face

  useGSAP(() => {
    gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(cubeRef.current.rotation, {
          y: hovered ? '+=2' : `+=${Math.PI * 2}`,
          x: hovered ? '+=2' : `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        });
  });

  return (
      <Float floatIntensity={2}>
        <mesh
            ref={cubeRef}
            castShadow
            receiveShadow
            geometry={new THREE.BoxGeometry(2, 2, 2)} // Create a default cube
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            {...props}
        >
          {/* Apply the same texture to all six faces */}
          <meshStandardMaterial attach="material-0" map={texture} />
          <meshStandardMaterial attach="material-1" map={texture} />
          <meshStandardMaterial attach="material-2" map={texture} />
          <meshStandardMaterial attach="material-3" map={texture} />
          <meshStandardMaterial attach="material-4" map={texture} />
          <meshStandardMaterial attach="material-5" map={texture} />
        </mesh>
      </Float>
  );
};

export default Cube;
