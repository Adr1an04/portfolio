import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mustang(props) {
    const { nodes, materials } = useGLTF('/models/mustang.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[2.852, 0, 0.085]} rotation={[-Math.PI, 0.436, -Math.PI]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials['S_Mustang_Color_1.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.S_Mustang_pAL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials.S_Mustang_outline}
                />
                <group position={[0.756, 0.316, 1.373]} rotation={[0, -0.436, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_32.geometry}
                        material={materials.S_Mustang_pAL}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_33.geometry}
                        material={materials.S_Mustang_outline}
                    />
                </group>
                <group position={[-0.756, 0.316, 1.373]} rotation={[0, -0.436, 0]} scale={[-1, 1, 1]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_35.geometry}
                        material={materials.S_Mustang_pAL}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_36.geometry}
                        material={materials.S_Mustang_outline}
                    />
                </group>
                <group position={[0.756, 0.316, -1.362]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_38.geometry}
                        material={materials.S_Mustang_pAL}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_39.geometry}
                        material={materials.S_Mustang_outline}
                    />
                </group>
                <group position={[-0.756, 0.316, -1.362]} scale={[-1, 1, 1]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_41.geometry}
                        material={materials.S_Mustang_pAL}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_42.geometry}
                        material={materials.S_Mustang_outline}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.S_Mustang_Color_1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.S_Mustang_pAL}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.S_Mustang_outline}
            />
            <group position={[0.756, 0.316, 1.373]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.S_Mustang_pAL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.S_Mustang_outline}
                />
            </group>
            <group position={[-0.756, 0.316, 1.373]} scale={[-1, 1, 1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.S_Mustang_pAL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.S_Mustang_outline}
                />
            </group>
            <group position={[0.756, 0.316, -1.362]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.S_Mustang_pAL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.S_Mustang_outline}
                />
            </group>
            <group position={[-0.756, 0.316, -1.362]} scale={[-1, 1, 1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.S_Mustang_pAL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.S_Mustang_outline}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials['Material.001']}
            />
        </group>
    )
}

useGLTF.preload('/models/mustang.glb')

export default Mustang;