import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Link(props) {
    const { nodes, materials } = useGLTF('/models/link.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 5.163, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Skin_0.geometry}
                    material={materials.Skin}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Black_0.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Brown_0.geometry}
                    material={materials.Brown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Leggings_0.geometry}
                    material={materials.Leggings}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Green_Light_0.geometry}
                    material={materials.Green_Light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Green_0.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Silver_0.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Ruby_0.geometry}
                    material={materials.Ruby}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Hair_0.geometry}
                    material={materials.Hair}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_BrownDark_0.geometry}
                    material={materials.BrownDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Blue_0.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Shirt_0.geometry}
                    material={materials.Shirt}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/link.glb')

export default Link;