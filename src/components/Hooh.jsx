import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Hooh(props) {
    const group = useRef();
    const [direction, setDirection] = useState('forward'); // Direction of the animation
    const { nodes, materials, animations } = useGLTF('/models/hooh.glb');
    const { actions } = useAnimations(animations, group);

    const animationDuration = 10; // Increased to allow for smoother transitions

    useEffect(() => {
        if (actions && actions['Take 001']) {
            actions['Take 001'].reset().play().setLoop(false);
            actions['Take 001'].timeScale = 0.9;

            actions['Take 001'].onFinished = () => {
                if (direction === 'forward') {
                    setDirection('reverse');
                    actions['Take 001'].timeScale = -0.5;
                    actions['Take 001'].reset().play();
                } else {
                    setDirection('forward');
                    actions['Take 001'].timeScale = 0.5;
                    actions['Take 001'].reset().play();
                }
            };

            actions['Take 001'].play();
        }
    }, [actions, direction]);

    useFrame(({ clock }) => {
        if (group.current) {
            group.current.position.x += 0.04;

            group.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.55 + 4;

            if (group.current.position.x > 100) {
                group.current.position.x = -100;
            }

            const currentTime = clock.elapsedTime % animationDuration;
            if (actions['Take 001']) {
                actions['Take 001'].time = currentTime;
            }

            const wingRotation = Math.sin(clock.elapsedTime * 2) * 0.5;
            const wings = group.current.getObjectByName('wings');
            if (wings) {
                wings.rotation.x = wingRotation;
            }
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="flying_animationFBX" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.head}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.body}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_11"
                                        geometry={nodes.Object_11.geometry}
                                        material={materials.wings}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_13"
                                        geometry={nodes.Object_13.geometry}
                                        material={materials.Material_277}
                                        skeleton={nodes.Object_13.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_15"
                                        geometry={nodes.Object_15.geometry}
                                        material={materials.body}
                                        skeleton={nodes.Object_15.skeleton}
                                    />
                                    <group name="Object_6" position={[0, -3.3, 16.414]} rotation={[-1.703, 0, 0]} />
                                    <group name="Object_8" position={[0, -7.371, 11.764]} rotation={[-1.563, 0, 0]} />
                                    <group name="Object_10" position={[0, -3.3, 16.414]} rotation={[-1.703, 0, 0]} />
                                    <group name="Object_12" position={[0, -3.3, 16.414]} rotation={[-1.703, 0, 0]} />
                                    <group name="Object_14" position={[0, -3.3, 16.414]} rotation={[-1.703, 0, 0]} />
                                    <group name="head" rotation={[-1.703, 0, 0]} />
                                    <group
                                        name="tail"
                                        position={[-0.788, 27.753, -38.247]}
                                        rotation={[-1.563, 0, 0]}
                                    />
                                    <group name="wings" rotation={[-1.703, 0, 0]} />
                                    <group name="leg" rotation={[-1.703, 0, 0]} />
                                    <group name="hoohbody" rotation={[-1.703, 0, 0]} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

// Preload the GLTF model for faster loading
useGLTF.preload('/models/hooh.glb');

export default Hooh;
