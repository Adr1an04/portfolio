import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Computer(props) {
    const { nodes, materials } = useGLTF('/models/computer.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Computer_Mesh_lambert2_0.geometry}
                material={materials.lambert2}
                scale={0.01}
            />
        </group>
    )
}

useGLTF.preload('/models/computer.glb')

export default Computer;
