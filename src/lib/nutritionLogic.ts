export interface NutritionParams {
    weightLbs: number;
    ageMonths: number;
    activityLevel: 'sedentary' | 'active' | 'working';
    goal: 'lean' | 'maintain' | 'bulk';
}

export function calculateNutrition(params: NutritionParams) {
    const weightKg = params.weightLbs / 2.20462;
    const rer = 70 * Math.pow(weightKg, 0.75);

    let activityMultiplier = 1.6;
    if (params.activityLevel === 'sedentary') activityMultiplier = 1.2;
    else if (params.activityLevel === 'working') activityMultiplier = 2.0;

    let ageMultiplier = 1.0;
    if (params.ageMonths <= 4) ageMultiplier = 2.0;
    else if (params.ageMonths < 12) ageMultiplier = 1.5;

    let goalMultiplier = 1.0;
    if (params.goal === 'lean') goalMultiplier = 0.8;
    else if (params.goal === 'bulk') goalMultiplier = 1.2;

    const dailyCalories = Math.round(rer * activityMultiplier * ageMultiplier * goalMultiplier);

    // Approximate macro split (Protein 30%, Fat 20%, Carbs 50%) for dogs
    const proteinGrams = Math.round((dailyCalories * 0.30) / 3.5); // Approx 3.5 kcal/g for protein in dog food
    const fatGrams = Math.round((dailyCalories * 0.20) / 8.5); // Approx 8.5 kcal/g for fat

    let kibbleRec = "";
    let kibbleLink = "";

    if (params.ageMonths < 12) {
        kibbleRec = "Orijen Large Breed Puppy";
        kibbleLink = "https://amzn.to/example1"; // replace with actual
    } else if (params.activityLevel === 'working' || params.goal === 'bulk') {
        kibbleRec = "Bully Max High Performance";
        kibbleLink = "https://amzn.to/example2";
    } else {
        kibbleRec = "Purina Pro Plan Large Breed Adult";
        kibbleLink = "https://amzn.to/example3";
    }

    let supplementRec = "";
    let supplementLink = "";

    if (params.weightLbs > 80 || params.ageMonths >= 12 || params.activityLevel === 'working') {
        supplementRec = "Advanced Joint Support (Glucosamine/Chondroitin)";
        supplementLink = "https://amzn.to/example4";
    } else {
        supplementRec = "Wild Alaskan Salmon Oil (Omega-3)";
        supplementLink = "https://amzn.to/example5";
    }

    return { dailyCalories, proteinGrams, fatGrams, kibbleRec, kibbleLink, supplementRec, supplementLink };
}
