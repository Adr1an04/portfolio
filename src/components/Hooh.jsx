import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Hooh(props) {
    const group = useRef();

    const { nodes, materials, animations } = useGLTF('/models/hooh.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions && actions['Take 001']) {
            actions['Take 001'].reset().play().setLoop(true);

            actions['Take 001'].timeScale = 0.7;

            actions['Take 001'].onFinished = () => {
                actions['Take 001'].timeScale = -0.5;
                actions['Take 001'].reset().play();
            };
        }
    }, [actions]);

    useFrame(({ clock }) => {
        if (group.current) {
            group.current.position.x += 0.02;

            group.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.55 + 4;

            if (group.current.position.x > 100) {
                group.current.position.x = -100;
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
