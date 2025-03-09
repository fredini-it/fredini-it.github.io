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
      <spotLight intensity={135878.533} angle={Math.PI / 8} penumbra={1} decay={2} position={[9.23, 5, -8]} rotation={[-2.629, 0.788, 1.299]} target={nodes.Spot003.target}>
        <primitive object={nodes.Spot003.target} position={[0, 0, -1]} />
      </spotLight>
      <pointLight intensity={54351.413} decay={2} position={[0, 5, -5]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={54351.413} decay={2} position={[-8, 5, 4]} rotation={[-Math.PI / 2, 0, 0]} />
      <spotLight intensity={135878.533} angle={Math.PI / 8} penumbra={1} decay={2} position={[-10, 2, 5]} rotation={[-0.291, -1.09, 1.345]} target={nodes.Spot004.target}>
        <primitive object={nodes.Spot004.target} position={[0, 0, -1]} />
      </spotLight>
      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={15} position={[-25, 13.28, -21.72]} rotation={[-2.61, -0.781, -2.749]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.pColor1} position={[4.5, 0, 5.75]} scale={[7.5, 0.65, 7.5]} />
    </group>
  )
}

useGLTF.preload('/city.glb')
