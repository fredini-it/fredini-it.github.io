// sceneMaterialDefinitions.js
export const sceneMaterialDefinitions = {
  "concrete": {
    type: "paint",
    albedo: [0.7, 0.7, 0.7],
    roughness: 0.8,
    metallic: 0
  },
  "asphalt": {
    type: "paint",
    albedo: [0.2, 0.2, 0.2],
    roughness: 0.9,
    metallic: 0
  },
  "grass": {
    type: "leather", // Using leather as a stand-in for a textured surface
    albedo: [0.1, 0.5, 0.1],
    diffuseMap: "/textures/grass_diffuse.jpg",
    roughness: 0.7,
    metallic: 0
  }
};