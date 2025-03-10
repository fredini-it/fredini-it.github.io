
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function tester(props) {
  const { nodes, materials } = useGLTF('/car.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="48cc9a76-8e76-4ba5-86db-8594ba28d833"
        castShadow
        receiveShadow
        geometry={nodes['48cc9a76-8e76-4ba5-86db-8594ba28d833'].geometry}
        material={materials.t_int_dash_lower_detail}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="1399bde9-8d0c-43d2-b8f2-6373dfd441da"
        castShadow
        receiveShadow
        geometry={nodes['1399bde9-8d0c-43d2-b8f2-6373dfd441da'].geometry}
        material={materials.v_ext_chrome}
        position={[-0.771, 0.315, 0.119]}
        rotation={[-1.48, -0.017, -3.042]}
        scale={[-0.1, 0.1, 0.1]}
      />
      <mesh
        name="1d8629e2-0ce9-4d8e-a097-6f6b5c127889"
        castShadow
        receiveShadow
        geometry={nodes['1d8629e2-0ce9-4d8e-a097-6f6b5c127889'].geometry}
        material={materials.f_door_inner}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, -Math.PI]}
        scale={[-0.1, 0.1, 0.1]}
      />
      <mesh
        name="309a6e2d-bc6f-4e8d-af03-0b7e9dcda927"
        castShadow
        receiveShadow
        geometry={nodes['309a6e2d-bc6f-4e8d-af03-0b7e9dcda927'].geometry}
        material={materials.v_int_softtouch_NERO}
        position={[-0.767, -0.054, -1.66]}
        rotation={[-1.979, -0.015, 3.082]}
        scale={[-0.1, 0.1, 0.1]}
      />
      <mesh
        name="6126effa-49e1-4cda-aab3-5c7b4463f4c2"
        castShadow
        receiveShadow
        geometry={nodes['6126effa-49e1-4cda-aab3-5c7b4463f4c2'].geometry}
        material={materials.t_ext_carpaint}
        position={[-1.399, 0.313, 0]}
        rotation={[-1.58, -0.01, 3.141]}
        scale={[-0.1, 0.1, 0.1]}
      />
      <mesh
        name="8a561625-e042-4e96-be38-c0ea4794c45f"
        castShadow
        receiveShadow
        geometry={nodes['8a561625-e042-4e96-be38-c0ea4794c45f'].geometry}
        material={materials.v_ext_metal_dark}
        position={[0.741, 0.676, -0.853]}
        rotation={[-3.079, 1.038, 1.517]}
        scale={[-0.498, 0.498, 0.498]}
      />
      <mesh
        name="9b9d7a90-e91c-4e0e-ade5-8f78410ce106"
        castShadow
        receiveShadow
        geometry={nodes['9b9d7a90-e91c-4e0e-ade5-8f78410ce106'].geometry}
        material={materials.v_blackout_14}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, -Math.PI]}
        scale={[-0.1, 0.1, 0.1]}
      />
      <mesh
        name="a5921c54-82ac-48e0-a477-008ec015908a"
        castShadow
        receiveShadow
        geometry={nodes['a5921c54-82ac-48e0-a477-008ec015908a'].geometry}
        material={materials.v_ext_plastic_black}
        position={[-1.496, 0.538, -0.067]}
        rotation={[-1.683, 0.041, 3.106]}
        scale={[-0.1, 0.1, 0.1]}
      />
      <mesh
        name="aabc680d-45c0-4157-aa37-b971c669432b"
        castShadow
        receiveShadow
        geometry={nodes['aabc680d-45c0-4157-aa37-b971c669432b'].geometry}
        material={materials.v_ext_rubber_in}
        position={[-2.915, 0.07, -0.001]}
        rotation={[-Math.PI / 2, -0.07, -Math.PI]}
        scale={[-0.173, 0.1, 0.1]}
      />
      <mesh
        name="04d6019d-6679-459c-a491-ebd604f78d0d"
        castShadow
        receiveShadow
        geometry={nodes['04d6019d-6679-459c-a491-ebd604f78d0d'].geometry}
        material={materials.v_int_icon_white}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="5e632f16-17c8-4507-9286-f9241ca34120"
        castShadow
        receiveShadow
        geometry={nodes['5e632f16-17c8-4507-9286-f9241ca34120'].geometry}
        material={materials.v_int_chrome}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="65399e27-b587-4457-bc36-bfae28f6733d"
        castShadow
        receiveShadow
        geometry={nodes['65399e27-b587-4457-bc36-bfae28f6733d'].geometry}
        material={materials.v_ext_mirror}
        position={[-1.423, 0.241, 0.097]}
        rotation={[-1.6, -0.016, 0.034]}
        scale={0.1}
      />
      <mesh
        name="7309caa2-3cf2-4309-a405-419e9bfce2c4"
        castShadow
        receiveShadow
        geometry={nodes['7309caa2-3cf2-4309-a405-419e9bfce2c4'].geometry}
        material={materials.v_ext_glass_headlight}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
        scale={0.1}
      />
      <mesh
        name="7f784793-3cd8-4e2f-9c85-bf5f53e4129e"
        castShadow
        receiveShadow
        geometry={nodes['7f784793-3cd8-4e2f-9c85-bf5f53e4129e'].geometry}
        material={materials.t_ext_carpaint_mirrorcover}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
        scale={0.1}
      />
      <mesh
        name="6239b118-ba47-49c9-8c8b-35ade144531d"
        castShadow
        receiveShadow
        geometry={nodes['6239b118-ba47-49c9-8c8b-35ade144531d'].geometry}
        material={materials.t_int_dash_lower_stitch_detail}
        position={[-0.117, 0.723, -0.416]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="5a413c42-1aa6-4066-a293-44e114a44b91"
        castShadow
        receiveShadow
        geometry={nodes['5a413c42-1aa6-4066-a293-44e114a44b91'].geometry}
        material={materials.v_int_glossy_black}
        position={[-1.343, 0.278, 0.016]}
        rotation={[-Math.PI / 2, -0.019, 0]}
        scale={0.096}
      />
      <mesh
        name="82859eee-42b4-4465-8cc1-d583b8f02b09"
        castShadow
        receiveShadow
        geometry={nodes['82859eee-42b4-4465-8cc1-d583b8f02b09'].geometry}
        material={materials.v_ext_indicator_riffle_amber}
        position={[-0.836, 0.581, 0.983]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="00a7d19e-f186-40e1-b494-fb0b79095aef"
        castShadow
        receiveShadow
        geometry={nodes['00a7d19e-f186-40e1-b494-fb0b79095aef'].geometry}
        material={materials.t_int_dash_upper_stitch}
        position={[-0.183, 0.814, -0.597]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="779d8c5b-39b1-429e-9341-5e9fbc6293de"
        castShadow
        receiveShadow
        geometry={nodes['779d8c5b-39b1-429e-9341-5e9fbc6293de'].geometry}
        material={materials.t_int_dash_upper_stitch_detail}
        position={[-0.183, 0.847, -0.039]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="2f13965a-f161-4f1a-84ec-8493674b13e5"
        castShadow
        receiveShadow
        geometry={nodes['2f13965a-f161-4f1a-84ec-8493674b13e5'].geometry}
        material={materials.t_int_carbon_parcelshelf_rearmoulding}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
        scale={0.1}
      />
      <mesh
        name="1c50830c-3a77-485c-a763-6da1e229c85b"
        castShadow
        receiveShadow
        geometry={nodes['1c50830c-3a77-485c-a763-6da1e229c85b'].geometry}
        material={materials.v_ext_glass_outside_NORMAL}
        position={[-1.4, 0.303, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
        scale={0.1}
      />
      <mesh
        name="0c159aa1-469e-4520-af7c-f9ab28b96642"
        castShadow
        receiveShadow
        geometry={nodes['0c159aa1-469e-4520-af7c-f9ab28b96642'].geometry}
        material={materials.v_int_display_glass}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="2612c048-9981-468a-9d2d-da518b571347"
        castShadow
        receiveShadow
        geometry={nodes['2612c048-9981-468a-9d2d-da518b571347'].geometry}
        material={materials.v_int_driverzone_modellogo}
        position={[-1.398, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="4d723f1d-aede-4135-9959-62275d4c64e2"
        castShadow
        receiveShadow
        geometry={nodes['4d723f1d-aede-4135-9959-62275d4c64e2'].geometry}
        material={materials.v_ext_carbon}
        position={[-1.4, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="196fc84c-c024-4920-b9e3-2fe970d38606"
        castShadow
        receiveShadow
        geometry={nodes['196fc84c-c024-4920-b9e3-2fe970d38606'].geometry}
        material={materials.v_ext_camera_lens}
        position={[-0.721, 0.474, 0]}
        rotation={[-Math.PI / 2, 0.008, 0]}
        scale={0.1}
      />
      <mesh
        name="16d219c8-c8fe-4ad1-bee4-661f368967da"
        castShadow
        receiveShadow
        geometry={nodes['16d219c8-c8fe-4ad1-bee4-661f368967da'].geometry}
        material={materials.t_ext_wheels_caliper}
        position={[-1.399, 0.307, -0.007]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="687d1a86-94b6-4c88-9cf3-acb4aad3bac4"
        castShadow
        receiveShadow
        geometry={nodes['687d1a86-94b6-4c88-9cf3-acb4aad3bac4'].geometry}
        material={materials.t_ext_exhaust}
        position={[-1.4, 0.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="5964b350-0669-44ab-8587-16eff550cec4"
        castShadow
        receiveShadow
        geometry={nodes['5964b350-0669-44ab-8587-16eff550cec4'].geometry}
        material={materials.t_int_steering_stitch_inner}
        position={[0.06, 0.689, 0.372]}
        rotation={[Math.PI, 0, 0]}
        scale={100}
      />
      <mesh
        name="332f5f29-9a0f-4599-84f3-ee7f8f0151ee"
        castShadow
        receiveShadow
        geometry={nodes['332f5f29-9a0f-4599-84f3-ee7f8f0151ee'].geometry}
        material={materials.v_ext_indicator_riffle_red}
        position={[-1.381, 0.21, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="03078f9f-200d-4935-a201-629129a663da"
        castShadow
        receiveShadow
        geometry={nodes['03078f9f-200d-4935-a201-629129a663da'].geometry}
        material={materials.SimpleColorMasked_Primer_Ferrari}
        position={[-1.4, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="1e595e79-7cbe-416e-a56e-b12da00631b6"
        castShadow
        receiveShadow
        geometry={nodes['1e595e79-7cbe-416e-a56e-b12da00631b6'].geometry}
        material={materials.v_ext_glass_inside_NORMAL}
        position={[-1.4, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
        scale={0.1}
      />
      <mesh
        name="6ed1e50b-b5a9-4a5e-8569-9271a4e0041f"
        castShadow
        receiveShadow
        geometry={nodes['6ed1e50b-b5a9-4a5e-8569-9271a4e0041f'].geometry}
        material={materials.cavallino_steering_wheel}
        position={[0.06, 0.813, 0.4]}
        rotation={[-Math.PI / 2, 1.257, 1.658]}
      />
      <mesh
        name="1e5c5894-49f8-4d5b-a1da-0da12ea795cf"
        castShadow
        receiveShadow
        geometry={nodes['1e5c5894-49f8-4d5b-a1da-0da12ea795cf'].geometry}
        material={materials.t_ext_wheels_brake_logo_brembo}
        position={[-1.103, 0.391, 0.887]}
        scale={0.972}
      />
      <mesh
        name="5a7dd8ce-6773-4820-a7ed-8ddee85a6459"
        castShadow
        receiveShadow
        geometry={nodes['5a7dd8ce-6773-4820-a7ed-8ddee85a6459'].geometry}
        material={materials.t_ext_wheels_brake_logo_ferrari}
        position={[-1.103, 0.391, 0.887]}
        scale={0.972}
      />
      <mesh
        name="30983de2-5352-4124-bb9e-c0551cf1a62e"
        castShadow
        receiveShadow
        geometry={nodes['30983de2-5352-4124-bb9e-c0551cf1a62e'].geometry}
        material={materials.v_ext_ferrari_bonnet}
        position={[-2.253, 0.574, 0]}
        rotation={[-Math.PI / 2, -0.007, 0]}
      />
      <mesh
        name="0525097a-e3db-4383-a92b-da21b9df6cbe"
        castShadow
        receiveShadow
        geometry={nodes['0525097a-e3db-4383-a92b-da21b9df6cbe'].geometry}
        material={materials.Fender_Shield}
        position={[-0.65, 0.695, -0.959]}
        rotation={[-1.585, 0.001, 0.037]}
      />
      <mesh
        name="01ab339a-70a2-4329-a462-d8e5ca6e1117"
        castShadow
        receiveShadow
        geometry={nodes['01ab339a-70a2-4329-a462-d8e5ca6e1117'].geometry}
        material={materials.v_ext_wiper}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="528354f1-8a82-4e8d-8d29-e11d5363ad3a"
        castShadow
        receiveShadow
        geometry={nodes['528354f1-8a82-4e8d-8d29-e11d5363ad3a'].geometry}
        material={materials.v_ext_plastic_black_normal}
        position={[-0.802, 0.817, -0.508]}
        rotation={[-1.653, -0.279, -0.161]}
        scale={[0.574, 0.757, 0.508]}
      />
      <mesh
        name="2ade4307-2ac4-492d-84ac-20dcd63583ed"
        castShadow
        receiveShadow
        geometry={nodes['2ade4307-2ac4-492d-84ac-20dcd63583ed'].geometry}
        material={materials.v_ext_canna_di_fucile_matt}
        position={[1.973, 0.464, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="11c847b3-bfb8-4d4a-b90b-129adfcd7c89"
        castShadow
        receiveShadow
        geometry={nodes['11c847b3-bfb8-4d4a-b90b-129adfcd7c89'].geometry}
        material={materials.v_ext_satin_grey}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="7bf85caa-73e4-4f69-9aac-5e4f4ddaa36c"
        castShadow
        receiveShadow
        geometry={nodes['7bf85caa-73e4-4f69-9aac-5e4f4ddaa36c'].geometry}
        material={materials.v_ext_rear_reflector_red}
        position={[-1.405, 0.35, 0.002]}
        rotation={[-Math.PI / 2, -0.01, 0]}
      />
      <mesh
        name="66e05bc2-4f91-454a-aa16-a054c7f636d5"
        castShadow
        receiveShadow
        geometry={nodes['66e05bc2-4f91-454a-aa16-a054c7f636d5'].geometry}
        material={materials.v_ext_rims_silver_standard}
        position={[-1.405, 0.331, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        name="011143b7-be79-48ca-86c6-a497e7da9c29"
        castShadow
        receiveShadow
        geometry={nodes['011143b7-be79-48ca-86c6-a497e7da9c29'].geometry}
        material={materials.v_ext_brakelight_emissive}
        position={[-1.661, 0.317, 0.007]}
        rotation={[-Math.PI / 2, -0.011, 0]}
      />
      <mesh
        name="6381cf55-3deb-4f4c-a715-ea2a5df4ce8f"
        castShadow
        receiveShadow
        geometry={nodes['6381cf55-3deb-4f4c-a715-ea2a5df4ce8f'].geometry}
        material={materials.Taillight_Bake}
        position={[2.047, 0.836, 0.558]}
        rotation={[0, 1.222, 0]}
      />
      <mesh
        name="c470af57-2d62-40cb-9c37-b332260325a2"
        castShadow
        receiveShadow
        geometry={nodes['c470af57-2d62-40cb-9c37-b332260325a2'].geometry}
        material={materials.v_int_reflector}
        position={[-1.652, 0.319, 0.026]}
        rotation={[-Math.PI / 2, -0.01, 0]}
      />
      <mesh
        name="a6f6454f-03f0-49a5-a171-31c5135373c2"
        castShadow
        receiveShadow
        geometry={nodes['a6f6454f-03f0-49a5-a171-31c5135373c2'].geometry}
        material={materials.text_and_icons_int}
        position={[-0.072, 0.735, 0.686]}
        rotation={[-2.247, 1.157, 0.728]}
        scale={1.687}
      />
      <mesh
        name="19abcddd-bcdc-4ee6-b892-d42f3c47fb2a"
        castShadow
        receiveShadow
        geometry={nodes['19abcddd-bcdc-4ee6-b892-d42f3c47fb2a'].geometry}
        material={materials.v_ext_daylight}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="1b2a889f-9645-4e84-b14f-0a3f807ffe0e"
        castShadow
        receiveShadow
        geometry={nodes['1b2a889f-9645-4e84-b14f-0a3f807ffe0e'].geometry}
        material={materials.v_ext_plastic_black_headlight}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="4a9a3a2b-9870-4574-99f3-1900f007426b"
        castShadow
        receiveShadow
        geometry={nodes['4a9a3a2b-9870-4574-99f3-1900f007426b'].geometry}
        material={materials.t_int_decor_door_sill}
        position={[-1.399, 0.304, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="76bea088-7032-4b75-9c08-ff58147bdd7b"
        castShadow
        receiveShadow
        geometry={nodes['76bea088-7032-4b75-9c08-ff58147bdd7b'].geometry}
        material={materials.v_int_icons}
        position={[0.124, 0.517, 0.047]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="304d102e-b15e-4f13-bf94-c1e08ff91259"
        castShadow
        receiveShadow
        geometry={nodes['304d102e-b15e-4f13-bf94-c1e08ff91259'].geometry}
        material={materials.t_int_boot_lower}
        position={[1.873, 0.535, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="83cce3df-0428-4f39-81e0-ba9a04d17b1f"
        castShadow
        receiveShadow
        geometry={nodes['83cce3df-0428-4f39-81e0-ba9a04d17b1f'].geometry}
        material={materials.t_ext_licenceplate}
        position={[2.255, 0.58, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="54161f37-e6c1-4840-a961-6e450d7cb067"
        castShadow
        receiveShadow
        geometry={nodes['54161f37-e6c1-4840-a961-6e450d7cb067'].geometry}
        material={materials.t_int_boot_straps_stitch}
        position={[1.178, 0.74, 0.184]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="3098d78f-6a57-4f24-b429-c2273c35fbac"
        castShadow
        receiveShadow
        geometry={nodes['3098d78f-6a57-4f24-b429-c2273c35fbac'].geometry}
        material={materials.v_ext_brake}
        position={[-1.296, 0.35, 0]}
        rotation={[Math.PI, 0, 0]}
        scale={100}
      />
      <mesh
        name="65c3d721-e2ee-4e83-964d-1833a35e7736"
        castShadow
        receiveShadow
        geometry={nodes['65c3d721-e2ee-4e83-964d-1833a35e7736'].geometry}
        material={materials['v_ext_plastic_black.001']}
        position={[-1.398, 0.321, 0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="318825ab-ddcc-4b26-b958-28f03e34ec29"
        castShadow
        receiveShadow
        geometry={nodes['318825ab-ddcc-4b26-b958-28f03e34ec29'].geometry}
        material={materials.wheel}
        position={[-1.4, 0.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="f51aa1c2-db7b-417a-b6ad-8f67b956d86e"
        castShadow
        receiveShadow
        geometry={nodes['f51aa1c2-db7b-417a-b6ad-8f67b956d86e'].geometry}
        material={materials['wheel.001']}
        position={[-1.4, 0.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="3f86edfc-a84b-4051-af55-fbf0456e2297"
        castShadow
        receiveShadow
        geometry={nodes['3f86edfc-a84b-4051-af55-fbf0456e2297'].geometry}
        material={materials.t_int_dash_lower_detail}
        position={[-1.4, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
      />
      <mesh
        name="95faaf9b-7285-48c4-aa83-f50d7ad7a631"
        castShadow
        receiveShadow
        geometry={nodes['95faaf9b-7285-48c4-aa83-f50d7ad7a631'].geometry}
        material={materials.t_int_dash_lower_detail}
        position={[-1.4, 0.304, 0]}
        rotation={[-Math.PI / 2, -0.01, 0]}
      />
    </group>
  )
}

useGLTF.preload('/car.glb')
