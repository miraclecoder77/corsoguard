/**
 * Logic for converting dog age to human years for large/giant breeds like Cane Corso.
 */

export interface AgeResult {
    humanAge: number;
    lifeStage: string;
    description: string;
}

export function calculateHumanAge(years: number, months: number): AgeResult {
    const dogAge = years + (months / 12);
    let humanAge = 0;

    if (dogAge <= 1) {
        humanAge = 15 * dogAge;
    } else if (dogAge <= 2) {
        humanAge = 15 + (dogAge - 1) * 9;
    } else {
        humanAge = 24 + (dogAge - 2) * 7;
    }

    return {
        humanAge: Math.round(humanAge * 10) / 10,
        ...getLifeStage(dogAge)
    };
}

function getLifeStage(dogAge: number) {
    if (dogAge < 0.5) {
        return {
            lifeStage: "Young Puppy",
            description: "Rapid growth and socialization phase. Critical time for foundational training."
        };
    }
    if (dogAge < 1) {
        return {
            lifeStage: "Puppy",
            description: "High energy and exploration. Establishing pack structure and boundaries."
        };
    }
    if (dogAge < 2) {
        return {
            lifeStage: "Adolescent",
            description: "The 'testing' phase. Hormonal changes and physical filling out. Stay consistent with training."
        };
    }
    if (dogAge < 6) {
        return {
            lifeStage: "Adult",
            description: "Peak physical and mental maturity. Prime working and protection years."
        };
    }
    return {
        lifeStage: "Senior",
        description: "Entering the golden years. Focus on joint health, lower calorie intake, and comfort."
    };
}
