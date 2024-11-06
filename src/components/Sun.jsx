import React, { useRef } from 'react'
import { useGLTF, Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Sun(props) {
    const { nodes, materials } = useGLTF('/models/Sun.glb')
    const groupRef = useRef()

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <Center>
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
    )
}

useGLTF.preload('/models/Sun.glb')

export default Sun;
