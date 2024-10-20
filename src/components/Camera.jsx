import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Camera(props) {
    const { nodes, materials } = useGLTF('/models/camera.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.camera}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.objective}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/camera.glb')

export default Camera;