
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function NoFace(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/kaonashi.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Body_7">
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={materials.Body_black}
                                />
                            </group>
                            <group name="Face_9" position={[0, 0.964, 0.498]} rotation={[1.459, 0, 0]}>
                                <mesh
                                    name="Object_6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_6.geometry}
                                    material={materials.Hands_white}
                                />
                            </group>
                            <group
                                name="Cylinder_10"
                                position={[0.262, 1.081, 0.538]}
                                rotation={[1.446, 0.018, -0.144]}
                                scale={[0.733, 0.991, 0.731]}>
                                <mesh
                                    name="Object_8"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_8.geometry}
                                    material={materials.Body_black}
                                />
                            </group>
                            <group
                                name="Hands001_14"
                                position={[0.425, -0.004, 0.676]}
                                rotation={[Math.PI / 2, 0, 0]}>
                                <mesh
                                    name="Object_10"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_10.geometry}
                                    material={materials.Hands_white}
                                />
                            </group>
                            <group
                                name="BezierCurve002_15"
                                position={[0.059, 0.771, 0.657]}
                                rotation={[Math.PI / 2, 0, 0]}>
                                <mesh
                                    name="Object_12"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_12.geometry}
                                    material={materials.Body_black}
                                />
                            </group>
                            <group
                                name="BezierCurve003_16"
                                position={[0, 0, 0.683]}
                                rotation={[Math.PI / 2, 0, 0]}>
                                <mesh
                                    name="Object_14"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_14.geometry}
                                    material={materials.material}
                                />
                            </group>
                            <group name="Empty007_17" position={[2.076, 1.843, 8.302]} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/kaonashi.glb')

export default NoFace;
