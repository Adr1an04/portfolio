
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function NoFace(props) {
    const { nodes, materials } = useGLTF('/models/kaonashi.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.272}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.Cuerda}
                        position={[1.019, 0.889, -0.164]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials.Metal}
                        position={[0.301, 0.539, 0.783]}
                        rotation={[-3.13, 0.784, 3.122]}
                        scale={0.366}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_8.geometry}
                        material={materials.Metal}
                        position={[0.13, 0.857, 0.622]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={0.027}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_10.geometry}
                        material={materials.Metal}
                        position={[0.301, 0.719, 0.783]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={0.272}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials.Metal}
                        position={[0.301, 1.315, 0.784]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={0.332}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_14.geometry}
                        material={materials.Vela}
                        position={[0.337, -0.528, 0.814]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={0.527}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_16.geometry}
                        material={materials.Metal}
                        position={[0.3, 1.623, 0.785]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={0.017}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_18.geometry}
                        material={materials.Flama}
                        position={[0.304, 1.075, 0.784]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={0.013}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_20.geometry}
                        material={materials.Cuerpo}
                        position={[0.303, 1.05, 0.784]}
                        rotation={[-Math.PI, -0.001, -Math.PI]}
                        scale={[0.002, 0.02, 0.002]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_24.geometry}
                        material={materials.Cuerpo}
                        position={[0, 1.001, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_26.geometry}
                        material={materials.Brazos}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_28.geometry}
                        material={materials.Mascara}
                        position={[0.002, 3.618, -0.01]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_30.geometry}
                        material={materials.Marcas}
                        position={[1.341, 3.618, 0.057]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_32.geometry}
                        material={materials.Cuerpo}
                        position={[1.341, 3.618, 0.023]}
                        rotation={[0, 0.013, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_34.geometry}
                        material={materials.Marcas}
                        position={[1.341, 3.618, -0.01]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_36.geometry}
                        material={materials.Marcas}
                        position={[1.341, 3.618, -0.02]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_38.geometry}
                        material={materials.Cuerpo}
                        position={[1.341, 3.618, -0.021]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_40.geometry}
                        material={materials.Marcas}
                        position={[1.341, 3.618, -0.01]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/kaonashi.glb')

export default NoFace;