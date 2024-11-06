import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Clouds(props) {
    const { nodes, materials } = useGLTF('/models/Clouds.glb')
    const groupRef = useRef()

    // Add movement to simulate drifting clouds
    useFrame(({ clock }) => {
        if (groupRef.current) {
            const time = clock.getElapsedTime()
            const speed = 0.04
            const range = 20
            const movement = Math.sin(time * speed) * range
            groupRef.current.position.x = movement
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials.mat21} />
        </group>
    )
}

useGLTF.preload('/models/Clouds.glb')

export default Clouds;
