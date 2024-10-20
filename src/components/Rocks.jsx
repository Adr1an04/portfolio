import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Rocks(props) {
    const { nodes, materials } = useGLTF('/models/rocks_and_trees.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.001}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.129}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0'].geometry}
                        material={materials.material_1}
                        position={[1688.208, 1709.731, -480.839]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_1'].geometry}
                        material={materials.material_1}
                        position={[3407.074, 1089.461, -292.592]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_2'].geometry}
                        material={materials.material_1}
                        position={[0, 828.526, 1258.071]}
                        rotation={[0, 0.087, 0]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_3'].geometry}
                        material={materials.material_1}
                        position={[-2724.577, -1414.456, -647.604]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_4'].geometry}
                        material={materials.material_1}
                        position={[-3428.459, -306.538, -1112.381]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_5'].geometry}
                        material={materials.material_1}
                        position={[-1252.944, 751.054, -257.228]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_6'].geometry}
                        material={materials.material_1}
                        position={[5842.695, 102.485, -1056.709]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_7'].geometry}
                        material={materials.material_1}
                        position={[688.535, 499.389, -1038.325]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_8'].geometry}
                        material={materials.material_1}
                        position={[4402.564, 273.62, -647.604]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_9'].geometry}
                        material={materials.material_1}
                        position={[3084.472, 501.66, -1112.381]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_10'].geometry}
                        material={materials.material_1}
                        position={[1207.51, 1338.141, 937.174]}
                        rotation={[0, -0.175, 0]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_11'].geometry}
                        material={materials.material_1}
                        position={[3948.792, -457.343, -1187.251]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_12'].geometry}
                        material={materials.material_1}
                        position={[-3585.161, -137.984, -292.592]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������������_������������_0_13'].geometry}
                        material={materials.material_1}
                        position={[-2342.803, 74.521, 970.233]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0'].geometry}
                        material={materials.material_2}
                        position={[233.93, -194.58, -197.953]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0_1'].geometry}
                        material={materials.material_2}
                        position={[3533.125, -451.317, -787.074]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0_2'].geometry}
                        material={materials.material_2}
                        position={[5077.409, -1910.264, -257.007]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0_3'].geometry}
                        material={materials.material_2}
                        position={[-4735.093, -731.474, 4.159]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0_4'].geometry}
                        material={materials.material_2}
                        position={[-1390.269, -2047.184, -649.712]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0_5'].geometry}
                        material={materials.material_2}
                        position={[-5751.063, 2998.384, 599.237]}
                        rotation={[0, 0, -Math.PI / 9]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������_������������_0_6'].geometry}
                        material={materials.material_2}
                        position={[4173.463, 2710.673, 380.806]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_��������_��������_0'].geometry}
                        material={materials.material_3}
                        position={[-2549.977, -3367.974, -1281.041]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_��������_��������_0_1'].geometry}
                        material={materials.material_3}
                        position={[2414.168, 3321.858, -1233.882]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_��������_��������_0_2'].geometry}
                        material={materials.material_3}
                        position={[-1403.283, -708.034, -1011.832]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_��������_��������_0_3'].geometry}
                        material={materials.material_3}
                        position={[1820.297, 339.23, -1072.313]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_��������_��������_0_4'].geometry}
                        material={materials.material_3}
                        position={[2990.456, -751.615, -1156.448]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_��������_��������_0_5'].geometry}
                        material={materials.material_3}
                        position={[83.989, 2326.352, -1025.582]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0'].geometry}
                        material={materials.material}
                        position={[1805.002, 341.63, -1430.906]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_1'].geometry}
                        material={materials.material}
                        position={[3524.912, -472.611, -1431.109]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_2'].geometry}
                        material={materials.material}
                        position={[-2547.936, -3363.763, -1430.906]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_3'].geometry}
                        material={materials.material}
                        position={[-5773.821, 3023.627, -1467.24]}
                        rotation={[0, 0, -Math.PI / 9]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_4'].geometry}
                        material={materials.material}
                        position={[5086.784, -1936.884, -1139.026]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_5'].geometry}
                        material={materials.material}
                        position={[3002.205, -762.574, -1429.712]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_6'].geometry}
                        material={materials.material}
                        position={[-1390.507, -724.887, -1429.287]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_7'].geometry}
                        material={materials.material}
                        position={[4220.556, 2715.46, -1580.383]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_8'].geometry}
                        material={materials.material}
                        position={[89.377, 2342.945, -1511.74]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_9'].geometry}
                        material={materials.material}
                        position={[5068.673, -1944.797, -1428.197]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_10'].geometry}
                        material={materials.material}
                        position={[217.1, -195.017, -1432.369]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_11'].geometry}
                        material={materials.material}
                        position={[-4757.726, -707.14, -1438.594]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_12'].geometry}
                        material={materials.material}
                        position={[5061.608, -1932.445, -949.649]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_13'].geometry}
                        material={materials.material}
                        position={[-1386.859, -2070.428, -1432.536]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_������������__0_14'].geometry}
                        material={materials.material}
                        position={[2425.833, 3313.032, -1582.768]}
                        scale={7.743}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['����������_����������_0'].geometry}
                        material={materials.material_4}
                        position={[3614.598, -1224.422, -1180.818]}
                        scale={7.743}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/rocks_and_trees.glb')

export default Rocks;