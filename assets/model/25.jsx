
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function 21(props) {
  const { nodes, materials } = useGLTF('/25.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="BrakePedalInterior"
        castShadow
        receiveShadow
        geometry={nodes.BrakePedalInterior.geometry}
        material={materials.interior}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="CaliperLF" position={[-1.438, 0.34, 0.822]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4002"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4002.geometry}
          material={materials.ext_brake_caliper}
        />
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4002_1"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4002_1.geometry}
          material={materials.CaliperBadgeA}
        />
      </group>
      <group name="CaliperRF" position={[-1.438, 0.34, -0.822]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4003"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4003.geometry}
          material={materials.ext_brake_caliper}
        />
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4003_1"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4003_1.geometry}
          material={materials.CaliperBadgeA}
        />
      </group>
      <group name="CaliperRR" position={[1.311, 0.366, -0.802]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4005"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4005.geometry}
          material={materials.ext_brake_caliper}
        />
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4005_1"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4005_1.geometry}
          material={materials.CaliperBadgeA}
        />
      </group>
      <mesh
        name="ChassisBadge"
        castShadow
        receiveShadow
        geometry={nodes.ChassisBadge.geometry}
        material={materials.BadgeA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ChassisBase"
        castShadow
        receiveShadow
        geometry={nodes.ChassisBase.geometry}
        material={materials.Base}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ChassisCarbon1M"
        castShadow
        receiveShadow
        geometry={nodes.ChassisCarbon1M.geometry}
        material={materials.Carbon1M}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ChassisCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.ChassisCarbon2.geometry}
        material={materials.ext_carbon}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ChassisCarbon2M"
        castShadow
        receiveShadow
        geometry={nodes.ChassisCarbon2M.geometry}
        material={materials.Carbon2M}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="ChassisColoured" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Coloured_Geo_lodA"
          castShadow
          receiveShadow
          geometry={nodes.Coloured_Geo_lodA.geometry}
          material={materials.Coloured}
        />
        <mesh
          name="Coloured_Geo_lodA_1"
          castShadow
          receiveShadow
          geometry={nodes.Coloured_Geo_lodA_1.geometry}
          material={materials.ext_chrome}
        />
      </group>
      <mesh
        name="ChassisEngine"
        castShadow
        receiveShadow
        geometry={nodes.ChassisEngine.geometry}
        material={materials.EngineA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="ChassisGlass" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Window_Geo_lodA"
          castShadow
          receiveShadow
          geometry={nodes.Window_Geo_lodA.geometry}
          material={materials.glass_windshield}
        />
        <mesh
          name="Window_Geo_lodA_1"
          castShadow
          receiveShadow
          geometry={nodes.Window_Geo_lodA_1.geometry}
          material={materials.glass_taillight}
        />
        <mesh
          name="Window_Geo_lodA_2"
          castShadow
          receiveShadow
          geometry={nodes.Window_Geo_lodA_2.geometry}
          material={materials.Carbon1M}
        />
      </group>
      <mesh
        name="ChassisGrille1"
        castShadow
        receiveShadow
        geometry={nodes.ChassisGrille1.geometry}
        material={materials.Grille1A}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ChassisGrille2"
        castShadow
        receiveShadow
        geometry={nodes.ChassisGrille2.geometry}
        material={materials.Grille2A}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ChassisGrille3"
        castShadow
        receiveShadow
        geometry={nodes.ChassisGrille3.geometry}
        material={materials.Grille3A}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="ChassisInterior" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Interior_Geo_lodA001"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA001.geometry}
          material={materials.interior}
        />
        <mesh
          name="Interior_Geo_lodA001_1"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA001_1.geometry}
          material={materials.int_color1}
        />
      </group>
      <mesh
        name="ChassisLight"
        castShadow
        receiveShadow
        geometry={nodes.ChassisLight.geometry}
        material={materials.LightA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="ChassisPaint" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Paint_Geo_lodA"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA.geometry}
          material={materials.ext_chassis}
        />
        <mesh
          name="Paint_Geo_lodA_1"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA_1.geometry}
          material={materials.ext_carbon}
        />
      </group>
      <mesh
        name="DoorLCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.DoorLCarbon2.geometry}
        material={materials.Carbon2}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="DoorLColoured" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Coloured_Geo_lodA002"
          castShadow
          receiveShadow
          geometry={nodes.Coloured_Geo_lodA002.geometry}
          material={materials.Coloured}
        />
        <mesh
          name="Coloured_Geo_lodA002_1"
          castShadow
          receiveShadow
          geometry={nodes.Coloured_Geo_lodA002_1.geometry}
          material={materials.ext_mirror_cover}
        />
      </group>
      <mesh
        name="DoorLGlass"
        castShadow
        receiveShadow
        geometry={nodes.DoorLGlass.geometry}
        material={materials.glass_windshield}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="DoorLInterior" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Interior_Geo_lodA005"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA005.geometry}
          material={materials.interior}
        />
        <mesh
          name="Interior_Geo_lodA005_1"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA005_1.geometry}
          material={materials.int_color1}
        />
      </group>
      <group name="DoorLPaint" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Paint_Geo_lodA004"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA004.geometry}
          material={materials.ext_chassis}
        />
        <mesh
          name="Paint_Geo_lodA004_1"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA004_1.geometry}
          material={materials.ext_mirror_cover}
        />
      </group>
      <mesh
        name="DoorRCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.DoorRCarbon2.geometry}
        material={materials.Carbon2}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="DoorRColoured" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Coloured_Geo_lodA003"
          castShadow
          receiveShadow
          geometry={nodes.Coloured_Geo_lodA003.geometry}
          material={materials.Coloured}
        />
        <mesh
          name="Coloured_Geo_lodA003_1"
          castShadow
          receiveShadow
          geometry={nodes.Coloured_Geo_lodA003_1.geometry}
          material={materials.ext_mirror_cover}
        />
      </group>
      <mesh
        name="DoorRGlass"
        castShadow
        receiveShadow
        geometry={nodes.DoorRGlass.geometry}
        material={materials.glass_windshield}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="DoorRInterior" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Interior_Geo_lodA006"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA006.geometry}
          material={materials.interior}
        />
        <mesh
          name="Interior_Geo_lodA006_1"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA006_1.geometry}
          material={materials.int_color1}
        />
      </group>
      <group name="DoorRPaint" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Paint_Geo_lodA005"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA005.geometry}
          material={materials.ext_chassis}
        />
        <mesh
          name="Paint_Geo_lodA005_1"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA005_1.geometry}
          material={materials.ext_mirror_cover}
        />
      </group>
      <mesh
        name="DriverSeatBeltColoured"
        castShadow
        receiveShadow
        geometry={nodes.DriverSeatBeltColoured.geometry}
        material={materials.Coloured}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="DriverSeatCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.DriverSeatCarbon2.geometry}
        material={materials.Carbon2}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="DriverSeatInterior" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Interior_Geo_lodA009"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA009.geometry}
          material={materials.interior}
        />
        <mesh
          name="Interior_Geo_lodA009_1"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA009_1.geometry}
          material={materials.int_color2}
        />
        <mesh
          name="Interior_Geo_lodA009_2"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA009_2.geometry}
          material={materials.int_color1}
        />
      </group>
      <mesh
        name="DriverSeatInteriorTillingColourZone"
        castShadow
        receiveShadow
        geometry={nodes.DriverSeatInteriorTillingColourZone.geometry}
        material={materials.int_color3}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="GasPedalInterior"
        castShadow
        receiveShadow
        geometry={nodes.GasPedalInterior.geometry}
        material={materials.interior}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="HandBrakeCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.HandBrakeCarbon2.geometry}
        material={materials.Carbon2}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="HandBrakeInterior" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Interior_Geo_lodA008"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA008.geometry}
          material={materials.interior}
        />
        <mesh
          name="Interior_Geo_lodA008_1"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA008_1.geometry}
          material={materials.int_color1}
        />
      </group>
      <mesh
        name="HoodBadge"
        castShadow
        receiveShadow
        geometry={nodes.HoodBadge.geometry}
        material={materials.BadgeA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="HoodGrille1"
        castShadow
        receiveShadow
        geometry={nodes.HoodGrille1.geometry}
        material={materials.Grille1A}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="HoodInterior"
        castShadow
        receiveShadow
        geometry={nodes.HoodInterior.geometry}
        material={materials.interior}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="HoodPaint" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Paint_Geo_lodA003"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA003.geometry}
          material={materials.ext_chassis}
        />
        <mesh
          name="Paint_Geo_lodA003_1"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA003_1.geometry}
          material={materials.ext_livery_1}
        />
        <mesh
          name="Paint_Geo_lodA003_2"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA003_2.geometry}
          material={materials.ext_livery_2}
        />
      </group>
      <mesh
        name="ManufacturerPlate"
        castShadow
        receiveShadow
        geometry={nodes.ManufacturerPlate.geometry}
        material={materials.ManufacturerPlateA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="PassengerSeatBeltColoured"
        castShadow
        receiveShadow
        geometry={nodes.PassengerSeatBeltColoured.geometry}
        material={materials.Coloured}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="PassengerSeatCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.PassengerSeatCarbon2.geometry}
        material={materials.Carbon2}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="PassengerSeatInterior" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Interior_Geo_lodA010"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA010.geometry}
          material={materials.interior}
        />
        <mesh
          name="Interior_Geo_lodA010_1"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA010_1.geometry}
          material={materials.int_color2}
        />
        <mesh
          name="Interior_Geo_lodA010_2"
          castShadow
          receiveShadow
          geometry={nodes.Interior_Geo_lodA010_2.geometry}
          material={materials.int_color1}
        />
      </group>
      <mesh
        name="PassengerSeatInteriorTillingColourZone"
        castShadow
        receiveShadow
        geometry={nodes.PassengerSeatInteriorTillingColourZone.geometry}
        material={materials.int_color3}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="RoofPaint" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Paint_Geo_lodA002"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA002.geometry}
          material={materials.ext_roof}
        />
        <mesh
          name="Paint_Geo_lodA002_1"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA002_1.geometry}
          material={materials.ext_livery_1}
        />
        <mesh
          name="Paint_Geo_lodA002_2"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA002_2.geometry}
          material={materials.ext_livery_2}
        />
      </group>
      <mesh
        name="SteeringWheelBadge"
        castShadow
        receiveShadow
        geometry={nodes.SteeringWheelBadge.geometry}
        material={materials.BadgeA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="SteeringWheelCarbon2"
        castShadow
        receiveShadow
        geometry={nodes.SteeringWheelCarbon2.geometry}
        material={materials.Carbon2}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="SteeringWheelInterior"
        castShadow
        receiveShadow
        geometry={nodes.SteeringWheelInterior.geometry}
        material={materials.interior}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="SteeringWheelInteriorTilling"
        castShadow
        receiveShadow
        geometry={nodes.SteeringWheelInteriorTilling.geometry}
        material={materials.InteriorTillingA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="TrunkBadge"
        castShadow
        receiveShadow
        geometry={nodes.TrunkBadge.geometry}
        material={materials.BadgeA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="TrunkColoured"
        castShadow
        receiveShadow
        geometry={nodes.TrunkColoured.geometry}
        material={materials.Coloured}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="TrunkGlass" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Window_Geo_lodA003"
          castShadow
          receiveShadow
          geometry={nodes.Window_Geo_lodA003.geometry}
          material={materials.glass_windshield}
        />
        <mesh
          name="Window_Geo_lodA003_1"
          castShadow
          receiveShadow
          geometry={nodes.Window_Geo_lodA003_1.geometry}
          material={materials.glass_taillight}
        />
      </group>
      <mesh
        name="TrunkInterior"
        castShadow
        receiveShadow
        geometry={nodes.TrunkInterior.geometry}
        material={materials.interior}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="TrunkLight"
        castShadow
        receiveShadow
        geometry={nodes.TrunkLight.geometry}
        material={materials.LightA}
        position={[-0.06, 0.116, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <group name="TrunkPaint" position={[-0.06, 0.116, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Paint_Geo_lodA001"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA001.geometry}
          material={materials.ext_chassis}
        />
        <mesh
          name="Paint_Geo_lodA001_1"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA001_1.geometry}
          material={materials.ext_livery_1}
        />
        <mesh
          name="Paint_Geo_lodA001_2"
          castShadow
          receiveShadow
          geometry={nodes.Paint_Geo_lodA001_2.geometry}
          material={materials.ext_livery_2}
        />
      </group>
      <group name="Wheel1A_LF" position={[-1.438, 0.34, 0.822]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4.geometry}
          material={materials.Wheel1A}
        />
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4_1"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4_1.geometry}
          material={materials.ext_wheel}
        />
      </group>
      <group name="Wheel1A_LR" position={[1.311, 0.366, 0.802]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4171"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4171.geometry}
          material={materials.Wheel1A}
        />
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4171_1"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4171_1.geometry}
          material={materials.ext_wheel}
        />
      </group>
      <group name="CaliperLR" position={[1.311, 0.366, 0.802]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4004"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4004.geometry}
          material={materials.ext_brake_caliper}
        />
        <mesh
          name="Combined3DWheel_3DWheel_front_L_Instance1_Src4004_1"
          castShadow
          receiveShadow
          geometry={nodes.Combined3DWheel_3DWheel_front_L_Instance1_Src4004_1.geometry}
          material={materials.CaliperBadgeA}
        />
      </group>
      <mesh
        name="Wheel1A_RF"
        castShadow
        receiveShadow
        geometry={nodes.Wheel1A_RF.geometry}
        material={materials.Wheel1A}
        position={[-1.438, 0.34, -0.822]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="Wheel1A_RF001"
        castShadow
        receiveShadow
        geometry={nodes.Wheel1A_RF001.geometry}
        material={materials.ext_wheel}
        position={[-1.438, 0.34, -0.822]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="Wheel1A_RR"
        castShadow
        receiveShadow
        geometry={nodes.Wheel1A_RR.geometry}
        material={materials.Wheel1A}
        position={[1.311, 0.366, -0.802]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="Wheel1A_RR001"
        castShadow
        receiveShadow
        geometry={nodes.Wheel1A_RR001.geometry}
        material={materials.ext_wheel}
        position={[1.311, 0.366, -0.802]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/25.glb')
