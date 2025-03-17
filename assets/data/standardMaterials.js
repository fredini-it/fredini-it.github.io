// standardMaterials.js
export const standardMaterials = {
  "glass_clear": {
    type: "glass", // Added
    albedo: [0.034230206565082, 0.0986891975410945, 0.034230206565082],
    metallic: 0.3,
    roughness: 0,
    opacity: 0.3,
    thickness: 0.01,
    clearCoat: {
      isEnabled: true,
      intensity: 1,
      roughness: 0.01,
      indexOfRefraction: 1.6,
      isTintEnabled: false,
      tintColor: [0, 0, 0],
      tintThickness: 1
    }
  },
  "glass_windshield": {
    type: "glass", // Added
    albedo: [0.034230206565082, 0.0986891975410945, 0.034230206565082],
    metallic: 0.3,
    roughness: 0,
    opacity: 0.3,
    thickness: 0.01,
    clearCoat: {
      isEnabled: true,
      intensity: 1,
      roughness: 0.01,
      indexOfRefraction: 1.6,
      isTintEnabled: false,
      tintColor: [0, 0, 0],
      tintThickness: 1
    }
  },
  "glass_window": {
    type: "glass", // Added
    albedo: [0.034230206565082, 0.0986891975410945, 0.034230206565082],
    metallic: 0.3,
    roughness: 0,
    opacity: 0.3,
    thickness: 0.01,
    clearCoat: {
      isEnabled: true,
      intensity: 1,
      roughness: 0.01,
      indexOfRefraction: 1.6,
      isTintEnabled: false,
      tintColor: [0, 0, 0],
      tintThickness: 1
    }
  },
  "glass_taillight": {
    type: "glass", // Added
    albedo: [0.81224148989849, 0, 0],
    metallic: 0,
    roughness: 0.05,
    opacity: 0.9,
    thickness: 0.01,
    clearCoat: {
      isEnabled: true,
      intensity: 1,
      roughness: 0.01,
      indexOfRefraction: 1.55,
      isTintEnabled: true,
      tintColor: [0.701169501531402, 0, 0],
      tintThickness: 1
    }
  },
  "ext_chrome": {
    type: "paint", // Added
    albedo: [0.870588235294118, 0.870588235294118, 0.870588235294118],
    metallic: 0.92,
    roughness: 0.23
  },
  "ext_carbon_red": {
    type: "carbon_fiber", // Added
    metallic: 0.5,
    roughness: 0.5,
    metallicF0Factor: 1.8,
    albedo: [0.2, 0.2, 0.5],
    clearCoat: {
      isEnabled: true,
      intensity: 1,
      roughness: 0.01,
      indexOfRefraction: 1.5,
      isTintEnabled: true,
      tintColor: [1, 0, 0],
      tintThickness: 2
    }
  },
  "mymagma": {
    type: "paint", // Added
    metallic: 0.8,
    roughness: 0.45,
    metallicF0Factor: 1.8,
    albedo: [0.722672453600254, 0.027755279978126, 0],
    clearCoat: {
      isEnabled: true,
      intensity: 0.75,
      roughness: 0,
      indexOfRefraction: 1.6,
      isTintEnabled: true,
      tintColor: [ 1, 1, 1],
      tintThickness: 1
  },
  "carbon_fiber_black": {
    type: "carbon_fiber",
    albedo: [0.1, 0.1, 0.1],
    metallic: 0.3,
    roughness: 0.5,
    normalMap: "/assets/textures/carbon_fiber_normal.png"
  }
 }
};