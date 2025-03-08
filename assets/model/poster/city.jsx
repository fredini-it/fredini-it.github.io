import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('/city.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={10} position={[0, 15, 30]} rotation={[-0.45, 0, 0]} />
      <spotLight intensity={271757.065} angle={0.262} penumbra={1} decay={2} position={[-10, 5, 5]} rotation={[-0.733, -0.979, 1]} target={nodes.Spot.target}>
        <primitive object={nodes.Spot.target} position={[0, 0, -1]} />
      </spotLight>
      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={10} position={[0, 15, 30]} rotation={[-0.45, 0, 0]} />
      <spotLight intensity={271757.065} angle={0.262} penumbra={1} decay={2} position={[10, 5, 5]} rotation={[-0.733, 0.979, 1.081]} target={nodes.Spot001.target}>
        <primitive object={nodes.Spot001.target} position={[0, 0, -1]} />
      </spotLight>
      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={10} position={[15.764, 17.96, -9.152]} rotation={[-2.054, 0.675, 2.269]} />
      <mesh geometry={nodes.Plane_1.geometry} material={materials['poster-Verde-escuro']} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials['poster-Vermelho-terracota']} />
    </group>
  )
}

useGLTF.preload('/city.glb')
