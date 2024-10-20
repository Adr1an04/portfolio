import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MoneyBags(props) {
        const { nodes, materials } = useGLTF('/models/moneybags.glb')
        return (
            <group {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                            <group position={[0.537, 0.173, 1.104]}>
                                    <primitive object={nodes.Armature_rootJoint} />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.eyes2_1.geometry}
                                        material={materials.Material}
                                        position={[-0.538, -0.173, -1.104]}
                                        scale={0.983}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.body_1.geometry}
                                        material={materials.Material}
                                        position={[-0.537, -0.173, 0.969]}
                                        scale={0.824}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.suit001_1.geometry}
                                        material={materials.Material}
                                        position={[-0.537, -0.173, 0.969]}
                                        scale={0.824}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.eyelids_1.geometry}
                                        material={materials.Material}
                                        position={[-0.529, -0.188, -1.079]}
                                        scale={1.03}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.feet_1.geometry}
                                        material={materials.Material}
                                        position={[-0.537, -0.173, -1.003]}
                                        scale={0.858}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.monicle_1.geometry}
                                        material={materials.Material_monicle}
                                        position={[-0.702, -0.421, 1.438]}
                                        rotation={[1.233, -0.187, 0.207]}
                                        scale={[0.121, 0.121, 0.007]}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.nose_1.geometry}
                                        material={materials.Material}
                                        position={[-0.537, -0.156, -1.07]}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.eyebrows001_1.geometry}
                                        material={materials.Material}
                                        position={[-0.537, -0.216, -1.098]}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.ears_1.geometry}
                                        material={materials.Material}
                                        position={[-0.537, -0.173, -1.068]}
                                    />
                            </group>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.gem_1.geometry}
                                material={materials.material}
                                position={[1.824, -0.123, 1.238]}
                                rotation={[1.57, -0.004, -0.27]}
                                scale={0.031}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.bag_1.geometry}
                                material={materials.Material}
                                position={[-1.723, -0.631, -0.05]}
                                scale={0.463}
                            />
                    </group>
            </group>
        )
}

useGLTF.preload('/models/moneybags.glb')
export default MoneyBags;