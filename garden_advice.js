// Ask the user to enter the current season
let season = prompt("Enter a season (summer, winter, etc):").toLowerCase();

// Ask the user to enter the plant type
let plantType = prompt("Enter a plant type (flower or vegetable):").toLowerCase();

// Function to get season-based advice
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

// Function to get plant-type-based advice
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Combine the advice from both functions
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

// Display the final gardening advice
console.log(advice);

// TODO: Examples of possible features to add:
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.