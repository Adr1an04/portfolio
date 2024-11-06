import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Mustang(props) {
    const { nodes, materials } = useGLTF('/models/ae86.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Car.geometry}
                material={materials.Body}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheel1.geometry}
                    material={materials.Body}
                    position={[-0.012, -0.055, -0.021]}
                    rotation={[Math.PI, 0, 0]}
                    scale={1.315}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheel4.geometry}
                    material={materials.Body}
                    position={[-0.011, 0.05, -0.021]}
                    rotation={[Math.PI, 0, 0]}
                    scale={0.06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheel2.geometry}
                    material={materials.Body}
                    position={[-0.011, 0.05, 0.026]}
                    scale={0.06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wheel3.geometry}
                    material={materials.Body}
                    position={[-0.012, -0.055, 0.025]}
                    scale={0.06}
                />
            </mesh>
            <PerspectiveCamera
                makeDefault={false}
                far={10000}
                near={10}
                fov={36.109}
                position={[14.137, 6.789, 21.442]}
                rotation={[-0.247, 0.604, 0.143]}
                scale={100}
            />
        </group>
    )
}

useGLTF.preload('/models/ae86.glb')

export default Mustang;