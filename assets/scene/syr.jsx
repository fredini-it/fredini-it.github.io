
import React from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = React.createContext()

export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/poster1.glb')
  const instances = React.useMemo(
    () => ({
      Cube: nodes.Cube,
      ROADrd: nodes['1ROAD_rd'],
      ROADrd1: nodes['1ROAD_rd2'],
      ROADsm: nodes['1ROAD_sm26'],
      A: nodes.a,
      B: nodes.b,
      Sm: nodes.sm_0,
      Sm1: nodes.sm_1,
      Sm2: nodes.sm_2,
      Sm3: nodes.sm_3,
      Sm4: nodes.sm_4,
      Sm5: nodes.sm_5,
      Sm6: nodes.sm_6,
      Sm7: nodes.sm_7,
      Sm8: nodes.sm_8,
      Sm9: nodes.sm_9,
      Sm10: nodes.sm_10,
      Sm11: nodes.sm_11,
      Sm12: nodes.sm_12,
      Sm13: nodes.sm_13,
      Sm14: nodes.sm_14,
      Sm15: nodes.sm_15,
      Sm16: nodes.sm_16,
      Sm17: nodes.sm_17,
      Sm18: nodes.sm_18,
      Sm19: nodes.sm_19,
      Sm20: nodes.sm_20,
      Sm21: nodes.sm_21,
      Sm22: nodes.sm_22,
      Sm23: nodes.sm_23,
      Sm24: nodes.sm_24,
      Sm25: nodes.sm_25,
      Sm26: nodes.sm_27,
      Sm27: nodes.sm_29,
      Sm28: nodes.sm_30,
      Sm29: nodes.sm_31,
      Sm30: nodes.sm_34,
      Sm31: nodes.sm_35,
      Sm32: nodes.sm_36,
      Sm33: nodes.sm_37,
      Sm34: nodes.sm_38,
      Sm35: nodes.sm_39,
      Sm36: nodes.sm_41,
      Sm37: nodes.sm_42,
    }),
    [nodes],
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function poster1(props) {
  const instances = React.useContext(context)
  return (
    <group {...props} dispose={null}>
      <instances.Cube name="Cube" />
      <instances.ROADrd name="1ROAD_rd" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.ROADrd1 name="1ROAD_rd2" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.ROADsm name="1ROAD_sm26" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.A name="a" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.B name="b" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm name="sm_0" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm1 name="sm_1" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm2 name="sm_2" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm3 name="sm_3" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm4 name="sm_4" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm5 name="sm_5" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm6 name="sm_6" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm7 name="sm_7" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm8 name="sm_8" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm9 name="sm_9" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm10 name="sm_10" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm11 name="sm_11" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm12 name="sm_12" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm13 name="sm_13" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm14 name="sm_14" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm15 name="sm_15" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm16 name="sm_16" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm17 name="sm_17" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm18 name="sm_18" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm19 name="sm_19" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm20 name="sm_20" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm21 name="sm_21" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm22 name="sm_22" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm23 name="sm_23" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm24 name="sm_24" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm25 name="sm_25" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm26 name="sm_27" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm27 name="sm_29" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm28 name="sm_30" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm29 name="sm_31" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm30 name="sm_34" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm31 name="sm_35" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm32 name="sm_36" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm33 name="sm_37" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm34 name="sm_38" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm35 name="sm_39" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm36 name="sm_41" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
      <instances.Sm37 name="sm_42" position={[-0.798, 4.751, 76.328]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/poster1.glb')
