import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Floor(props) {
    const { nodes, materials } = useGLTF('/models/Base.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={materials.dirt} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_0_1.geometry}
                    material={materials.grass}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/Base.glb')

export default Floor;
