import React, { useRef, useEffect } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Sun(props) {
    const { nodes, materials } = useGLTF('/models/Sun.glb');
    const groupRef = useRef();

    // Apply emissive properties to the materials
    useEffect(() => {
        if (materials.FF9800) {
            materials.FF9800.emissive = new THREE.Color(5, 0.2, 0); // Bright yellow/orange glow
            materials.FF9800.emissiveIntensity = 1.3; // Adjust intensity of the glow
        }
        if (materials.FF5722) {
            materials.FF5722.emissive = new THREE.Color(1, 0.3, 0); // Deep orange/red glow
            materials.FF5722.emissiveIntensity = 1.5; // Adjust intensity of the glow
        }
    }, [materials]);

    // Rotate the Sun
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <Center>
                {/* Sun meshes with glow effect */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['sun_01_Sphere-Mesh'].geometry}
                    material={materials.FF9800}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['sun_01_Sphere-Mesh_1'].geometry}
                    material={materials.FF5722}
                />
            </Center>
        </group>
    );
}

useGLTF.preload('/models/Sun.glb');

export default Sun;
