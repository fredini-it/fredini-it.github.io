
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function poster1(props) {
  const { nodes, materials } = useGLTF('/poster1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="02f07b5a-a5cf-4e58-a6f8-a623f49cf60d"
        castShadow
        receiveShadow
        geometry={nodes['02f07b5a-a5cf-4e58-a6f8-a623f49cf60d'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '02f07b5a-a5cf-4e58-a6f8-a623f49cf60d' }}
      />
      <mesh
        name="100114fc-34d7-4778-b56a-eaf10f153ae1"
        castShadow
        receiveShadow
        geometry={nodes['100114fc-34d7-4778-b56a-eaf10f153ae1'].geometry}
        material={materials.Background_hedges_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '100114fc-34d7-4778-b56a-eaf10f153ae1' }}
      />
      <mesh
        name="15453411-2af1-4192-ac4d-b5d7400cd31a"
        castShadow
        receiveShadow
        geometry={nodes['15453411-2af1-4192-ac4d-b5d7400cd31a'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '15453411-2af1-4192-ac4d-b5d7400cd31a' }}
      />
      <mesh
        name="157353e9-38b5-4cae-bf57-c6df6605b9da"
        castShadow
        receiveShadow
        geometry={nodes['157353e9-38b5-4cae-bf57-c6df6605b9da'].geometry}
        material={materials.Sky_Projection_01}
        position={[0, -1.18, 0]}
        rotation={[-Math.PI / 2, 0, -0.136]}
        scale={243.237}
        userData={{ name: '157353e9-38b5-4cae-bf57-c6df6605b9da' }}
      />
      <mesh
        name="177f0e91-1975-464d-93a8-ae28ed46d7d3"
        castShadow
        receiveShadow
        geometry={nodes['177f0e91-1975-464d-93a8-ae28ed46d7d3'].geometry}
        material={materials.Vegetation_Planes02}
        position={[43.831, -10.784, 172.479]}
        rotation={[-Math.PI / 2, 0.052, 0.281]}
        scale={[100, 100, 84.885]}
        userData={{ name: '177f0e91-1975-464d-93a8-ae28ed46d7d3' }}
      />
      <mesh
        name="1ae9bfa3-d249-4d73-bd7d-a659bdfc96be"
        castShadow
        receiveShadow
        geometry={nodes['1ae9bfa3-d249-4d73-bd7d-a659bdfc96be'].geometry}
        material={materials.Sky_Projection_02}
        position={[0, -1.18, 0]}
        rotation={[-Math.PI / 2, 0, -0.136]}
        scale={243.237}
        userData={{ name: '1ae9bfa3-d249-4d73-bd7d-a659bdfc96be' }}
      />
      <mesh
        name="1afe6cd8-4fbb-4e47-80c3-f934c28a19f0"
        castShadow
        receiveShadow
        geometry={nodes['1afe6cd8-4fbb-4e47-80c3-f934c28a19f0'].geometry}
        material={materials.env_mat_barn}
        position={[33.372, -2.62, 47.306]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '1afe6cd8-4fbb-4e47-80c3-f934c28a19f0' }}
      />
      <mesh
        name="1b83771b-d608-46d7-972c-998b7de5d381"
        castShadow
        receiveShadow
        geometry={nodes['1b83771b-d608-46d7-972c-998b7de5d381'].geometry}
        material={materials.env_mat_courtyard_cutout}
        position={[15.396, 0.048, 1.154]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '1b83771b-d608-46d7-972c-998b7de5d381' }}
      />
      <mesh
        name="1d69af5e-1f22-4cc8-8da7-25fd9b53014c"
        castShadow
        receiveShadow
        geometry={nodes['1d69af5e-1f22-4cc8-8da7-25fd9b53014c'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '1d69af5e-1f22-4cc8-8da7-25fd9b53014c' }}
      />
      <mesh
        name="20f47bb7-87cd-4e0d-9d35-c79ce6d5c387"
        castShadow
        receiveShadow
        geometry={nodes['20f47bb7-87cd-4e0d-9d35-c79ce6d5c387'].geometry}
        material={materials.Trees_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '20f47bb7-87cd-4e0d-9d35-c79ce6d5c387' }}
      />
      <mesh
        name="24e87ec5-e323-4575-a6b9-fce993c4fbde"
        castShadow
        receiveShadow
        geometry={nodes['24e87ec5-e323-4575-a6b9-fce993c4fbde'].geometry}
        material={materials.Round_bushes_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '24e87ec5-e323-4575-a6b9-fce993c4fbde' }}
      />
      <mesh
        name="2b8d2a7e-5917-47d5-b487-6ceae86a8efc"
        castShadow
        receiveShadow
        geometry={nodes['2b8d2a7e-5917-47d5-b487-6ceae86a8efc'].geometry}
        material={materials.Trees_billboards_02_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '2b8d2a7e-5917-47d5-b487-6ceae86a8efc' }}
      />
      <mesh
        name="3afe1ca7-1c86-47c9-a4d4-a0c7a1dc1554"
        castShadow
        receiveShadow
        geometry={nodes['3afe1ca7-1c86-47c9-a4d4-a0c7a1dc1554'].geometry}
        material={materials.Gravel_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.001}
        userData={{ name: '3afe1ca7-1c86-47c9-a4d4-a0c7a1dc1554' }}
      />
      <mesh
        name="40310e12-3b83-4a87-81c0-3e218da02f7f"
        castShadow
        receiveShadow
        geometry={nodes['40310e12-3b83-4a87-81c0-3e218da02f7f'].geometry}
        material={materials.Trees_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '40310e12-3b83-4a87-81c0-3e218da02f7f' }}
      />
      <mesh
        name="47e6cc58-7052-4343-a3f4-e4644f0c3c6d"
        castShadow
        receiveShadow
        geometry={nodes['47e6cc58-7052-4343-a3f4-e4644f0c3c6d'].geometry}
        material={materials.Sky_Projection_04}
        position={[0, -1.18, 0]}
        rotation={[-Math.PI / 2, 0, -0.136]}
        scale={243.237}
        userData={{ name: '47e6cc58-7052-4343-a3f4-e4644f0c3c6d' }}
      />
      <mesh
        name="4d76f6b4-362d-451a-81ef-5eedb0208db0"
        castShadow
        receiveShadow
        geometry={nodes['4d76f6b4-362d-451a-81ef-5eedb0208db0'].geometry}
        material={materials.Trees_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '4d76f6b4-362d-451a-81ef-5eedb0208db0' }}
      />
      <mesh
        name="68e4ee11-1299-4f9a-ab87-42d5bc04bd4c"
        castShadow
        receiveShadow
        geometry={nodes['68e4ee11-1299-4f9a-ab87-42d5bc04bd4c'].geometry}
        material={materials.env_mat_villa}
        position={[36.614, -0.057, -1.611]}
        rotation={[-Math.PI / 2, 0, -0.033]}
        scale={100}
        userData={{ name: '68e4ee11-1299-4f9a-ab87-42d5bc04bd4c' }}
      />
      <mesh
        name="6d82906c-61ad-42b9-ae75-92e9bb0180c6"
        castShadow
        receiveShadow
        geometry={nodes['6d82906c-61ad-42b9-ae75-92e9bb0180c6'].geometry}
        material={materials.Vegetation_Planes}
        position={[43.831, -10.784, 172.479]}
        rotation={[-Math.PI / 2, 0.052, 0.281]}
        scale={100}
        userData={{ name: '6d82906c-61ad-42b9-ae75-92e9bb0180c6' }}
      />
      <mesh
        name="6dd610e6-b67e-46fd-89a7-0d6c95fdedc7"
        castShadow
        receiveShadow
        geometry={nodes['6dd610e6-b67e-46fd-89a7-0d6c95fdedc7'].geometry}
        material={materials.Sky_Projection_03}
        position={[0, -1.18, 0]}
        rotation={[-Math.PI / 2, 0, -0.136]}
        scale={243.237}
        userData={{ name: '6dd610e6-b67e-46fd-89a7-0d6c95fdedc7' }}
      />
      <mesh
        name="79defc4d-d2a5-4180-aea0-0fc88d0e4243"
        castShadow
        receiveShadow
        geometry={nodes['79defc4d-d2a5-4180-aea0-0fc88d0e4243'].geometry}
        material={materials.Side_structure_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '79defc4d-d2a5-4180-aea0-0fc88d0e4243' }}
      />
      <mesh
        name="7c4bfc84-1a2d-4980-b75a-748e35ca7362"
        castShadow
        receiveShadow
        geometry={nodes['7c4bfc84-1a2d-4980-b75a-748e35ca7362'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '7c4bfc84-1a2d-4980-b75a-748e35ca7362' }}
      />
      <mesh
        name="7e451130-4072-4f61-b2b7-8939d5eb7fcd"
        castShadow
        receiveShadow
        geometry={nodes['7e451130-4072-4f61-b2b7-8939d5eb7fcd'].geometry}
        material={materials.Asset_group_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '7e451130-4072-4f61-b2b7-8939d5eb7fcd' }}
      />
      <mesh
        name="913030ca-798b-482e-8aad-65eb76ac972d"
        castShadow
        receiveShadow
        geometry={nodes['913030ca-798b-482e-8aad-65eb76ac972d'].geometry}
        material={materials.Trees_billboard_03_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        userData={{ name: '913030ca-798b-482e-8aad-65eb76ac972d' }}
      />
      <mesh
        name="9265f37c-4dfe-4893-9551-085467e0800d"
        castShadow
        receiveShadow
        geometry={nodes['9265f37c-4dfe-4893-9551-085467e0800d'].geometry}
        material={materials.Side_garden_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '9265f37c-4dfe-4893-9551-085467e0800d' }}
      />
      <mesh
        name="92b564f2-1be6-4f70-a3b7-998cee59f568"
        castShadow
        receiveShadow
        geometry={nodes['92b564f2-1be6-4f70-a3b7-998cee59f568'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '92b564f2-1be6-4f70-a3b7-998cee59f568' }}
      />
      <mesh
        name="941c2028-0d08-4701-aa71-f8d515441384"
        castShadow
        receiveShadow
        geometry={nodes['941c2028-0d08-4701-aa71-f8d515441384'].geometry}
        material={materials.Trees_billboards_02_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '941c2028-0d08-4701-aa71-f8d515441384' }}
      />
      <mesh
        name="980eaf03-7974-4a81-a0ba-6cdd02363f99"
        castShadow
        receiveShadow
        geometry={nodes['980eaf03-7974-4a81-a0ba-6cdd02363f99'].geometry}
        material={materials.Grass_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '980eaf03-7974-4a81-a0ba-6cdd02363f99' }}
      />
      <mesh
        name="9ce9a553-5220-4459-b162-51f0c7c717ba"
        castShadow
        receiveShadow
        geometry={nodes['9ce9a553-5220-4459-b162-51f0c7c717ba'].geometry}
        material={materials.Sky_Projection_05}
        position={[0, -1.18, 0]}
        rotation={[-Math.PI / 2, 0, -0.136]}
        scale={243.237}
        userData={{ name: '9ce9a553-5220-4459-b162-51f0c7c717ba' }}
      />
      <mesh
        name="9d7feef8-72cc-4217-a06f-7496b73a13c1"
        castShadow
        receiveShadow
        geometry={nodes['9d7feef8-72cc-4217-a06f-7496b73a13c1'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: '9d7feef8-72cc-4217-a06f-7496b73a13c1' }}
      />
      <mesh
        name="a5cbf392-9213-4ad4-9020-cf1c2dc4d3b4"
        castShadow
        receiveShadow
        geometry={nodes['a5cbf392-9213-4ad4-9020-cf1c2dc4d3b4'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'a5cbf392-9213-4ad4-9020-cf1c2dc4d3b4' }}
      />
      <mesh
        name="a7a163de-e225-410a-9195-210e875b6fc1"
        castShadow
        receiveShadow
        geometry={nodes['a7a163de-e225-410a-9195-210e875b6fc1'].geometry}
        material={materials.Trees_billboard_03_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        userData={{ name: 'a7a163de-e225-410a-9195-210e875b6fc1' }}
      />
      <mesh
        name="a858de9d-a32e-48f8-acc2-38149bf8f4ec"
        castShadow
        receiveShadow
        geometry={nodes['a858de9d-a32e-48f8-acc2-38149bf8f4ec'].geometry}
        material={materials.Trees_billboards_02_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'a858de9d-a32e-48f8-acc2-38149bf8f4ec' }}
      />
      <mesh
        name="a90cdb46-4ef6-4ef3-a76b-b65d05adbb4e"
        castShadow
        receiveShadow
        geometry={nodes['a90cdb46-4ef6-4ef3-a76b-b65d05adbb4e'].geometry}
        material={materials.Trees_billboards_02_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'a90cdb46-4ef6-4ef3-a76b-b65d05adbb4e' }}
      />
      <mesh
        name="ae303fc2-4a06-4146-8bfc-5821c808db49"
        castShadow
        receiveShadow
        geometry={nodes['ae303fc2-4a06-4146-8bfc-5821c808db49'].geometry}
        material={materials.Vases_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'ae303fc2-4a06-4146-8bfc-5821c808db49' }}
      />
      <mesh
        name="c4c75d74-5153-4ca2-886f-8dcdf441e338"
        castShadow
        receiveShadow
        geometry={nodes['c4c75d74-5153-4ca2-886f-8dcdf441e338'].geometry}
        material={materials.Trees_alley_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'c4c75d74-5153-4ca2-886f-8dcdf441e338' }}
      />
      <mesh
        name="c74572eb-8636-48e4-a2a1-15d8026f1813"
        castShadow
        receiveShadow
        geometry={nodes['c74572eb-8636-48e4-a2a1-15d8026f1813'].geometry}
        material={materials.Hedge_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'c74572eb-8636-48e4-a2a1-15d8026f1813' }}
      />
      <mesh
        name="d4260763-9aed-40d4-9ab1-bea1f717ef22"
        castShadow
        receiveShadow
        geometry={nodes['d4260763-9aed-40d4-9ab1-bea1f717ef22'].geometry}
        material={materials.Gate_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'd4260763-9aed-40d4-9ab1-bea1f717ef22' }}
      />
      <mesh
        name="e1dae316-5a75-4e35-b8eb-5c46062305d7"
        castShadow
        receiveShadow
        geometry={nodes['e1dae316-5a75-4e35-b8eb-5c46062305d7'].geometry}
        material={materials.env_mat_roundabout}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        userData={{ name: 'e1dae316-5a75-4e35-b8eb-5c46062305d7' }}
      />
      <mesh
        name="e2a1d535-8830-454b-a8db-eadad99ebc75"
        castShadow
        receiveShadow
        geometry={nodes['e2a1d535-8830-454b-a8db-eadad99ebc75'].geometry}
        material={materials.Trees_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'e2a1d535-8830-454b-a8db-eadad99ebc75' }}
      />
      <mesh
        name="eecdf201-8d98-4c14-a9ae-e3ead6e8d94a"
        castShadow
        receiveShadow
        geometry={nodes['eecdf201-8d98-4c14-a9ae-e3ead6e8d94a'].geometry}
        material={materials.Trees_billboard_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'eecdf201-8d98-4c14-a9ae-e3ead6e8d94a' }}
      />
      <mesh
        name="f1cf28b5-31a9-4b29-9cf0-b97fe00b92e6"
        castShadow
        receiveShadow
        geometry={nodes['f1cf28b5-31a9-4b29-9cf0-b97fe00b92e6'].geometry}
        material={materials.Round_vases_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        userData={{ name: 'f1cf28b5-31a9-4b29-9cf0-b97fe00b92e6' }}
      />
      <mesh
        name="fc98307c-802f-4be9-a826-69eb4d29114b"
        castShadow
        receiveShadow
        geometry={nodes['fc98307c-802f-4be9-a826-69eb4d29114b'].geometry}
        material={materials.Grass_assets_bake}
        position={[0, 0.347, 0]}
        rotation={[-Math.PI / 2, 0, -0.383]}
        scale={[48.395, 48.395, 178.377]}
        userData={{ name: 'fc98307c-802f-4be9-a826-69eb4d29114b' }}
      />
    </group>
  )
}

useGLTF.preload('/poster1.glb')
