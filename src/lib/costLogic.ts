export interface CostResult {
    initialCost: number;
    annualCost: number;
    lifetimeCost: number;
    monthlyCost: number;
    firstYearCost: number;
    breakdown: {
        food: number;
        medical: number;
        insurance: number;
        gear: number;
        training: number;
    };
}

export type FoodQuality = "Standard" | "Premium" | "Raw";

export interface CostInputs {
    acquisitionCost: number;
    foodQuality: FoodQuality;
    lifeExpectancy: number;
    hasInsurance: boolean;
    hasProfessionalTraining: boolean;
}

export function calculateLifetimeCost(inputs: CostInputs): CostResult {
    const {
        acquisitionCost,
        foodQuality,
        lifeExpectancy,
        hasInsurance,
        hasProfessionalTraining
    } = inputs;

    // 1. Initial Costs
    const basicGear = 600; // Crate, bed, bowls, heavy-duty leash/collar
    const firstYearVet = 800; // Vaccinations, deworming, spay/neuter
    const initialCostsTotal = acquisitionCost + basicGear + firstYearVet;

    // 2. Annual Recurring Costs
    // Food costs (based on 100-140lb adult Corso)
    const annualFood = {
        "Standard": 1200,
        "Premium": 2000,
        "Raw": 3500
    }[foodQuality];

    const annualRoutineVet = 600; // Checkups, flea/tick/heartworm
    const annualInsurance = hasInsurance ? 1200 : 0; // ~100/mo for a giant breed
    const annualMisc = 500; // Toys, treats, replacements

    const annualCostTotal = annualFood + annualRoutineVet + annualInsurance + annualMisc;

    // 3. One-time First Year Add-ons
    const professionalTraining = hasProfessionalTraining ? 1500 : 200; // Group classes vs intensive

    // 4. Lifetime Total
    // First year cost is slightly different
    const firstYearCost = initialCostsTotal + annualCostTotal + professionalTraining;
    
    // Remaining years
    const remainingYears = lifeExpectancy - 1;
    const futureYearsCost = remainingYears * annualCostTotal;

    const lifetimeCost = firstYearCost + futureYearsCost;
    const monthlyCost = lifetimeCost / (lifeExpectancy * 12);

    return {
        initialCost: initialCostsTotal,
        annualCost: annualCostTotal,
        lifetimeCost,
        monthlyCost,
        firstYearCost,
        breakdown: {
            food: annualFood * lifeExpectancy,
            medical: (firstYearVet + (annualRoutineVet * lifeExpectancy)),
            insurance: annualInsurance * lifeExpectancy,
            gear: basicGear + (annualMisc * lifeExpectancy * 0.3), // Assuming treats/toys are part of misc
            training: professionalTraining
        }
    };
}
