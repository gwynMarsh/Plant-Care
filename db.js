const recipeDb = {
  "basic_foliar": {
    name: "Basic Foliar Spray Mix",
    ingredients: [
      { name: "Nicspray", min: 0.5, max: 0.5, unit: "g" },
      { name: "Calcium Acetate", min: 10.0, max: 10.0, unit: "ml" },
      { name: "Wood Vinegar", min: 1.0, max: 3.0, unit: "ml" },     // Range varies by weather
      { name: "Surfactant", min: 2.0, max: 4.0, unit: "ml" }        // Range varies by weather
    ]
  },
  "adv_foliar_1": {
    name: "Advanced Foliar Spray (Seaweed)",
    ingredients: [
      { name: "Green Seaweed Powder", min: 0.5, max: 0.5, unit: "g" },
      { name: "Nicspray", min: 0.5, max: 0.5, unit: "g" },
      { name: "Calcium Acetate", min: 10.0, max: 10.0, unit: "ml" },
      { name: "Surfactant", min: 2.0, max: 4.0, unit: "ml" }         // Range varies by weather
    ]
  },
  "adv_foliar_2": {
    name: "Advanced Foliar Spray (Energy+)",
    ingredients: [
      { name: "Green Seaweed Powder", min: 0.5, max: 0.5, unit: "g" },
      { name: "Amino Acids", min: 0.5, max: 0.5, unit: "g" },
      { name: "Surfactant", min: 2.0, max: 4.0, unit: "ml" }         // Range varies by weather
    ]
  },
   "adv_foliar_3": {
    name: "Advanced Foliar Spray (Growth+)",
    ingredients: [
      { name: "Green Seaweed Powder", min: 0.5, max: 0.5, unit: g" },
      { name: "Nicspray", min: 0.5, max: 0.5, unit: "g" },
      { name: "Urea", min: 0.5, max: 0.5, unit: "g" },
      { name: "Surfactant", min: 2.0, max: 4.0, unit: "ml" }           // Range varies by weather
    ]
  },
  "adv_foliar_4": {
    name: "Advanced Foliar Spray (Speedy Bloom)",
    ingredients: [
      { name: "Calcium-EDTA", min: 0.5, max: 0.5, unit: "g" },
      { name: "Boron", min: 0.25, max: 0.25, unit: "g" },
      { name: "Green Seaweed Powder", min: 0.5, max: 0.5, unit: "g" },
      { name: "Surfactant", min: 2.0, max: 4.0, unit: "ml" }           // Range varies by weather
    ]
	},
	"bio_boost": {
	name: "Bio-boost Solution",
	ingredients: [
	{ name: "Green Seaweed Powder", min: 1.0, max: 1.0, unit: "g" }
	{ name: "Fe-DTPA", min: 0.5, max: 0.5, unit: "g" }
	{ name: "Urea", min: 1.0, max: 1.0, unit: "g", optional: true }    // Optional ingredient
	]
	},
	"bloom_trigger": {
    name: "Bloom Trigger Solution",
	ingredients: [
	{ name: "Boron", min: 0.25, max: 0.25, unit: "g" },
	{ name: "TKPP", min: 1.0, max: 1.0, unit: "g" }
	{ name: "Green Seaweed Powder", min: 1.0, max: 1.0, unit: "g" }
	]
	}
};
