import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Campfire(props) {
    const { nodes, materials } = useGLTF('/models/campfire.glb')
    const fireMesh1 = useRef()
    const fireMesh2 = useRef()

    useFrame((state) => {


        if (fireMesh1.current && fireMesh2.current) {

            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.135
            fireMesh1.current.scale.set(scale, scale, scale)
            fireMesh2.current.scale.set(scale, scale, scale)
        }
    })

    return (
        <group {...props} dispose={null}>
            <mesh
                ref={fireMesh1}
                castShadow
                receiveShadow
                geometry={nodes['campfire_01_Plane003-Mesh'].geometry}
                material={materials.FF5722}
            />
            <mesh
                ref={fireMesh2}
                castShadow
                receiveShadow
                geometry={nodes['campfire_01_Plane003-Mesh_3'].geometry}
                material={materials.FFEB3B}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['campfire_01_Plane003-Mesh_1'].geometry}
                material={materials['78909C']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['campfire_01_Plane003-Mesh_2'].geometry}
                material={materials.FFCC88}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['campfire_01_Plane003-Mesh_4'].geometry}
                material={materials['795548']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['campfire_01_Plane003-Mesh_5'].geometry}
                material={materials.CFD8DC}
            />
        </group>
    )
}

useGLTF.preload('/models/campfire.glb')

export default Campfire
